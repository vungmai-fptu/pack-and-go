package com.packandgo.tripdiary.service;

import com.packandgo.tripdiary.model.Trip;
import com.packandgo.tripdiary.payload.request.trip.TripRequest;
import org.springframework.data.domain.Page;

import java.util.List;

public interface TripService {
    public void insertTrip(TripRequest request);
    public List<Trip> getTrips(int page, int size);
    public void removeTrip(Long id);
    public void updateTrip(Long tripId, TripRequest request);
    public Trip get(Long id);
}
