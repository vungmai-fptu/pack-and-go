package com.packandgo.tripdiary.controller;

import com.packandgo.tripdiary.auth.oauth2.GoogleOAuth2UserInfo;
import com.packandgo.tripdiary.auth.oauth2.OAuth2UserInfo;
import com.packandgo.tripdiary.model.Role;
import com.packandgo.tripdiary.model.User;
import com.packandgo.tripdiary.model.UserInfo;
import com.packandgo.tripdiary.payload.response.JwtResponse;
import com.packandgo.tripdiary.repository.RoleRepository;
import com.packandgo.tripdiary.repository.UserRepository;
import com.packandgo.tripdiary.util.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

@RestController
public class JwtCreateController {

    private final JwtUtils jwtUtils;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public JwtCreateController(JwtUtils jwtUtils,
                               UserRepository userRepository,
                               RoleRepository roleRepository,
                               PasswordEncoder passwordEncoder) {
        this.jwtUtils = jwtUtils;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/oauth2/jwt/google")
    public ResponseEntity<?> generateJwtToken(@RequestBody Map<String, Object> data) {
        System.out.println("JWT Creating...");

        OAuth2UserInfo userInfo = new GoogleOAuth2UserInfo((Map<String, Object>) data.get("profileObj"));

        User existedUser =
                userRepository.findByEmail(userInfo.getEmail()).orElseGet(() -> null);
        if (existedUser == null) {
            //create user
            User user = new User();
            user.setUsername(userInfo.getName());
            user.setEmail(userInfo.getEmail());
            Role role = roleRepository.findByName("USER").orElseGet(() -> new Role("USER"));
            Set<Role> roles = new HashSet<>();
            roles.add(role);
            user.setRoles(roles);

            UserInfo info = new UserInfo();
            info.setProfileImageUrl(userInfo.getProfileImageUrl());
            user.setUserinfo(info);

            User insertedUser = userRepository.save(user);
            System.out.println(insertedUser);
        }

        String jwtToken = jwtUtils.generateJwtTokenFromUsername(userInfo.getName());

        JwtResponse response = new JwtResponse(
                jwtToken,
                userInfo.getName(),
                userInfo.getEmail());

        return ResponseEntity.ok(response);
    }
}
