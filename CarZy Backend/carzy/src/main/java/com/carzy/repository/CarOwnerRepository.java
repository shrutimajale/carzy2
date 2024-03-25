package com.carzy.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.carzy.model.CarOwner;

public interface CarOwnerRepository extends JpaRepository<CarOwner, String>{
    Optional<CarOwner> findByEmail(String email);
}
