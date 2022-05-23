package com.packandgo.tripdiary.model;

import javax.persistence.*;

@Entity
public class PriceItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long ID;
    @Column()
    private float price;
    @Column()
    private String name;

    @ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    private Trip trip;

    public  PriceItem(){};

    public PriceItem(float price, String name) {
        this.price = price;
        this.name = name;
    }

    public Long getItemID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
