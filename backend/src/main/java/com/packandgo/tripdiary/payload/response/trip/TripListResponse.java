package com.packandgo.tripdiary.payload.response.trip;

import com.packandgo.tripdiary.model.Trip;

import java.util.List;

public class TripListResponse {
    
    public int currentPage;
    public int size;
    public List<Trip> trips;

    public TripListResponse() {
    }

    public TripListResponse(int currentPage, int size, List<Trip> trips) {
        this.currentPage = currentPage;
        this.size = size;
        this.trips = trips;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public List<Trip> getTrips() {
        return trips;
    }

    public void setTrips(List<Trip> trips) {
        this.trips = trips;
    }
}
