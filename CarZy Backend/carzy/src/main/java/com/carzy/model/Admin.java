package com.carzy.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "admin")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "a_id")
    private String id;

    @Column(name = "a_name")
    private String name;

    @Column(name = "a_email")
    private String email;

    @Column(name = "a_password")
    private String password;

    
}
