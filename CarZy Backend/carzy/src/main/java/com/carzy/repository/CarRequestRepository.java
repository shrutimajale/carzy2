package com.carzy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carzy.model.CarRequest;
import java.util.*;
import java.util.List;

public interface CarRequestRepository extends JpaRepository<CarRequest, String> {
    Optional<List<CarRequest>> findByCustomerId(String customerId);

    Optional<List<CarRequest>> findByCarId(String carId);

    Optional<List<CarRequest>> findByCarownerId(String carownerId);
}
