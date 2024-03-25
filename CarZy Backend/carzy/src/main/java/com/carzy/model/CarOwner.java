package com.carzy.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "car_owner")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CarOwner {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "co_id")
    private String id;

    @Column(name = "co_name")
    private String name;

    @Column(name = "co_email")
    private String email;

    @Column(name = "co_phone")
    private String phone;

    @Column(name = "co_password")
    private String password;
}
