package com.packandgo.tripdiary.model;

import javax.persistence.*;
import javax.persistence.criteria.Fetch;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "destination")
public class Destination {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double longitude;
    private double latitude;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "visitday_id", referencedColumnName = "id")
    private VisitDay visitDay;

    @OneToMany(
            mappedBy = "destination",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private List<Image> images = new ArrayList<>();


    public Destination() {
    }

    ;

    public Destination(float longitude, float latitude) {
        this.longitude = longitude;
        this.latitude = latitude;
    }

    public void addImage(Image image) {
        this.images.add(image);
        image.setDestination(this);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public VisitDay getVisitDay() {
        return visitDay;
    }

    public void setVisitDay(VisitDay visitDay) {
        this.visitDay = visitDay;
    }

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }
}
