package com.carzy.controller;

import java.lang.reflect.Field;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.util.ReflectionUtils;
import org.springframework.web.bind.annotation.*;

import com.carzy.authenticator.MyToken;
import com.carzy.encrydecry.PasswordEncryDecry;
import com.carzy.model.*;
import com.carzy.repository.*;

@RestController
@CrossOrigin
@RequestMapping("api/driver")
public class DriverController {

    @Autowired
    DriverRepository driverRepository;

    @Autowired
    DriverRequestRepository driverRequestRepository;

    @Autowired
    PasswordEncryDecry passwordEncryDecry;

    @Autowired
    MyToken auth;

    @GetMapping("")
    public ResponseEntity<List<Driver>> getAllDrivers(@RequestHeader Map<String, String> headers) {
        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);

        if (isAuthorized) {
            return new ResponseEntity<List<Driver>>(driverRepository.findAll(), HttpStatus.OK);

        } else {
            return new ResponseEntity<List<Driver>>(HttpStatus.UNAUTHORIZED);

        }

    }

    // @PostMapping("")
    // public ResponseEntity<Map<String, String>> addDriver(@RequestBody Driver
    // driver) {
    // Optional<Driver> result = driverRepository.findByEmail(driver.getEmail());
    // Map<String, String> response = new HashMap<>();

    // if (result.isPresent()) {
    // response.put("message", "Driver Already Exists");
    // return new ResponseEntity<Map<String, String>>(response,
    // HttpStatus.BAD_REQUEST);
    // } else {
    // driver.setPassword(passwordEncryDecry.encrypt(driver.getPassword()));
    // driverRepository.save(driver);
    // response.put("message", "Driver Added Successfully");
    // return new ResponseEntity<Map<String, String>>(response, HttpStatus.OK);
    // }
    // }

    @PostMapping("")
    public ResponseEntity<Driver> addDriver(@RequestBody Driver driver) {
        Optional<Driver> result = driverRepository.findByEmail(driver.getEmail());
        Map<String, String> response = new HashMap<>();

        if (result.isPresent()) {
            response.put("message", "Driver Already Exists");
            return new ResponseEntity<Driver>(HttpStatus.BAD_REQUEST);
        } else {
            driver.setPassword(passwordEncryDecry.encrypt(driver.getPassword()));
            driver.setStatus("Available");
            driverRepository.save(driver);
            response.put("message", "Driver Added Successfully");
            return new ResponseEntity<Driver>(driver, HttpStatus.OK);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Driver> getDriverById(@PathVariable String id, @RequestHeader Map<String, String> headers) {

        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);

        if (isAuthorized) {
            Optional<Driver> result = driverRepository.findById(id);

            if (result.isPresent()) {
                return new ResponseEntity<Driver>(result.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<Driver>(HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<Driver>(HttpStatus.UNAUTHORIZED);

        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Driver> updateDriverById(@PathVariable String id, @RequestBody Map<String, String> json,
            @RequestHeader Map<String, String> headers) {
        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);

        if (!isAuthorized) {
            return new ResponseEntity<Driver>(HttpStatus.UNAUTHORIZED);

        } else {
            Optional<Driver> result = driverRepository.findById(id);
            if (result.isPresent()) {
                json.forEach((key, val) -> {
                    Field field = ReflectionUtils.findField(Driver.class, key);
                    if (field != null)
                        field.setAccessible(true);
                    if (key.equals("password")) {
                        val = passwordEncryDecry.encrypt(val);
                    }
                    if (field != null)
                        ReflectionUtils.setField(field, result.get(), val);
                });

                driverRepository.save(result.get());

                return new ResponseEntity<Driver>(result.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<Driver>(HttpStatus.NOT_FOUND);
            }
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Driver> deleteDriverById(@PathVariable String id,
            @RequestHeader Map<String, String> headers) {

        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);

        if (isAuthorized) {

            Optional<Driver> result = driverRepository.findById(id);

            if (result.isPresent()) {
                driverRepository.deleteById(id);
                return new ResponseEntity<Driver>(result.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<Driver>(HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<Driver>(HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/city/{city}")
    public ResponseEntity<List<Driver>> getDriverByCity(@PathVariable String city,
            @RequestHeader Map<String, String> headers) {

        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);

        if (isAuthorized) {

            List<Driver> drivers = driverRepository.findByCity(city);
            if (drivers.size() == 0) {
                return new ResponseEntity<List<Driver>>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<List<Driver>>(drivers, HttpStatus.OK);
        } else {
            return new ResponseEntity<List<Driver>>(HttpStatus.UNAUTHORIZED);

        }
    }

    @PostMapping("/requestdriver")
    public ResponseEntity<String> requestDriver(@RequestBody Map<String, String> json,
            @RequestHeader Map<String, String> headers) {

        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);

        if (isAuthorized) {
            Optional<Driver> result = driverRepository.findById(json.get("driverId"));

            if (result.isPresent()) {
                Driver driver = result.get();

                if (driver.getStatus().equals("Available")) {
                    DriverRequest req = new DriverRequest();
                    String startTimeDate = json.get("starttime");
                    String endTimeDate = json.get("endtime");

                    String date = startTimeDate.split("T")[0];
                    String startTime = startTimeDate;
                    String endTime = endTimeDate;
                    req.setDriverId(json.get("driverId"));
                    req.setCustomerId(json.get("custId"));
                    req.setCarId(json.get("carId"));
                    req.setDate(date);
                    req.setStartTime(startTime);
                    req.setEndTime(endTime);

                    req.setRequestStatus("Pending");

                    driverRequestRepository.save(req);
                    return new ResponseEntity<String>("Request Sent!", HttpStatus.OK);
                } else {
                    return new ResponseEntity<String>("Driver is already booked", HttpStatus.BAD_REQUEST);

                }
            } else {
                return new ResponseEntity<String>("Driver not found!", HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<String>(HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping("/acceptdriver")
    public ResponseEntity<String> acceptDriver(@RequestBody Map<String, String> json,
            @RequestHeader Map<String, String> headers) {

        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);

        if (isAuthorized) {

            Optional<DriverRequest> result = driverRequestRepository.findById(json.get("req_id"));

            if (result.isPresent()) {
                DriverRequest req = result.get();

                Optional<Driver> driverExists = driverRepository.findById(req.getDriverId());
                if (driverExists.isPresent()) {
                    Driver driver = driverExists.get();
                    if (driver.getStatus().equals("Available")) {
                        driver.setStatus("Not Available");
                        req.setRequestStatus("Booked");

                        driverRepository.save(driver);
                        driverRequestRepository.save(req);

                        return new ResponseEntity<String>("Driver booked!", HttpStatus.OK);

                    } else {
                        return new ResponseEntity<String>("Driver is already booked!", HttpStatus.BAD_REQUEST);
                    }
                } else {
                    return new ResponseEntity<String>("Driver not found!", HttpStatus.NOT_FOUND);
                }
            } else {
                return new ResponseEntity<String>("Request not found!", HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<String>(HttpStatus.UNAUTHORIZED);

        }
    }

}
