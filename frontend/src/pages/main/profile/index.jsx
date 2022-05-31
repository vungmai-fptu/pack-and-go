import React from 'react'
import CountryList from '../../../components/profile/CountryList'
import Header from '../../../components/profile/Header'
import Map from '../../../components/profile/Map'
import MapNav from '../../../components/profile/MapNav'
import Trips from '../../../components/profile/Trips'

const Profile = () => {
    return (
        <>
            <Header />
            <MapNav />
            <Map />
            <Trips/>
            <CountryList/>
        </>
    )
}

export default Profile