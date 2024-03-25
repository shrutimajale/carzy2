package com.carzy.util;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CarRequestResponse {
    private String req_id, carname, customername, date, status, starttime, endtime;
}
