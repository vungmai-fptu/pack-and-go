package com.packandgo.tripdiary.controller;

import com.packandgo.tripdiary.payload.request.trip.TripRequest;
import com.packandgo.tripdiary.payload.response.MessageResponse;
import com.packandgo.tripdiary.service.TripService;
import com.packandgo.tripdiary.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/trip/")
public class TripController {
    private final TripService tripService;
    private final UserService userService;

    @Autowired
    public TripController(TripService tripService, UserService userService) {
        this.tripService = tripService;
        this.userService = userService;
    }


    @PostMapping("/insertTrip")
    public ResponseEntity<?> insertTrip(@RequestBody TripRequest tripRequest) {
        tripService.insertTrip(tripRequest);
        return ResponseEntity.ok(new MessageResponse("Trip was inserted successfully"));
    }
}