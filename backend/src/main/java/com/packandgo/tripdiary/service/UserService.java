package com.packandgo.tripdiary.service;

import com.packandgo.tripdiary.model.User;
import com.packandgo.tripdiary.model.UserInfo;
import com.packandgo.tripdiary.payload.request.auth.NewPasswordRequest;
import com.packandgo.tripdiary.payload.request.auth.RegisterRequest;

public interface UserService {
    public User findUserByEmail(String email);
    public User findUserByUsername(String username);
    public User findUserByUsernameOrEmail(String usernameOrEmail);
    public boolean existsByUsername(String username);
    public boolean existsByEmail(String email);
    public String createPasswordResetTokenForUser(User user);
    public void register(RegisterRequest request, String siteURL) throws Exception;
    public boolean verify(String verifyToken);
    public void changePassword(User user, String newPassword);
    public void removeUser(String username);
    public void saveUserInfo(UserInfo info);
    public void resetPassword(NewPasswordRequest request);




}
