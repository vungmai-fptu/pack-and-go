package com.packandgo.tripdiary.payload.request.trip;

import com.packandgo.tripdiary.enums.TripStatus;
import com.packandgo.tripdiary.model.Destination;
import com.packandgo.tripdiary.model.PriceItem;
import com.packandgo.tripdiary.model.VisitDay;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class TripRequest {
    private String thumbnailUrl;
    private Destination destination;
    private Date beginDate;
    private Date endDate;
    private List<String> preparedList;
    private String status;
    private String note;
    private int notifyBefore;
    private List<VisitDay> visitDays = new ArrayList<>();
    private List<PriceItem> priceList = new ArrayList<>();

    public TripRequest() {}

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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public int getNotifyBefore() {
        return notifyBefore;
    }

    public void setNotifyBefore(int notifyBefore) {
        this.notifyBefore = notifyBefore;
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
