package com.packandgo.tripdiary.repository;

import com.packandgo.tripdiary.model.Trip;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TripRepository extends PagingAndSortingRepository<Trip, Long> {
    Page<Trip> findAll(Pageable pageable);

    @Query("SELECT t FROM Trip t WHERE t.user.id = ?1")
    List<Trip> findByUserId(Long id);
}
