package com.carzy.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.carzy.authenticator.MyToken;
import com.carzy.model.CarRequest;
import com.carzy.model.DriverRequest;
import com.carzy.repository.*;
import com.carzy.util.CarRequestResponse;
import com.carzy.util.DriverRequestResponse;
import com.carzy.util.Request;

@RestController
@CrossOrigin
@RequestMapping("/api/request")
public class RequestController {

    @Autowired
    CarRequestRepository carRequestRepository;

    @Autowired
    DriverRequestRepository driverRequestRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    CarRepository carRepository;

    @Autowired
    DriverRepository driverRepository;

    @Autowired
    MyToken auth;

    @GetMapping("/driver/{id}")
    public ResponseEntity<List<DriverRequestResponse>> getRequestByDriverId(@PathVariable String id,
            @RequestHeader Map<String, String> headers) {
        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);
        if (isAuthorized) {
            Optional<List<DriverRequest>> result = driverRequestRepository.findByDriverId(id);

            if (result.isPresent()) {
                List<DriverRequestResponse> response = new ArrayList<>();
                List<DriverRequest> driverRequests = result.get();

                for (DriverRequest driverRequest : driverRequests) {
                    String customerID = driverRequest.getCustomerId();
                    String customerName = customerRepository.findById(customerID).get().getName();
                    String carName = "Car";
                    String date = driverRequest.getDate();
                    String startTime = driverRequest.getStartTime();
                    String endTime = driverRequest.getEndTime();
                    String place = driverRequest.getPlace();
                    String status = driverRequest.getRequestStatus();
                    String requestId = driverRequest.getId();

                    response.add(
                            new DriverRequestResponse(customerName, carName, place, date, startTime, endTime, requestId,
                                    status));
                }
                return new ResponseEntity<List<DriverRequestResponse>>(response, HttpStatus.OK);
            } else {
                return new ResponseEntity<List<DriverRequestResponse>>(HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<List<DriverRequestResponse>>(HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/carowner/{id}")
    public ResponseEntity<List<CarRequestResponse>> getRequestByCarOwnerId(@PathVariable String id,
            @RequestHeader Map<String, String> headers) {
        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);

        if (isAuthorized) {
            Optional<List<CarRequest>> result = carRequestRepository.findByCarownerId(id);

            if (result.isPresent()) {
                List<CarRequestResponse> response = new ArrayList<>();
                List<CarRequest> carRequests = result.get();

                for (CarRequest carRequest : carRequests) {
                    String carname = carRepository.findById(carRequest.getCarId()).get().getName();
                    String customername = customerRepository.findById(carRequest.getCustomerId()).get().getName();
                    String date = carRequest.getDate();
                    String status = carRequest.getRequestStatus();
                    String starttime = carRequest.getStartTime();
                    String endtime = carRequest.getEndTime();
                    String req_id = carRequest.getId();

                    response.add(
                            new CarRequestResponse(req_id, carname, customername, date, status, starttime, endtime));
                }

                return new ResponseEntity<List<CarRequestResponse>>(response, HttpStatus.OK);
            } else {
                return new ResponseEntity<List<CarRequestResponse>>(HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<List<CarRequestResponse>>(HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/customer/{id}")
    public ResponseEntity<List<Request>> getRequestByCustomerId(@PathVariable String id,
            @RequestHeader Map<String, String> headers) {
        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);
        if (isAuthorized) {
            Optional<List<DriverRequest>> driverRequestsOptional = driverRequestRepository.findByCustomerId(id);
            Optional<List<CarRequest>> carRequestsOptional = carRequestRepository.findByCustomerId(id);

            if (driverRequestsOptional.isPresent() || carRequestsOptional.isPresent()) {
                List<Request> requests = new ArrayList<>();
                List<DriverRequest> driverRequests = driverRequestsOptional.get();
                List<CarRequest> carRequests = carRequestsOptional.get();

                for (DriverRequest driverRequest : driverRequests) {
                    String drivername = driverRepository.findById(driverRequest.getDriverId()).get().getName();
                    requests.add(new Request(driverRequest.getId(), driverRequest.getRequestStatus(), "Driver",
                            drivername, driverRequest.getDate()));
                }

                for (CarRequest carRequest : carRequests) {
                    String carname = carRepository.findById(carRequest.getCarId()).get().getName();
                    requests.add(new Request(carRequest.getId(), carRequest.getRequestStatus(), "Car", carname,
                            carRequest.getDate()));
                }

                return new ResponseEntity<List<Request>>(requests, HttpStatus.OK);
            } else {
                return new ResponseEntity<List<Request>>(HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<List<Request>>(HttpStatus.UNAUTHORIZED);
        }
    }
}
