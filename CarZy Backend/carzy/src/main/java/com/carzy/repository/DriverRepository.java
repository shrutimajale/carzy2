package com.carzy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.carzy.model.Driver;
import java.util.*;


public interface DriverRepository extends JpaRepository<Driver, String> {
    List<Driver> findByCity(String city);
    Optional<Driver> findByEmail(String email);
}
