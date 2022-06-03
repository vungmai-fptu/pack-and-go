package com.packandgo.tripdiary.controller;

import com.packandgo.tripdiary.payload.response.MessageResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/test")
public class TestController {
    @GetMapping(value = "/employees")
    public ResponseEntity<?> getEmployees() {
        return ResponseEntity.ok(new MessageResponse("All Employees"));
    }

    @GetMapping(value = "/")
    public ResponseEntity<?> getIndex() {
        return ResponseEntity.ok(new MessageResponse("Home"));
    }
}
