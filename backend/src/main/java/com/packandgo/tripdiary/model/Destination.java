package com.packandgo.tripdiary.model;

import javax.persistence.*;

@Entity
public class Destination {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ID;
    private float longtitude;
    private float latitude;

    @ManyToOne
    @JoinColumn(name="visitDay_id", nullable=false)
    private VisitDay visitDay ;

    public Destination(){};

    public Destination(float longtitude, float latitude) {
        this.longtitude = longtitude;
        this.latitude = latitude;
    }

    public Long getDestionationID() {
        return ID;
    }

    public void setDestionationID(Long destionationID) {
        this.ID = ID;
    }

    public float getLongtitude() {
        return longtitude;
    }

    public void setLongtitude(float longtitude) {
        this.longtitude = longtitude;
    }

    public float getLatitude() {
        return latitude;
    }

    public void setLatitude(float latitude) {
        this.latitude = latitude;
    }
}
