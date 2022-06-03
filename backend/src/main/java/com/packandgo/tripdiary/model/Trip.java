package com.packandgo.tripdiary.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.packandgo.tripdiary.enums.TripStatus;
import com.packandgo.tripdiary.util.ListStringConverter;
import org.hibernate.annotations.OnDelete;

import javax.persistence.*;
import java.util.Date;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "trip")
public class Trip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "thumbnail_url")
    private String thumbnailUrl;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(
            name = "destination_id",
            referencedColumnName = "id"
    )
    private Destination destination;

    @Column(name = "begin_date")
    @JsonFormat(pattern = "yyyy/MM/dd")
    private Date beginDate;

    @Column(name = "end_date")
    @JsonFormat(pattern = "yyyy/MM/dd")
    private Date endDate;

    @Column(name = "prepared_list")
    @Convert(converter = ListStringConverter.class)
    private List<String> preparedList;

    @Enumerated(EnumType.STRING)
    private TripStatus status;

    private String note;

    @Column(name = "notify_before")
    private int notifyBefore;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "trip", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<VisitDay> visitDays = new ArrayList<>();

    @OneToMany(mappedBy = "trip", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<PriceItem> priceList = new ArrayList<>();

    public  Trip() {}

    public void addVisitDay(VisitDay visitDay) {
        this.visitDays.add(visitDay);
        visitDay.setTrip(this);
    }

    public void addPriceItem(PriceItem item) {
        this.priceList.add(item);
        item.setTrip(this);
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getNotifyBefore() {
        return notifyBefore;
    }

    public void setNotifyBefore(int notifyBefore) {
        this.notifyBefore = notifyBefore;
    }

    public Date getBeginDate() {
        return beginDate;
    }

    public void setBeginDate(Date beginDate) {
        this.beginDate = beginDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public List<String> getPreparedList() {
        return preparedList;
    }

    public void setPreparedList(List<String> preparedList) {
        this.preparedList = preparedList;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public void setID(Long id) {
        this.id = id;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TripStatus getStatus() {
        return status;
    }

    public void setStatus(TripStatus status) {
        this.status = status;
    }

    public List<VisitDay> getVisitDays() {
        return visitDays;
    }

    public void setVisitDays(List<VisitDay> visitDays) {
        this.visitDays = visitDays;
    }

    public List<PriceItem> getPriceList() {
        return priceList;
    }

    public void setPriceList(List<PriceItem> priceList) {
        this.priceList = priceList;
    }

    public String getThumbnailUrl() {
        return thumbnailUrl;
    }

    public void setThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
    }

    public Destination getDestination() {
        return destination;
    }

    public void setDestination(Destination destination) {
        this.destination = destination;
    }
}
