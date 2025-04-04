package com.example.ezpay.controller.user;

import com.example.ezpay.model.user.User;
import com.example.ezpay.request.LoginRequest;
import com.example.ezpay.request.UserRequest;
import com.example.ezpay.response.CommonResponse;
import com.example.ezpay.response.UserResponse;
import com.example.ezpay.service.user.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // 회원가입
    @PostMapping("/signup")
    public ResponseEntity<CommonResponse<User>> createUser(@RequestBody UserRequest userRequest) {
        User user = userService.registerUser(userRequest);
        CommonResponse<User> response = new CommonResponse<>(
                "success", user, "User created successfully"
        );

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    // 로그인
    @PostMapping("/login")
    public ResponseEntity<CommonResponse<String>> login(@RequestBody LoginRequest loginRequest) {
        String token = userService.login(loginRequest);

        if (token == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new CommonResponse<>("error", null, "Invalid username or password"));
        }

        return ResponseEntity.ok(new CommonResponse<>("success", token, "Login successful"));
    }

    // 사용자 정보
    @GetMapping("/me")
    public ResponseEntity<CommonResponse<UserResponse>> getMyInfo(Authentication authentication) {
        if(authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new CommonResponse<>("error", null, "Authentication is null"));
        }

        // JWT에서 저장된 값(현재email)
        String email = ((UserDetails) authentication.getPrincipal()).getUsername();
        UserResponse response = userService.getUserInfo(email);

        return ResponseEntity.ok(new CommonResponse<>("success", response, "사용자 정보 조회 성공 "));
    }

    // 특정 회원 조회
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }

    // 회원 수정
    @PutMapping("/{id}")
    public ResponseEntity<CommonResponse<User>> updateUser(@PathVariable Long id, @RequestBody UserRequest userRequest) {
        User user = userService.updateUser(id, userRequest);
        CommonResponse<User> response = new CommonResponse<>(
                "success", user, "User updated successfully"
        );
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    // 회원 탈퇴
    @DeleteMapping("/{id}")
    public ResponseEntity<CommonResponse<String>> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        CommonResponse<String> response = new CommonResponse<>(
                "success", null, "User deleted successfully"
        );
        return ResponseEntity.ok(response);
    }

}
