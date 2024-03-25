package com.carzy.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "driver_request")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class DriverRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "req_id")
    private String id;

    @Column(name = "d_id")
    private String driverId;

    @Column(name = "c_id")
    private String customerId;

    @Column(name = "car_id")
    private String carId;

    @Column(name = "date")
    private String date;

    @Column(name = "start_time")
    private String startTime;

    @Column(name = "end_time")
    private String endTime;

    @Column(name = "place")
    private String place;

    @Column(name = "req_status")
    private String requestStatus;
}
