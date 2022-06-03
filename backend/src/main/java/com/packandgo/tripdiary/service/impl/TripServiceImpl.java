package com.packandgo.tripdiary.service.impl;

import com.packandgo.tripdiary.model.Trip;
import com.packandgo.tripdiary.model.User;
import com.packandgo.tripdiary.payload.request.trip.TripRequest;
import com.packandgo.tripdiary.repository.TripRepository;
import com.packandgo.tripdiary.repository.UserRepository;
import com.packandgo.tripdiary.service.TripService;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class TripServiceImpl implements TripService {
    private final TripRepository tripRepository;
    private final UserRepository userRepository;

    @Autowired
    public TripServiceImpl(TripRepository tripRepository, UserRepository userRepository) {
        this.tripRepository = tripRepository;
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public void insertTrip(TripRequest request) {
        if(request == null) {
            throw new IllegalArgumentException("Trip information is required");
        }

        //get current user
        UserDetails userDetails = (UserDetails) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        User user = userRepository.findByUsername(userDetails.getUsername()).orElseThrow(
                () ->  new UsernameNotFoundException("Unauthorized user")
        );


        Trip newTrip = new Trip();
        newTrip.setThumbnailUrl(request.getThumbnailUrl());
        newTrip.setDestination(request.getDestination());
        newTrip.setBeginDate(request.getBeginDate());
        newTrip.setEndDate(request.getEndDate());
        newTrip.setUser(user);
//        newTrip.set


    }
}
