package com.packandgo.tripdiary.service.impl;

import com.packandgo.tripdiary.enums.UserStatus;
import com.packandgo.tripdiary.model.PasswordResetToken;
import com.packandgo.tripdiary.model.User;
import com.packandgo.tripdiary.model.UserInfo;
import com.packandgo.tripdiary.model.mail.MailContent;
import com.packandgo.tripdiary.model.mail.VerifyEmailMailContent;
import com.packandgo.tripdiary.repository.PasswordResetRepository;
import com.packandgo.tripdiary.repository.UserInfoRepository;
import com.packandgo.tripdiary.repository.UserRepository;
import com.packandgo.tripdiary.service.EmailSenderService;
import com.packandgo.tripdiary.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserInfoRepository userInfoRepository;
    private final PasswordResetRepository passwordResetRepository;
    private final PasswordEncoder passwordEncoder;
    private final EmailSenderService emailSenderService;

    @Autowired
    public UserServiceImpl(UserRepository userRepository,
                           UserInfoRepository userInfoRepository,
                           PasswordResetRepository passwordResetRepository,
                           PasswordEncoder passwordEncoder,
                           EmailSenderService emailSenderService) {
        this.userRepository = userRepository;
        this.userInfoRepository = userInfoRepository;
        this.passwordResetRepository = passwordResetRepository;
        this.passwordEncoder = passwordEncoder;
        this.emailSenderService = emailSenderService;
    }

    @Override
    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    @Override
    public User findUserByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    @Override
    public User findUserByUsernameOrEmail(String usernameOrEmail) {
        return userRepository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    @Override
    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }


    @Override
    @Transactional
    public String createPasswordResetTokenForUser(User user) {
        String token = UUID.randomUUID().toString();
        PasswordResetToken passwordResetToken = new PasswordResetToken();
        passwordResetToken.setToken(token);
        passwordResetToken.setUser(user);
        passwordResetToken.setExpiryDate(new Date(new Date().getTime() + PasswordResetToken.EXPIRE_DURATION));

        passwordResetRepository.save(passwordResetToken);

        return token;

    }

    @Override
    @Transactional
    public void register(User user, String siteURL) throws Exception {
        if (user != null) {
            if (userRepository.existsByUsername(user.getUsername())) {
                throw new Exception("Username has already exist");
            }
            if (userRepository.existsByEmail(user.getEmail())) {
                throw new Exception("Email has already exist");
            }

            //create verify email
            MailContent mailContent = new VerifyEmailMailContent(user.getEmail(), user.getVerifyToken(), siteURL);
            emailSenderService.sendEmail(mailContent);
            userRepository.save(user);
        }
    }

    @Override
    @Transactional
    public void changePassword(User user, String newPassword) {
        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);
    }

    @Override
    public boolean verify(String verifyToken) {
        User user = userRepository.findByVerifyToken(verifyToken);
        if (user == null || user.isEnabled()) {
            return false;
        } else {
            user.setVerifyToken(null);
            user.setStatus(UserStatus.ACTIVE);
            userRepository.save(user);
            return true;
        }

    }

    @Override
    @Transactional
    public void removeUser(String username) {
        boolean isExist = userRepository.existsByUsername(username);
        if (!isExist) {
            throw new UsernameNotFoundException("User with username \"" + username + "\" doesn't exist");
        }

        userRepository.removeUserByUsername(username);
    }


    @Override
    @Transactional
    public void saveUserInfo(UserInfo info) {
        userInfoRepository.save(info);
    }



}
