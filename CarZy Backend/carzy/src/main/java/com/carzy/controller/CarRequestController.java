package com.carzy.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.carzy.authenticator.MyToken;
import com.carzy.model.*;
import com.carzy.repository.*;

@RestController
@RequestMapping("/api/request/car")
@CrossOrigin
public class CarRequestController {

    @Autowired
    CarRequestRepository carRequestRepository;

    @Autowired
    CarRepository carRepository;

    @Autowired
    MyToken auth;

    @CrossOrigin
    @GetMapping("")
    public ResponseEntity<List<CarRequest>> getAllCarRequest(@RequestHeader Map<String, String> headers) {
        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);

        if (isAuthorized) {
            List<CarRequest> requests = carRequestRepository.findAll();
            if (requests.size() == 0) {
                return new ResponseEntity<List<CarRequest>>(requests, HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<List<CarRequest>>(requests, HttpStatus.OK);
            }
        } else {
            return new ResponseEntity<List<CarRequest>>(HttpStatus.UNAUTHORIZED);
        }
    }

    @CrossOrigin
    @GetMapping("/customer/{id}")
    public ResponseEntity<List<CarRequest>> getCarRequestsByCustomerId(@PathVariable String id,
            @RequestHeader Map<String, String> headers) {
        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);

        if (isAuthorized) {
            Optional<List<CarRequest>> requests = carRequestRepository.findByCustomerId(id);
            if (requests.isPresent()) {
                return new ResponseEntity<List<CarRequest>>(requests.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<List<CarRequest>>(HttpStatus.NO_CONTENT);

            }
        } else {
            return new ResponseEntity<List<CarRequest>>(HttpStatus.UNAUTHORIZED);
        }
    }
}
