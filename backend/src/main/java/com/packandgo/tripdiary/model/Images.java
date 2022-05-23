package com.packandgo.tripdiary.model;

import javax.persistence.*;

@Entity
public class Images {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ID;
    private String Url;
    private String description;

    @ManyToOne
    @JoinColumn(name="visitDay_id", nullable=false)
    private VisitDay visitDay ;

    public Images(String url, String description) {
        Url = url;
        this.description = description;
    }

    public Images(){};

    public Long getID() {
        return ID;
    }

    public void setVisitID(Long visitID) {
        this.ID = ID;
    }

    public String getUrl() {
        return Url;
    }

    public void setUrl(String url) {
        Url = url;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
