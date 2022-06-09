package com.packandgo.tripdiary.payload.request.trip;

public class LikeRequest {
    private Long trip_id;

    public void LikeRequest(){}

    public Long getTrip_id() {
        return trip_id;
    }

    public void setTrip_id(Long trip_id) {
        this.trip_id = trip_id;
    }
}
