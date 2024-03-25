package com.carzy.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carzy.model.Car;

public interface CarRepository extends JpaRepository<Car, String>{
    Optional<List<Car>> findByCoId(String coId);
    Optional<List<Car>> findByState(String state);
    Optional<List<Car>> findByCity(String city);
}
