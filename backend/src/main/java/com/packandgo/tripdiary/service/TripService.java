package com.packandgo.tripdiary.service;

import com.packandgo.tripdiary.payload.request.trip.TripRequest;

public interface TripService {
    public void insertTrip(TripRequest request);
}
