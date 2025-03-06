package com.example.ezpay.request;

import com.example.ezpay.model.user.PasswordReset;
import com.example.ezpay.model.user.User;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class PasswordResetRequest {
    private String email;

    public PasswordReset toEntity(User user, String token, LocalDateTime expirationTime) {
        return PasswordReset
                .builder()
                .user(user)
                .resetToken(token)
                .expirationTime(expirationTime)
                .used(false)
                .build();
    }
}
