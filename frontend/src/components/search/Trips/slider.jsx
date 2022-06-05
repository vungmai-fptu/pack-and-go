import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TripItem from "./TripItem";


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
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
    ]
}

const TripCardSlider = () => {
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <TripItem flag="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png"
                        tripName="Viet Nam with my favorites"
                        profilePhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/26b82d3a4f4fca22b1ef4a3e1aaac37a/profile/56284ea742762a1.77627864.jpg?width=640&amp;height=640"
                        place="Ha Noi, Viet Nam"
                        numOfDates="8"
                        numOfPlaces="16"
                        numOfPhotos="83"
                    />
                </div>
                <div>
                    <TripItem flag="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png"
                        tripName="Viet Nam with my favorites"
                        profilePhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/26b82d3a4f4fca22b1ef4a3e1aaac37a/profile/56284ea742762a1.77627864.jpg?width=640&amp;height=640"
                        place="Ha Noi, Viet Nam"
                        numOfDates="8"
                        numOfPlaces="16"
                        numOfPhotos="83"
                    />
                </div>
                <div>
                    <TripItem flag="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png"
                        tripName="Viet Nam with my favorites"
                        profilePhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/26b82d3a4f4fca22b1ef4a3e1aaac37a/profile/56284ea742762a1.77627864.jpg?width=640&amp;height=640"
                        place="Ha Noi, Viet Nam"
                        numOfDates="8"
                        numOfPlaces="16"
                        numOfPhotos="83"
                    />
                </div>
                <div>
                    <TripItem flag="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png"
                        tripName="Viet Nam with my favorites"
                        profilePhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/26b82d3a4f4fca22b1ef4a3e1aaac37a/profile/56284ea742762a1.77627864.jpg?width=640&amp;height=640"
                        place="Ha Noi, Viet Nam"
                        numOfDates="8"
                        numOfPlaces="16"
                        numOfPhotos="83"
                    />
                </div>
                <div>
                    <TripItem flag="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png"
                        tripName="Viet Nam with my favorites"
                        profilePhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/26b82d3a4f4fca22b1ef4a3e1aaac37a/profile/56284ea742762a1.77627864.jpg?width=640&amp;height=640"
                        place="Ha Noi, Viet Nam"
                        numOfDates="8"
                        numOfPlaces="16"
                        numOfPhotos="83"
                    />
                </div>
                <div>
                    <TripItem flag="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png"
                        tripName="Viet Nam with my favorites"
                        profilePhoto="https://wrld-wa-ec1-prod.b-cdn.net/accounts/26b82d3a4f4fca22b1ef4a3e1aaac37a/profile/56284ea742762a1.77627864.jpg?width=640&amp;height=640"
                        place="Ha Noi, Viet Nam"
                        numOfDates="8"
                        numOfPlaces="16"
                        numOfPhotos="83"
                    />
                </div>
            </Slider>
        </div >
    )
}

export default TripCardSlider



