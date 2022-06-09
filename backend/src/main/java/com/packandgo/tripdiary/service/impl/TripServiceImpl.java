package com.packandgo.tripdiary.service.impl;

import com.packandgo.tripdiary.enums.Transportation;
import com.packandgo.tripdiary.enums.TripStatus;
import com.packandgo.tripdiary.model.Like;
import com.packandgo.tripdiary.model.Trip;
import com.packandgo.tripdiary.model.User;
import com.packandgo.tripdiary.payload.request.trip.LikeRequest;
import com.packandgo.tripdiary.payload.request.trip.TripRequest;
import com.packandgo.tripdiary.repository.DestinationRepository;
import com.packandgo.tripdiary.repository.LikeRepository;
import com.packandgo.tripdiary.repository.TripRepository;
import com.packandgo.tripdiary.repository.UserRepository;
import com.packandgo.tripdiary.service.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@Service
public class TripServiceImpl implements TripService {
    private final TripRepository tripRepository;
    private final UserRepository userRepository;
    private final DestinationRepository destinationRepository;
    private final LikeRepository likeRepository;

    @Autowired
    public TripServiceImpl(TripRepository tripRepository, UserRepository userRepository, DestinationRepository destinationRepository, LikeRepository likeRepository) {
        this.tripRepository = tripRepository;
        this.userRepository = userRepository;
        this.destinationRepository = destinationRepository;
        this.likeRepository = likeRepository;
    }

    @Override
    @Transactional
    public void insertTrip(TripRequest request) {
        if (request == null) {
            throw new IllegalArgumentException("Trip information is required");
        }

        //get current user
        UserDetails userDetails = (UserDetails) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        User user = userRepository.findByUsername(userDetails.getUsername()).orElseThrow(
                () -> new UsernameNotFoundException("Unauthorized user")
        );

        if (request.getNotifyBefore() < 1) {
            throw new IllegalArgumentException("Trip should be announced at least 1 day earlier than its starting");
        }
        if (request.getDestination() == null) {
            throw new IllegalArgumentException("Trip's destination is required");
        }

        Trip newTrip = new Trip();
        newTrip.setThumbnailUrl(request.getThumbnailUrl());

        newTrip.setDestination(request.getDestination());
        newTrip.setBeginDate(request.getBeginDate());
        newTrip.setEndDate(request.getEndDate());
        newTrip.setUser(user);

        //set transportation
        if (request.getTransportation() == null) {
            newTrip.setTransportation(Transportation.UNDEFINED);
        } else {
            switch (request.getTransportation()) {
                case "car": {
                    newTrip.setTransportation(Transportation.CAR);
                    break;
                }
                case "bus": {
                    newTrip.setTransportation(Transportation.BUS);
                    break;
                }
                case "train": {
                    newTrip.setTransportation(Transportation.TRAIN);
                    break;
                }
                case "plane": {
                    newTrip.setTransportation(Transportation.PLANE);
                    break;
                }
                case "motorbike": {
                    newTrip.setTransportation(Transportation.MOTORBIKE);
                    break;
                }
                case "bike": {
                    newTrip.setTransportation(Transportation.BIKE);
                    break;
                }
                case "ship": {
                    newTrip.setTransportation(Transportation.SHIP);
                    break;
                }
                case "on_walk": {
                    newTrip.setTransportation(Transportation.ON_WALK);
                    break;
                }
                default:
                    newTrip.setTransportation(Transportation.UNDEFINED);
                    break;
            }
        }

        TripStatus status = request.getStatus().toLowerCase().equals("private") ?
                TripStatus.PRIVATE : TripStatus.PUBLIC;

        newTrip.setStatus(status);
        newTrip.setNotifyBefore(request.getNotifyBefore());

        newTrip.setVisitDays(request.getVisitDays());
        newTrip.setPriceList(request.getPriceList());
        newTrip.setPreparedList(request.getPreparedList());
        newTrip.setNote(request.getNote());

        if (request.getConcurrencyUnit() == null ||
                request.getConcurrencyUnit().trim().length() == 0) {
            newTrip.setConcurrencyUnit("$");
        }

        tripRepository.save(newTrip);
    }

    @Override
    public List<Trip> getTrips(int page, int size) {
        if (page == 0) {
            List<Trip> trips = new ArrayList<>();
            tripRepository.findAll().forEach(trips::add);
            return trips;
        }
        Pageable paging = PageRequest.of(page - 1, size);
        Page<Trip> trips = tripRepository.findAll(paging);
        return trips.getContent();
    }

    @Override
    @Transactional
    public void removeTrip(Long id) {
        if (id == null) {
            throw new IllegalArgumentException("Removed trip's ID is required");
        }

        Trip existedTrip = tripRepository.findById(id).orElseThrow(
                () ->  new IllegalArgumentException("Trip with ID \"" + id + "\" doesn't exist")
        );

        tripRepository.delete(existedTrip);

    }

