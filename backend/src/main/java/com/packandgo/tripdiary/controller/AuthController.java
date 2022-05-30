package com.packandgo.tripdiary.controller;

import com.packandgo.tripdiary.auth.UserDetailsImpl;
import com.packandgo.tripdiary.model.Role;
import com.packandgo.tripdiary.model.User;
import com.packandgo.tripdiary.model.mail.MailContent;
import com.packandgo.tripdiary.model.mail.ResetPasswordMailContent;
import com.packandgo.tripdiary.payload.request.*;
import com.packandgo.tripdiary.payload.response.JwtResponse;
import com.packandgo.tripdiary.payload.response.MessageResponse;
import com.packandgo.tripdiary.repository.RoleRepository;
import com.packandgo.tripdiary.service.EmailSenderService;
import com.packandgo.tripdiary.service.PasswordResetService;
import com.packandgo.tripdiary.service.UserService;
import com.packandgo.tripdiary.util.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import javax.websocket.server.PathParam;
import java.net.URI;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Value("${tripdiary.baseurl}")
    private String BASE_URL;

    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;
    private final EmailSenderService emailSenderService;
    private final PasswordResetService passwordResetService;

    @Autowired
    public AuthController(AuthenticationManager authenticationManager,
                          UserService userService,
                          RoleRepository roleRepository,
                          PasswordEncoder passwordEncoder,
                          JwtUtils jwtUtils, EmailSenderService emailSenderService,
                          PasswordResetService passwordResetService) {
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtils = jwtUtils;
        this.emailSenderService = emailSenderService;
        this.passwordResetService = passwordResetService;
    }

    @PostMapping(value = "/signin")
    public ResponseEntity<?> signin(@RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsernameOrEmail(),
                        loginRequest.getPassword())
        );


        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        User user = userService.findUserByUsername(userDetails.getUsername());

        if (!user.isEnabled()) {
            return ResponseEntity.badRequest().body(new MessageResponse("Account hasn't been verified"));
        }

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        JwtResponse body = new JwtResponse(
                jwt,
                userDetails.getUsername(),
                userDetails.getEmail());
        return new ResponseEntity<>(body, HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest, HttpServletRequest request) throws Exception {
        User user = new User(
                registerRequest.getUsername(),
                registerRequest.getEmail(),
                passwordEncoder.encode(registerRequest.getPassword())
        );
        Role role = roleRepository.findByName("USER").orElseGet(() -> new Role("USER"));
        Set<Role> roles = new HashSet<>();
        roles.add(role);

        user.setRoles(roles);

        userService.register(user, getSiteURL(request));

        return ResponseEntity
                .ok()
                .body(new MessageResponse("User register successfully. Check email to verify"));
    }

    private String getSiteURL(HttpServletRequest request) {
        String siteURL = request.getRequestURL().toString();
        return siteURL.replace(request.getServletPath(), "");
    }

    @PostMapping("/reset-password-request")
    public ResponseEntity<?> resetPasswordRequest(@RequestBody PasswordResetRequest resetPasswordRequest, HttpServletRequest request) {
        //check if it is a existed email
        String email = resetPasswordRequest.getEmail();
        boolean existedEmail = userService.existsByEmail(email);

        if (!existedEmail) {
            throw new IllegalArgumentException("Email does not exist");
        }

        User user = userService.findUserByEmail(email);
        String token = userService.createPasswordResetTokenForUser(user);

        //sendEmail
        //create reset password email;
        MailContent mailContent = new ResetPasswordMailContent(user.getEmail(),token,BASE_URL);
        emailSenderService.sendEmail(mailContent);

        return ResponseEntity.ok(new MessageResponse("Email sent"));
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody NewPasswordRequest newPasswordRequest) {
        //validate token;

        String passwordResetToken = newPasswordRequest.getToken();

        boolean isValidToken = passwordResetService.validatePasswordResetToken(passwordResetToken);

        if (!isValidToken) {
            throw new IllegalArgumentException("Reset password token is expired");
        }

        User user = passwordResetService.findUserFromToken(passwordResetToken);

        if (user == null) {
            throw new UsernameNotFoundException("User not found with token");
        }

        userService.changePassword(user, newPasswordRequest.getNewPassword());
        passwordResetService.invalidateToken(passwordResetToken);

        return ResponseEntity.ok(new MessageResponse("Change password successfully"));
    }


    @GetMapping("/verify")
    public ResponseEntity<?> verify(@PathParam("token") String token) {
        boolean isValidToken = userService.verify(token);
        if (isValidToken) {
            return ResponseEntity.status(HttpStatus.FOUND).location(URI.create(BASE_URL + "/login")).build();
        } else {
            return ResponseEntity.status(HttpStatus.FOUND).location(URI.create(BASE_URL + "/invalid-verify-code")).build();
        }
    }
}
