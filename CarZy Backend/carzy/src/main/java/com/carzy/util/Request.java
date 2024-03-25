package com.carzy.util;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Request {
    private String id;
    private String status;
    private String forWhat;
    private String carname;
    private String date;
}
