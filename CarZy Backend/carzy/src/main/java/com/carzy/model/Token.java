package com.carzy.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "token")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Token {

    @Id
    @Column(name = "token")
    private String token;

    @Column(name = "user_id")
    private String userId;
    
}
