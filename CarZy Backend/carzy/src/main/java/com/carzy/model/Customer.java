package com.carzy.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "customer")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "c_id")
    private String id;

    @Column(name = "c_name")
    private String name;

    @Column(name = "c_email")
    private String email;

    @Column(name = "c_phone")
    private String phone;

    @Column(name = "c_password")
    private String password;
}
