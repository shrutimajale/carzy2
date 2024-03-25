package com.carzy.controller;

import java.lang.reflect.Field;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.util.ReflectionUtils;
import org.springframework.web.bind.annotation.*;

import com.carzy.authenticator.MyToken;
import com.carzy.encrydecry.PasswordEncryDecry;
import com.carzy.model.CarOwner;
import com.carzy.repository.CarOwnerRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/carowner")
public class CarOwnerController {

    @Autowired
    CarOwnerRepository carOwnerRepository;

    @Autowired
    PasswordEncryDecry passwordEncryDecry;

    @Autowired
    MyToken auth;

    @GetMapping("")
    public ResponseEntity<List<CarOwner>> getAllCarOwners(@RequestHeader Map<String, String> headers) {
        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);

        if (isAuthorized) {
            List<CarOwner> carOwners = carOwnerRepository.findAll();

            if (carOwners.size() == 0) {
                return new ResponseEntity<List<CarOwner>>(carOwners, HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<List<CarOwner>>(carOwners, HttpStatus.OK);
            }
        } else {
            return new ResponseEntity<List<CarOwner>>(HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<CarOwner> getCarOwnerById(@PathVariable String id,
            @RequestHeader Map<String, String> headers) {
        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);
        if (isAuthorized) {
            Optional<CarOwner> result = carOwnerRepository.findById(id);

            if (result.isPresent()) {
                return new ResponseEntity<CarOwner>(result.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<CarOwner>(HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<CarOwner>(HttpStatus.UNAUTHORIZED);
        }

    }

    @PostMapping("")
    public ResponseEntity<Map<String, String>> addCarOwner(@RequestBody CarOwner carOwner) {
        Optional<CarOwner> result = carOwnerRepository.findByEmail(carOwner.getEmail());
        Map<String, String> response = new HashMap<>();

        if (result.isPresent()) {
            response.put("message", "Car Owner Already Exists");
            return new ResponseEntity<Map<String, String>>(response, HttpStatus.BAD_REQUEST);
        } else {
            carOwner.setPassword(passwordEncryDecry.encrypt(carOwner.getPassword()));
            carOwnerRepository.save(carOwner);
            response.put("message", "Car Owner Added Successfully");
            return new ResponseEntity<Map<String, String>>(response, HttpStatus.OK);
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<CarOwner> updateCarById(@PathVariable String id, @RequestBody Map<String, String> json,
            @RequestHeader Map<String, String> headers) {
        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);

        if (isAuthorized) {
            Optional<CarOwner> result = carOwnerRepository.findById(id);

            if (result.isPresent()) {

                json.forEach((key, val) -> {
                    Field field = ReflectionUtils.findField(CarOwner.class, key);
                    field.setAccessible(true);
                    if (key.equals("password")) {
                        val = passwordEncryDecry.encrypt(val);
                    }
                    ReflectionUtils.setField(field, result.get(), val);
                });

                carOwnerRepository.save(result.get());

                return new ResponseEntity<CarOwner>(result.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<CarOwner>(HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<CarOwner>(HttpStatus.UNAUTHORIZED);
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<CarOwner> deleteCarById(@PathVariable String id, @RequestHeader Map<String, String> headers) {
        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);

        if (isAuthorized) {
            Optional<CarOwner> result = carOwnerRepository.findById(id);

            if (result.isPresent()) {
                carOwnerRepository.deleteById(id);
                return new ResponseEntity<CarOwner>(result.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<CarOwner>(HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<CarOwner>(HttpStatus.UNAUTHORIZED);
        }

    }

}
