package com.packandgo.tripdiary.model;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@Entity
public class Trip {
    @Column(name = "beginDate")
    private Calendar beginDate;
    @Column(name = "endDate")
    private Calendar endDate;
    @Column(name = "preparedList")
    private String preparedList;
    @Column()
    private boolean status;
    @Column()
    private String note;
    @ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    private User user;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ID;

    @OneToMany(mappedBy="trip")
    private List<VisitDay> visitDay = new ArrayList<>();

    @OneToMany(mappedBy="trip")
    private List<PriceItem> priceItem = new ArrayList<>();

    public Trip(Calendar beginDate, Calendar endDate, String prepardList, boolean status, String note) {
        this.beginDate = beginDate;
        this.endDate = endDate;
        this.preparedList = prepardList;
        this.status = status;
        this.note = note;
    }

    public Trip() {}

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }



    public Calendar getBeginDate() {
        return beginDate;
    }

    public void setBeginDate(Calendar beginDate) {
        this.beginDate = beginDate;
    }

    public Calendar getEndDate() {
        return endDate;
    }

    public void setEndDate(Calendar endDate) {
        this.endDate = endDate;
    }

    public String getPrepardList() {
        return preparedList;
    }

    public void setPrepardList(String prepardList) {
        this.preparedList = prepardList;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public void setID(Long tripID) {
        this.ID = ID;
    }

    @Id
    public Long getID() {
        return ID;
    }
}