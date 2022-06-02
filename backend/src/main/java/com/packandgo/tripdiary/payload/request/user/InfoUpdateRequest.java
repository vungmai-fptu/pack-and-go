package com.packandgo.tripdiary.payload.request.user;

import com.packandgo.tripdiary.enums.Gender;

import java.util.Date;

public class InfoUpdateRequest {

        private String firstName;
        private String lastName;

//        private String email;
        private String phoneNumber;
        private String city;
        private String country;
        private Gender gender;
        private Date dateOfBirth;
        private String aboutMe;

        public InfoUpdateRequest(String firstName, String lastName, String phoneNumber, String city, String country, Gender gender, Date dateOfBirth, String aboutMe) {
            this.firstName = firstName;
            this.lastName = lastName;
//        this.email = email;
            this.phoneNumber = phoneNumber;
            this.city = city;
            this.country = country;
            this.gender = gender;
            this.dateOfBirth = dateOfBirth;
            this.aboutMe = aboutMe;
        }

        public InfoUpdateRequest(){}

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

//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }

        public String getPhoneNumber() {
            return phoneNumber;
        }

        public void setPhoneNumber(String phoneNumber) {
            this.phoneNumber = phoneNumber;
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

        public Gender getGender() {
            return gender;
        }

        public void setGender(Gender gender) {
            this.gender = gender;
        }

        public Date getDateOfBirth() {
            return dateOfBirth;
        }

        public void setDateOfBirth(Date dateOfBirth) {
            this.dateOfBirth = dateOfBirth;
        }

        public String getAboutMe() {
            return aboutMe;
        }

        public void setAboutMe(String aboutMe) {
            this.aboutMe = aboutMe;
        }


}
