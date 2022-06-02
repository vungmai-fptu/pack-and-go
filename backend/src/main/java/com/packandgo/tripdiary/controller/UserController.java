package com.packandgo.tripdiary.controller;

import com.packandgo.tripdiary.model.User;
import com.packandgo.tripdiary.model.UserInfo;
import com.packandgo.tripdiary.payload.request.user.ChangePasswordRequest;
import com.packandgo.tripdiary.payload.request.user.InfoUpdateRequest;
import com.packandgo.tripdiary.payload.response.MessageResponse;
import com.packandgo.tripdiary.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user/")
public class UserController {
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserController(UserService userService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest newPasswordRequest) {

        //get current user
        UserDetails userDetails = (UserDetails) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        User user = userService.findUserByUsername(userDetails.getUsername());

        if (!passwordEncoder.matches(newPasswordRequest.getCurrentPassword(), user.getPassword())) {
            throw new IllegalArgumentException("Current password is not correct");
        }

        userService.changePassword(user, newPasswordRequest.getNewPassword());
        return ResponseEntity.ok(new MessageResponse("Change password successfully"));
    }

    @PostMapping("/update")
    public ResponseEntity<?> infoUpdate(@RequestBody InfoUpdateRequest infoUpdateRequest) {
        //get current user
        UserDetails userDetails = (UserDetails) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        User user = userService.findUserByUsername(userDetails.getUsername());

        UserInfo userInfo = userService.findUserInfoByUserId(user.getId());

        if(user.getId() == 0){
            return ResponseEntity.ok(new MessageResponse("Update failed"));
        }

        userService.updateUserInfo(userInfo, infoUpdateRequest);

        return ResponseEntity.ok(new MessageResponse("Update successfully"));
    }
}
