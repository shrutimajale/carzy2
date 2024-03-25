package com.carzy.util;

import com.carzy.model.Car;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CarWithImage {
    private Car car;
    private String imageBase64;

}
