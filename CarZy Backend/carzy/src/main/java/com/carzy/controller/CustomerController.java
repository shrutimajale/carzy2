package com.carzy.controller;

import java.lang.reflect.Field;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.util.ReflectionUtils;
import org.springframework.web.bind.annotation.*;

import com.carzy.authenticator.MyToken;
import com.carzy.encrydecry.PasswordEncryDecry;
import com.carzy.model.Customer;
import com.carzy.repository.CustomerRepository;

@RestController

@RequestMapping("/api/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    PasswordEncryDecry passwordEncryDecry;

    @Autowired
    MyToken auth;

    @CrossOrigin
    @GetMapping("")
    public ResponseEntity<List<Customer>> getAllCustomers(@RequestHeader Map<String, String> headers) {
        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);

        if (isAuthorized) {
            List<Customer> customers = customerRepository.findAll();

            if (customers.size() == 0) {
                return new ResponseEntity<List<Customer>>(customers, HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<List<Customer>>(customers, HttpStatus.OK);
            }

        } else {
            return new ResponseEntity<List<Customer>>(HttpStatus.UNAUTHORIZED);
        }
    }

    @CrossOrigin
    @PostMapping("")
    public ResponseEntity<Map<String, String>> addCustomer(@RequestBody Customer customer) {
        Optional<Customer> result = customerRepository.findByEmail(customer.getEmail());
        Map<String, String> response = new HashMap<>();

        if (result.isPresent()) {
            response.put("message", "Customer Already Exists");
            return new ResponseEntity<Map<String, String>>(response, HttpStatus.BAD_REQUEST);
        } else {
            customer.setPassword(passwordEncryDecry.encrypt(customer.getPassword()));
            customerRepository.save(customer);
            response.put("message", "Customer Added Successfully");
            return new ResponseEntity<Map<String, String>>(response, HttpStatus.OK);
        }
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<Customer> getCustomerByID(@PathVariable String id,
            @RequestHeader Map<String, String> headers) {
        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);

        if (isAuthorized) {
            Optional<Customer> result = customerRepository.findById(id);

            if (result.isPresent()) {
                return new ResponseEntity<Customer>(result.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<Customer>(HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<Customer>(HttpStatus.UNAUTHORIZED);
        }
    }

    @CrossOrigin
    @PatchMapping("/{id}")
    public ResponseEntity<Customer> updateCarById(@PathVariable String id, @RequestBody Map<String, String> json,
            @RequestHeader Map<String, String> headers) {
        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);

        if (isAuthorized) {
            Optional<Customer> result = customerRepository.findById(id);

            if (result.isPresent()) {

                json.forEach((key, val) -> {
                    Field field = ReflectionUtils.findField(Customer.class, key);
                    field.setAccessible(true);
                    if (key.equals("password")) {
                        val = passwordEncryDecry.encrypt(val);
                    }
                    ReflectionUtils.setField(field, result.get(), val);
                });

                customerRepository.save(result.get());

                return new ResponseEntity<Customer>(result.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<Customer>(HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<Customer>(HttpStatus.UNAUTHORIZED);
        }
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<Customer> deleteCarById(@PathVariable String id, @RequestHeader Map<String, String> headers) {
        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);

        if (isAuthorized) {
            Optional<Customer> result = customerRepository.findById(id);

            if (result.isPresent()) {
                customerRepository.deleteById(id);
                return new ResponseEntity<Customer>(result.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<Customer>(HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<Customer>(HttpStatus.UNAUTHORIZED);
        }

    }

}
