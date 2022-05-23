package com.packandgo.tripdiary.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;
import java.util.Calendar;
import javax.persistence.*;

@Entity
@Table(name = "UserInfo")
public class UserInfo {
    @Column(name = "firstName")
    private String firstName;
    @Column(name = "lastName")
    private String lastName;
    @Column(name = "city")
    private String city;
    @Column(name = "country")
    private String country;
    @Column(name = "profileImage")
    private String profileImage;
    @Column(name = "coverImage")
    private String coverImage;
    @Column(name = "nickName")
    private String nickName;
    @Column(name = "phoneNumber")
    private String phoneNumber;
    @Column(name = "gender")
    private String gender;
    @Column(name = "dateOfBirth")
    private Calendar dateOfBirth;
    @Column(name = "aboutMe")
    private String aboutMe;
    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;
    @Id
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getProfileImage() {
        return profileImage;
    }

    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }

    public String getCoverImage() {
        return coverImage;
    }

    public void setCoverImage(String coverImage) {
        this.coverImage = coverImage;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Calendar getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Calendar dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getAboutMe() {
        return aboutMe;
    }

    public void setAboutMe(String aboutMe) {
        this.aboutMe = aboutMe;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }



    public UserInfo(String firstName, String lastName, String city, String country, String profileImage, String coverImage, String nickName, String phoneNumber, String gender, Calendar dateOfBirth, String aboutMe) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.country = country;
        this.profileImage = profileImage;
        this.coverImage = coverImage;
        this.nickName = nickName;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.aboutMe = aboutMe;
    }
    public UserInfo(){}
}
