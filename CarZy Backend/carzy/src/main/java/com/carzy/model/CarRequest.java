package com.carzy.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "car_request")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CarRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "req_id")
    private String id;

    @Column(name = "car_id")
    private String carId;

    @Column(name = "c_id")
    private String customerId;

    @Column(name = "co_id")
    private String carownerId;

    @Column(name = "start_time")
    private String startTime;

    @Column(name = "end_time")
    private String endTime;

    @Column(name = "date")
    private String date;

    @Column(name = "req_status")
    private String requestStatus;

}
