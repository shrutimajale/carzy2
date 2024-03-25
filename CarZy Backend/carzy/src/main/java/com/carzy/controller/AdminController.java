package com.carzy.controller;

import java.lang.reflect.Field;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.util.ReflectionUtils;
import org.springframework.web.bind.annotation.*;

import com.carzy.authenticator.MyToken;
import com.carzy.encrydecry.PasswordEncryDecry;
import com.carzy.model.Admin;
import com.carzy.repository.AdminRepository;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin
public class AdminController {

    @Autowired
    AdminRepository adminRepository;

    @Autowired
    PasswordEncryDecry passwordEncryDecry;

    @Autowired
    MyToken auth;

    @CrossOrigin
    @GetMapping("")
    public ResponseEntity<List<Admin>> getAllAdmin(@RequestHeader Map<String, String> headers) {
        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);

        if (isAuthorized) {
            List<Admin> admins = adminRepository.findAll();
            if (admins.size() == 0) {
                return new ResponseEntity<List<Admin>>(admins, HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<List<Admin>>(admins, HttpStatus.OK);
            }
        } else {
            return new ResponseEntity<List<Admin>>(HttpStatus.UNAUTHORIZED);
        }
    }

    @CrossOrigin
    @PostMapping("")
    public ResponseEntity<String> createNewAdmin(@RequestBody Admin admin) {
        Optional<Admin> response = adminRepository.findByEmail(admin.getEmail());

        if (response.isPresent()) {
            return new ResponseEntity<String>("Admin already exist!", HttpStatus.BAD_REQUEST);
        } else {
            admin.setPassword(passwordEncryDecry.encrypt(admin.getPassword()));
            adminRepository.save(admin);
            return new ResponseEntity<String>("Successfully Added!", HttpStatus.OK);
        }
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable String id) {
        Optional<Admin> result = adminRepository.findById(id);

        if (result.isPresent()) {
            return new ResponseEntity<Admin>(result.get(), HttpStatus.FOUND);
        } else {
            return new ResponseEntity<Admin>(HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin
    @PatchMapping("/{id}")
    public ResponseEntity<Admin> updateAdminById(@PathVariable String id, @RequestBody Map<String, String> json,
            @RequestHeader Map<String, String> headers) {
        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);

        if (isAuthorized) {

            Optional<Admin> result = adminRepository.findById(id);

            if (result.isPresent()) {

                json.forEach((key, val) -> {
                    Field field = ReflectionUtils.findField(Admin.class, key);
                    field.setAccessible(true);
                    if (key.equals("password")) {
                        val = passwordEncryDecry.encrypt(val);
                    }
                    ReflectionUtils.setField(field, result.get(), val);
                });

                adminRepository.save(result.get());

                return new ResponseEntity<Admin>(result.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<Admin>(HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<Admin>(HttpStatus.UNAUTHORIZED);
        }

    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<Admin> deleteAdminById(@PathVariable String id, @RequestHeader Map<String, String> headers) {
        String token = headers.get("token");
        String userID = headers.get("userid");

        Boolean isAuthorized = auth.useAuth(token, userID);

        if (isAuthorized) {
            Optional<Admin> result = adminRepository.findById(id);

            if (result.isPresent()) {
                adminRepository.deleteById(id);
                return new ResponseEntity<Admin>(result.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<Admin>(HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<Admin>(HttpStatus.UNAUTHORIZED);
        }
    }

}