    @Override
    @Transactional
    public void updateTrip(Long tripId, TripRequest request) {

        if (request.getNotifyBefore() < 1) {
            throw new IllegalArgumentException("Trip should be announced at least 1 day earlier than its starting");
        }
        if (request.getDestination() == null) {
            throw new IllegalArgumentException("Trip's destination is required");
        }

        Trip trip = tripRepository.findById(tripId).orElseThrow(
                () ->  new IllegalArgumentException("Trip with ID \"" + id + "\" doesn't exist")
        );

        trip.setThumbnailUrl(request.getThumbnailUrl());

        //remove the old destination in database
        if (trip.getDestination() != null) {
            destinationRepository.delete(trip.getDestination());
        }

        trip.setDestination(request.getDestination());
        trip.setBeginDate(request.getBeginDate());
        trip.setEndDate(request.getEndDate());

        //set transportation
        if (request.getTransportation() == null) {
            trip.setTransportation(Transportation.UNDEFINED);
        } else {
            switch (request.getTransportation()) {
                case "car": {
                    trip.setTransportation(Transportation.CAR);
                    break;
                }
                case "bus": {
                    trip.setTransportation(Transportation.BUS);
                    break;
                }
                case "train": {
                    trip.setTransportation(Transportation.TRAIN);
                    break;
                }
                case "plane": {
                    trip.setTransportation(Transportation.PLANE);
                    break;
                }
                case "motorbike": {
                    trip.setTransportation(Transportation.MOTORBIKE);
                    break;
                }
                case "bike": {
                    trip.setTransportation(Transportation.BIKE);
                    break;
                }
                case "ship": {
                    trip.setTransportation(Transportation.SHIP);
                    break;
                }
                case "on_walk": {
                    trip.setTransportation(Transportation.ON_WALK);
                    break;
                }
                default:
                    trip.setTransportation(Transportation.UNDEFINED);
                    break;
            }
        }

        TripStatus status = request.getStatus().toLowerCase().equals("private") ?
                TripStatus.PRIVATE : TripStatus.PUBLIC;

        trip.setStatus(status);
        trip.setNotifyBefore(request.getNotifyBefore());
        if (request.getNotifyBefore() < 1) {
            throw new IllegalArgumentException("Trip should be announced at least 1 day earlier than its starting");
        }

        trip.setVisitDays(request.getVisitDays());
        trip.setPriceList(request.getPriceList());
        trip.setPreparedList(request.getPreparedList());

        trip.setNote(request.getNote());
        if (request.getConcurrencyUnit() == null ||
                request.getConcurrencyUnit().trim().length() == 0) {
            trip.setConcurrencyUnit("$");
        } else {
            trip.setConcurrencyUnit(request.getConcurrencyUnit());
        }


        tripRepository.save(trip);
    }

    @Override
    public Trip get(Long id) {
        Trip trip = tripRepository.findById(id).orElseThrow(
                () ->  new IllegalArgumentException("Trip with ID \"" + id + "\" doesn't exist")
        );
        return trip;
    }

    @Override
    public List<Trip> getTripsForUser(User user) {
        List<Trip> trips = tripRepository.findByUserId(user.getId());
        return trips;
    }
    @Override
    public boolean existedTrip(Long tripId){
        return tripRepository.existsById(tripId);
    }
    @Override
    public void likeTrip(LikeRequest request){
        UserDetails userDetails = (UserDetails) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        User user = userRepository.findByUsername(userDetails.getUsername()).orElseThrow(
                () -> new UsernameNotFoundException("Unauthorized user")
        );

        Trip trip = tripRepository.findById(request.getTrip_id()).orElseThrow(
                () ->  new IllegalArgumentException("Trip with ID \"" + id + "\" doesn't exist")
        );
        if(likeRepository.existsByTripIdAndUserId(trip.getId(), user.getId())==false) {
            Like like = new Like();
            like.setUser(user);
            like.setTrip(trip);
            likeRepository.save(like);
        }else {
            Like existedLike = likeRepository.findByTripIdAndUserId(trip.getId(), user.getId());
            likeRepository.delete(existedLike);
        }
    }
    @Override
    public boolean existedLike(LikeRequest request){
        UserDetails userDetails = (UserDetails) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        User user = userRepository.findByUsername(userDetails.getUsername()).orElseThrow(
                () -> new UsernameNotFoundException("Unauthorized user")
        );
        Trip trip = tripRepository.findById(request.getTrip_id()).orElseThrow(
                () ->  new IllegalArgumentException("Trip with ID \"" + id + "\" doesn't exist")
        );
        return likeRepository.existsByTripIdAndUserId(trip.getId(), user.getId());
    }
}
