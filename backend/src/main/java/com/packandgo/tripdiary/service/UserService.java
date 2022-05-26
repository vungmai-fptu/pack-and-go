package com.packandgo.tripdiary.service;

import com.packandgo.tripdiary.model.User;

public interface UserService {
    public User findUserByEmail(String email);
    public User findUserByUsername(String username);
    public User findUserByUsernameOrEmail(String usernameOrEmail);
    public boolean existsByUsername(String username);
    public boolean existsByEmail(String email);
    public String createPasswordResetTokenForUser(User user);
    public void save(User user) throws Exception;
    public void changePassword(User user, String newPassword);
    public boolean verify(String verifyToken);
}
