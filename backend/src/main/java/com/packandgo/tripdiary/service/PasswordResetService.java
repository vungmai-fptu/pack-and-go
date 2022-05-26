package com.packandgo.tripdiary.service;

import com.packandgo.tripdiary.model.User;

import java.util.Optional;

public interface PasswordResetService {
    public boolean validatePasswordResetToken(String token);
    public void invalidateToken(String token);
    public User findUserFromToken(String token);
}
