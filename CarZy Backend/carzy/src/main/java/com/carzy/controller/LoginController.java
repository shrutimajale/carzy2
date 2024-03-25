package com.carzy.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.carzy.authenticator.MyToken;
import com.carzy.encrydecry.PasswordEncryDecry;
import com.carzy.model.*;
import com.carzy.repository.*;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class LoginController {

    @Autowired
    DriverRepository driverRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    AdminRepository adminRepository;

    @Autowired
    CarOwnerRepository carOwnerRepository;

    @Autowired
    TokenRepository tokenRepository;

    @Autowired
    PasswordEncryDecry passwordEncryDecry;

    @Autowired
    MyToken myToken;

    @CrossOrigin
    @PostMapping("")
    public ResponseEntity<Map<String, String>> login(@RequestBody Map<String, String> json) {
        String role = json.get("role");
        String email = json.get("email");
        String password = json.get("password");

        switch (role) {
            case "driver":
                return validateDriver(email, password, role);

            case "admin":
                return validateAdmin(email, password, role);

            case "carowner":
                return validateCarOwner(email, password, role);

            case "customer":
                return validateCustomer(email, password, role);

        }
        Map<String, String> response = new HashMap<>();
        response.put("message", "Role Not Found");
        return new ResponseEntity<Map<String, String>>(response, HttpStatus.BAD_REQUEST);
    }

    private ResponseEntity<Map<String, String>> validateDriver(String email, String password, String role) {
        Optional<Driver> result = driverRepository.findByEmail(email);
        Map<String, String> response = new HashMap<>();

        if (result.isPresent()) {
            Driver driver = result.get();
            String encPassword = passwordEncryDecry.decrypt(driver.getPassword());
            if (encPassword.equals(password)) {
                String token = myToken.generateToken();
                tokenRepository.save(new Token(token, driver.getId()));
                response.put("token", token);
                response.put("userid", driver.getId());
                return new ResponseEntity<Map<String, String>>(response, HttpStatus.OK);
            } else {
                response.put("message", "Incorrect Password");
                return new ResponseEntity<Map<String, String>>(response, HttpStatus.UNAUTHORIZED);
            }
        } else {
            response.put("message", "Driver Not Found");
            return new ResponseEntity<Map<String, String>>(response, HttpStatus.BAD_REQUEST);
        }
    }

    private ResponseEntity<Map<String, String>> validateAdmin(String email, String password, String role) {
        Optional<Admin> result = adminRepository.findByEmail(email);
        Map<String, String> response = new HashMap<>();

        if (result.isPresent()) {
            Admin admin = result.get();
            String encPassword = passwordEncryDecry.decrypt(admin.getPassword());
            if (encPassword.equals(password)) {
                String token = myToken.generateToken();
                tokenRepository.save(new Token(token, admin.getId()));
                response.put("token", token);
                response.put("userid", admin.getId());
                return new ResponseEntity<Map<String, String>>(response, HttpStatus.OK);
            } else {
                response.put("message", "Incorrect Password");
                return new ResponseEntity<Map<String, String>>(response, HttpStatus.UNAUTHORIZED);
            }
        } else {
            response.put("message", "Admin Not Found");
            return new ResponseEntity<Map<String, String>>(response, HttpStatus.BAD_REQUEST);
        }
    }

    private ResponseEntity<Map<String, String>> validateCarOwner(String email, String password, String role) {
        Optional<CarOwner> result = carOwnerRepository.findByEmail(email);
        Map<String, String> response = new HashMap<>();
        if (result.isPresent()) {
            CarOwner carOwner = result.get();
            String encPassword = passwordEncryDecry.decrypt(carOwner.getPassword());
            if (encPassword.equals(password)) {
                String token = myToken.generateToken();
                tokenRepository.save(new Token(token, carOwner.getId()));
                response.put("token", token);
                response.put("userid", carOwner.getId());
                return new ResponseEntity<Map<String, String>>(response, HttpStatus.OK);
            } else {
                response.put("message", "Incorrect Password");
                return new ResponseEntity<Map<String, String>>(response, HttpStatus.UNAUTHORIZED);
            }
        } else {
            response.put("message", "Car Owner Not Found");
            return new ResponseEntity<Map<String, String>>(response, HttpStatus.BAD_REQUEST);
        }
    }

    private ResponseEntity<Map<String, String>> validateCustomer(String email, String password, String role) {
        Optional<Customer> result = customerRepository.findByEmail(email);
        Map<String, String> response = new HashMap<>();

        if (result.isPresent()) {
            Customer customer = result.get();
            String encPassword = passwordEncryDecry.decrypt(customer.getPassword());
            if (encPassword.equals(password)) {
                String token = myToken.generateToken();
                tokenRepository.save(new Token(token, customer.getId()));
                response.put("token", token);
                response.put("userid", customer.getId());
                return new ResponseEntity<Map<String, String>>(response, HttpStatus.OK);
            } else {
                response.put("message", "Incorrect Password");
                return new ResponseEntity<Map<String, String>>(response, HttpStatus.UNAUTHORIZED);
            }
        } else {
            response.put("message", "Customer Not Found");
            return new ResponseEntity<Map<String, String>>(response, HttpStatus.BAD_REQUEST);
        }
    }
}
