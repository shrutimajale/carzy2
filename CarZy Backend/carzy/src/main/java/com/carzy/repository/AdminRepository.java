package com.carzy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carzy.model.Admin;
import java.util.Optional;


public interface AdminRepository extends JpaRepository<Admin, String>{
    Optional<Admin> findByEmail(String email);
}
