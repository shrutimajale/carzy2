package com.carzy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carzy.model.DriverRequest;
import java.util.*;


public interface DriverRequestRepository extends JpaRepository<DriverRequest, String>{
    Optional<List<DriverRequest>> findByDriverId(String driverId);
    Optional<List<DriverRequest>> findByCarId(String carId);
    Optional<List<DriverRequest>> findByCustomerId(String customerId);
}
