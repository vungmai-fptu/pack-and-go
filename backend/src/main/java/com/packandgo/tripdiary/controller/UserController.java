package com.packandgo.tripdiary.controller;

import com.packandgo.tripdiary.exception.UserNotFoundException;
import com.packandgo.tripdiary.model.Trip;
import com.packandgo.tripdiary.model.User;
import com.packandgo.tripdiary.model.UserInfo;
import com.packandgo.tripdiary.payload.request.user.ChangePasswordRequest;
import com.packandgo.tripdiary.payload.request.user.InfoUpdateRequest;
import com.packandgo.tripdiary.payload.response.ErrorResponse;
import com.packandgo.tripdiary.payload.response.MessageResponse;
import com.packandgo.tripdiary.payload.response.UserResponse;
import com.packandgo.tripdiary.service.TripService;
import com.packandgo.tripdiary.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final TripService tripservice;

    @Autowired
    public UserController(UserService userService,
                          PasswordEncoder passwordEncoder,
                          TripService tripservice) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.tripservice = tripservice;
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
    public ResponseEntity<?> infoUpdate(
            @RequestBody InfoUpdateRequest infoUpdateRequest) {
        //get current user
        UserDetails userDetails = (UserDetails) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        User user = userService.findUserByUsername(userDetails.getUsername());

        userService.updateUserInfo(user, infoUpdateRequest);

        return ResponseEntity.ok(new MessageResponse("Update successfully"));
    }

    @ExceptionHandler(value = {HttpMessageNotReadableException.class})
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<ErrorResponse> handDateConvertException(Exception ex, WebRequest request) {
        ErrorResponse error = new ErrorResponse(
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                "Invalid date format, correct format is yyyy-MM-dd",
                new Date(),
                ((ServletWebRequest) request).getRequest().getRequestURI().toString()
        );
        return ResponseEntity.internalServerError().body(error);
    }

    @GetMapping("/account")
    public ResponseEntity<?> getAccountInfo() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        User user = userService.findUserByUsername(userDetails.getUsername());

        return ResponseEntity.ok(userService.getInfo(user));
    }

    @GetMapping("/{username}")
    public ResponseEntity<?> getUserWithAllTrips(@PathVariable(name = "username", required = true) String username) {
        User user = userService.findUserByUsername(username);
        UserInfo userInfo = userService.getInfo(user);
        List<Trip> trips = tripservice.getTripsForUser(user);

        UserResponse userResponse = new UserResponse();

        userResponse.setUsername(username);
        userResponse.setAboutMe(userInfo.getAboutMe());
        userResponse.setCountry(userInfo.getCountry());
        userResponse.setProfileImageUrl(userInfo.getProfileImageUrl());
        userResponse.setCoverImageUrl(userInfo.getCoverImageUrl());
        userResponse.setTrips(trips);

        return ResponseEntity.ok(userResponse);
    }

}
