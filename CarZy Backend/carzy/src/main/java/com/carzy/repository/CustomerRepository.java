package com.carzy.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carzy.model.Customer;

public interface CustomerRepository extends  JpaRepository<Customer, String>{
    Optional<Customer> findByEmail(String email);
}
