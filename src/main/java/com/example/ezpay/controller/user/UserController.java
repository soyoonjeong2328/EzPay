package com.example.ezpay.controller.user;

import com.example.ezpay.model.user.Users;
import com.example.ezpay.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<Users> createUser(@RequestBody Users user) {
        Users saveUser = userService.saveUser(user);
        return ResponseEntity.ok(saveUser);
    }
}
