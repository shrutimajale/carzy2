package com.carzy.util;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class DriverRequestResponse {
    private String customerName;
    private String carName;
    private String place;
    private String date;
    private String startTime;
    private String endTime;
    private String requestId;
    // private String estimatedCost;
    private String status;

}
