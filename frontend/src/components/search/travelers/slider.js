import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Traveler from "./traveler";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
}

const ProfileCardSlider = () => {
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <Traveler coverPhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/b3ddf1b8e4375675283ffa7170dbdc2b/profile/262862abc6edfb6.00558336.jpg"
                        profilePhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/b3ddf1b8e4375675283ffa7170dbdc2b/profile/562862a7ad5f452.50968303.jpg?width=640&height=640"
                        username="Sara Bech Mai Walther"
                        country="Denmark"
                        numOfCountries="4"
                        numOfTrips="0"
                        numOfPhotos="0" />
                </div>
                <div>
                    <Traveler coverPhoto="https://wrld-se-prod.b-cdn.net/images/bezfotky.png"
                        profilePhoto="https://wrld-se-prod.b-cdn.net/images/user-empty.svg?width=640&height=640"
                        username="Anna Sirmaiova"
                        country="Czech Republic"
                        numOfCountries="0"
                        numOfTrips="0"
                        numOfPhotos="0" />
                </div>
                <div>
                    <Traveler coverPhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/3de242fcdea5585aacf6012ee94a5cad/profile/15e4fa11f2542b6.82328837.jpg"
                        profilePhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/3de242fcdea5585aacf6012ee94a5cad/profile/25e4f9917c8cd38.25472232.png?width=640&height=640"
                        username="Šárka Egermaierová"
                        country="Czech Republic"
                        numOfCountries="5"
                        numOfTrips="6"
                        numOfPhotos="23" />
                </div>
                <div>
                    <Traveler coverPhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/b3ddf1b8e4375675283ffa7170dbdc2b/profile/262862abc6edfb6.00558336.jpg"
                        profilePhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/b3ddf1b8e4375675283ffa7170dbdc2b/profile/562862a7ad5f452.50968303.jpg?width=640&height=640"
                        username="Sara Bech Mai Walther"
                        country="Denmark"
                        numOfCountries="4"
                        numOfTrips="0"
                        numOfPhotos="0" />
                </div>
                <div>
                    <Traveler coverPhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/b3ddf1b8e4375675283ffa7170dbdc2b/profile/262862abc6edfb6.00558336.jpg"
                        profilePhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/b3ddf1b8e4375675283ffa7170dbdc2b/profile/562862a7ad5f452.50968303.jpg?width=640&height=640"
                        username="Sara Bech Mai Walther"
                        country="Denmark"
                        numOfCountries="4"
                        numOfTrips="0"
                        numOfPhotos="0" />
                </div>
                <div>
                    <Traveler coverPhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/b3ddf1b8e4375675283ffa7170dbdc2b/profile/262862abc6edfb6.00558336.jpg"
                        profilePhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/b3ddf1b8e4375675283ffa7170dbdc2b/profile/562862a7ad5f452.50968303.jpg?width=640&height=640"
                        username="Sara Bech Mai Walther"
                        country="Denmark"
                        numOfCountries="4"
                        numOfTrips="0"
                        numOfPhotos="0" />
                </div>
            </Slider>
        </div >
    )
}

export default ProfileCardSlider



