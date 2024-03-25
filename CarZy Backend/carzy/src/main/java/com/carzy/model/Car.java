package com.carzy.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "cars")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "car_id")
    private String id;

    @Column(name = "car_name")
    private String name;

    @Column(name = "car_rate")
    private float rate;

    @Column(name = "co_id")
    private String coId;

    @Column(name = "car_status")
    private String status;

    @Column(name = "car_city")
    private String city;

    @Column(name = "car_area")
    private String area;

    @Column(name = "car_country")
    private String country;

    @Column(name = "car_state")
    private String state;

    @Column(name = "car_address")
    private String address;

    @Column(name = "car_image")
    private String image;

    @Column(name = "car_image_file_path")
    private String filePath;

    @Column(name = "car_description")
    private String description;

}
