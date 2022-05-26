package com.packandgo.tripdiary.model;


import com.packandgo.tripdiary.enums.TripStatus;
import com.packandgo.tripdiary.util.ListStringConverter;

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

    private String thumbnailUrl;

    @Column(name = "beginDate")
    private Date beginDate;

    @Column(name = "endDate")
    private Date endDate;

    @Column(name = "prepared_list")
    @Convert(converter = ListStringConverter.class)
    private List<String> preparedList;

    @Enumerated(EnumType.STRING)
    private TripStatus status;

    private String note;

    @Column(name = "notify_before")
    private int notifyBefore;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "trip", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<VisitDay> visitDays = new ArrayList<>();

    @OneToMany(mappedBy = "trip", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<PriceItem> priceList = new ArrayList<>();

    public Trip(
            Date beginDate,
            Date endDate,
            List<String> preparedList,
            TripStatus status,
            String note,
            User user,
            List<VisitDay> visitDays,
            List<PriceItem> priceList,
            int notifyBefore) {
        this.beginDate = beginDate;
        this.endDate = endDate;
        this.preparedList = preparedList;
        this.status = status;
        this.note = note;
        this.user = user;
        this.visitDays = visitDays;
        this.priceList = priceList;
        this.notifyBefore = notifyBefore;
    }

    public Trip() {
    }

//    public void addVisitDay(VisitDay visitDay) {
//        this.visitDays.add(visitDay);
//        visitDay.setTrip(this);
//    }

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
}
