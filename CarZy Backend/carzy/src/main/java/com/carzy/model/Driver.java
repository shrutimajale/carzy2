package com.carzy.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "driver")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Driver {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "d_id")
    private String id;

    @Column(name = "d_name")
    private String name;

    @Column(name = "d_email")
    private String email;

    @Column(name = "d_phone")
    private String phone;

    @Column(name = "d_password")
    private String password;

    @Column(name = "d_city")
    private String city;

    @Column(name = "d_state")
    private String state;

    @Column(name = "d_country")
    private String country;

    @Column(name = "d_address")
    private String address;

    @Column(name = "d_age")
    private String age;

    @Column(name = "driving_licence")
    private String drivingLicence;

    @Column(name = "d_exp")
    private String experience;

    @Column(name = "d_rate")
    private String rate;

    @Column(name = "d_status")
    private String status;

    @Column(name = "d_description")
    private String description;

}
