package com.packandgo.tripdiary.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "visitday")
public class VisitDay {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "day_number")
    private int dayNumber;
    @Column(name = "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "trip_id", nullable = false)
    private Trip trip;

    @OneToMany(mappedBy = "visitDay",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private List<Destination> destinations = new ArrayList<>();

    public VisitDay() {
    }

    public VisitDay(int dayNumber, String description) {
        this.dayNumber = dayNumber;
        this.description = description;
    }

    public void addDestination(Destination destination) {
        this.destinations.add(destination);
        destination.setVisitDay(this);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long ID) {
        this.id = id;
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

    public Trip getTrip() {
        return trip;
    }

    public void setTrip(Trip trip) {
        this.trip = trip;
    }

    public List<Destination> getDestinations() {
        return destinations;
    }

    public void setDestinations(List<Destination> destinations) {
        this.destinations = destinations;
    }



}
