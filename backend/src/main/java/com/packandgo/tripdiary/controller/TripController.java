package com.packandgo.tripdiary.controller;

import com.packandgo.tripdiary.payload.response.MessageResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/trip/")
public class TripController {
    @PostMapping("/insertTrip")
    public ResponseEntity<?> insertTrip() {
        return ResponseEntity.ok(new MessageResponse("Trip was inserted successfully"));
    }
}