package com.packandgo.tripdiary.controller;

import com.packandgo.tripdiary.exception.TripNotFoundException;
import com.packandgo.tripdiary.model.Trip;
import com.packandgo.tripdiary.payload.request.trip.LikeRequest;
import com.packandgo.tripdiary.payload.request.trip.TripRequest;
import com.packandgo.tripdiary.payload.response.MessageResponse;
import com.packandgo.tripdiary.payload.response.TripListResponse;
import com.packandgo.tripdiary.service.TripService;
import com.packandgo.tripdiary.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trips")
public class TripController {
    private final TripService tripService;
    private final UserService userService;

    @Autowired
    public TripController(TripService tripService, UserService userService) {
        this.tripService = tripService;
        this.userService = userService;
    }


    @GetMapping("/{id}")
    @ExceptionHandler(value = {TripNotFoundException.class})
    public ResponseEntity<?> getTrip(@PathVariable(name = "id", required = true) Long tripId) {
        Trip trip = tripService.get(tripId);
        return ResponseEntity.ok(trip);
    }

    @GetMapping("")
    public ResponseEntity<?> getAllTrips(@RequestParam(defaultValue = "0") int page,
                                         @RequestParam(defaultValue = "10") int size) {

        List<Trip> trips = tripService.getTrips(page, size);
        TripListResponse response = new TripListResponse(page, size, trips);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/insert")
    public ResponseEntity<?> insertTrip(@RequestBody TripRequest tripRequest) {
        tripService.insertTrip(tripRequest);
        return ResponseEntity.ok(new MessageResponse("Trip was inserted successfully"));
    }

    @DeleteMapping("/remove/{id}")
    public ResponseEntity<?> deleteTrip(@PathVariable(name = "id", required = true) Long tripId) {
        tripService.removeTrip(tripId);
        return ResponseEntity.ok(new MessageResponse("Trip was removed successfully"));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateTrip(@PathVariable(name = "id", required = true) Long tripId,
                                        @RequestBody TripRequest request) {
        tripService.updateTrip(tripId, request);
        return ResponseEntity.ok(new MessageResponse("Trip was update successfully"));
    }

    @PostMapping("/like")
    public ResponseEntity<?> likeTrip(@RequestBody LikeRequest request){
        if(!tripService.existedLike(request)){
            tripService.likeTrip(request);
            return ResponseEntity.ok(new MessageResponse("Trip was liked successfully"));
        }else {
            tripService.likeTrip(request);
            return ResponseEntity.ok(new MessageResponse("Trip was unliked successfully"));
        }
    }

}