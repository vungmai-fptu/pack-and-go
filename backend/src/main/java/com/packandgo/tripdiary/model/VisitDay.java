package com.packandgo.tripdiary.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class VisitDay {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ID;
    private int dayNumber;
    private String description;

    @ManyToOne
    @JoinColumn(name="trip_id", nullable=false)
    private Trip trip;

    @OneToMany(mappedBy="visitDay")
    private List<Images> images = new ArrayList<>();

    @OneToMany(mappedBy="visitDay")
    private List<Destination> destination = new ArrayList<>();

    public VisitDay( int dayNumber, String description) {
        this.dayNumber = dayNumber;
        this.description = description;
    }

    public VisitDay() {

    }

    public Long getID() {
        return ID;
    }

    public void setVisitID(Long visitID) {
        this.ID = ID;
    }

    public int getDayNumber() {
        return dayNumber;
    }

    public void setDayNumber(int dayNumber) {
        this.dayNumber = dayNumber;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
