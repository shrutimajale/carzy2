package com.carzy.controller;

import java.io.IOException;
import java.lang.reflect.Field;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.util.ReflectionUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.carzy.model.*;
import com.carzy.repository.*;
import com.carzy.util.CarWithImage;

@RestController
@CrossOrigin
@RequestMapping("/api/car")
public class CarController {

    @Autowired
    CarRepository carRepository;

    @Autowired
    CarRequestRepository carRequestRepository;

    @Autowired
    CarOwnerRepository carOwnerRepository;

    @Autowired
    CustomerRepository customerRepository;

    private static String UPLOAD_FOLDER = System.getProperty("user.dir")
            + "\\CarZy Backend\\carzy\\src\\main\\carimages\\";

    @GetMapping("")
    public ResponseEntity<List<CarWithImage>> getAllCars() throws IOException {
        List<Car> cars = carRepository.findAll();
        if (cars.size() == 0) {
            return new ResponseEntity<List<CarWithImage>>(HttpStatus.NO_CONTENT);
        } else {
            List<CarWithImage> response = new ArrayList<>();

            // for (Car car : cars) {
            // String filename = car.getFilePath();
            // byte[] image = Files.readAllBytes(Paths.get(filename));
            // String encodedImage = java.util.Base64.getEncoder().encodeToString(image);

            // response.add(new CarWithImage(car, encodedImage));
            // }
            for (Car car : cars) {
                String filename = car.getFilePath();

                // Check if the file exists before attempting to read it
                if (Files.exists(Paths.get(filename))) {
                    try {
                        byte[] image = Files.readAllBytes(Paths.get(filename));
                        String encodedImage = java.util.Base64.getEncoder().encodeToString(image);

                        response.add(new CarWithImage(car, encodedImage));
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                } else {
                    System.out.println("Image file not found for car: " + car.getId());
                }
            }
            return new ResponseEntity<List<CarWithImage>>(response, HttpStatus.OK);
        }
    }

    @PostMapping("")
    public ResponseEntity<Car> addNewCar(
            @RequestParam("image") MultipartFile image,
            @RequestParam("name") String name,
            @RequestParam("rate") float rate,
            @RequestParam("coId") String coId,
            @RequestParam("city") String city,
            @RequestParam("area") String area,
            @RequestParam("country") String country,
            @RequestParam("state") String state,
            @RequestParam("address") String address,
            @RequestParam("description") String description) {

        Optional<CarOwner> result = carOwnerRepository.findById(coId);

        if (result.isPresent()) {
            try {

                Path folderPath = Paths.get(UPLOAD_FOLDER);
                if (!Files.exists(folderPath)) {
                    Files.createDirectories(folderPath);
                }

                byte[] bytes = image.getBytes();
                String imageName = coId + "_" + String.valueOf(new Date().getTime());
                String extension = "jpg"; // Default extension
                String contentType = image.getContentType();
                if (contentType != null && contentType.contains("/")) {
                    extension = contentType.split("/")[1];
                }

                String fileName = imageName + "." + extension;
                Path path = Paths.get(UPLOAD_FOLDER + fileName);
                Files.write(path, bytes);

                Car car = new Car();
                car.setName(name);
                car.setRate(rate);
                car.setCoId(coId);
                car.setStatus("available");
                car.setCity(city);
                car.setArea(area);
                car.setCountry(country);
                car.setState(state);
                car.setAddress(address);
                car.setFilePath(path.toString());
                car.setImage(image.getOriginalFilename());
                car.setDescription(description);
                carRepository.save(car);
                return new ResponseEntity<Car>(car, HttpStatus.OK);
            } catch (IOException e) {
                e.printStackTrace();
                return new ResponseEntity<Car>(HttpStatus.BAD_REQUEST);
            }
        } else {
            return new ResponseEntity<Car>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/get/{carid}")
    public ResponseEntity<CarWithImage> getCarWithImage(@PathVariable String carid) throws IOException {
        Car car = carRepository.findById(carid).orElseThrow(() -> new RuntimeException("Car not found"));

        String filename = car.getFilePath();
        byte[] image = Files.readAllBytes(Paths.get(filename));
        String encodedImage = java.util.Base64.getEncoder().encodeToString(image);

        CarWithImage response = new CarWithImage(car, encodedImage);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/carowner/{id}")
    public ResponseEntity<List<CarWithImage>> getCarByOwnerId(@PathVariable String id) throws IOException {
        Optional<List<Car>> result = carRepository.findByCoId(id);

        if (result.isPresent()) {
            List<CarWithImage> response = new ArrayList<>();
            List<Car> cars = result.get();

            for (Car car : cars) {
                String filename = car.getFilePath();
                byte[] image = Files.readAllBytes(Paths.get(filename));
                String encodedImage = java.util.Base64.getEncoder().encodeToString(image);

                response.add(new CarWithImage(car, encodedImage));
            }
            return new ResponseEntity<List<CarWithImage>>(response, HttpStatus.OK);
        } else {
            return new ResponseEntity<List<CarWithImage>>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/state/{state}")
    public ResponseEntity<List<CarWithImage>> getCarByState(@PathVariable String state) throws IOException {
        Optional<List<Car>> result = carRepository.findByState(state);

        if (result.isPresent()) {
            List<CarWithImage> response = new ArrayList<>();
            List<Car> cars = result.get();

            for (Car car : cars) {
                String filename = car.getFilePath();
                byte[] image = Files.readAllBytes(Paths.get(filename));
                String encodedImage = java.util.Base64.getEncoder().encodeToString(image);

                response.add(new CarWithImage(car, encodedImage));
            }
            return new ResponseEntity<List<CarWithImage>>(response, HttpStatus.OK);
        } else {
            return new ResponseEntity<List<CarWithImage>>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/city/{city}")
    public ResponseEntity<List<CarWithImage>> getCarByCity(@PathVariable String city) throws IOException {
        Optional<List<Car>> result = carRepository.findByCity(city);

        if (result.isPresent()) {
            List<CarWithImage> response = new ArrayList<>();
            List<Car> cars = result.get();

            for (Car car : cars) {
                String filename = car.getFilePath();
                byte[] image = Files.readAllBytes(Paths.get(filename));
                String encodedImage = java.util.Base64.getEncoder().encodeToString(image);

                response.add(new CarWithImage(car, encodedImage));
            }
            return new ResponseEntity<List<CarWithImage>>(response, HttpStatus.OK);
        } else {
            return new ResponseEntity<List<CarWithImage>>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/filter")
    public ResponseEntity<List<CarWithImage>> getCarFilter(@RequestBody Map<String, String> json,
            @RequestHeader Map<String, String> header) throws IOException {
        String city = json.get("city");
        String state = json.get("state");

        if (city != "" && state != "") {
            List<Car> cars = carRepository.findAll();
            List<CarWithImage> response = new ArrayList<>();
            if (cars.size() <= 0) {
                return new ResponseEntity<List<CarWithImage>>(HttpStatus.NOT_FOUND);
            } else {
                for (Car car : cars) {
                    if (car.getCity().equals(city) && car.getState().equals(state)) {
                        String filename = car.getFilePath();
                        byte[] image = Files.readAllBytes(Paths.get(filename));
                        String encodedImage = java.util.Base64.getEncoder().encodeToString(image);
                        response.add(new CarWithImage(car, encodedImage));
                    }
                }
                return new ResponseEntity<List<CarWithImage>>(response, HttpStatus.OK);
            }
        } else if (city != "") {
            return getCarByCity(city);
        } else {
            return getCarByState(state);
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Car> updateCarById(@PathVariable String id, @RequestBody Map<String, String> json) {
        Optional<Car> result = carRepository.findById(id);
        if (result.isPresent()) {

            json.forEach((key, val) -> {
                Field field = ReflectionUtils.findField(Car.class, key);
                field.setAccessible(true);
                ReflectionUtils.setField(field, result.get(), val);
            });

            carRepository.save(result.get());

            return new ResponseEntity<Car>(result.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<Car>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Car> deleteCarById(@PathVariable String id) {

        Optional<Car> result = carRepository.findById(id);

        if (result.isPresent()) {
            carRepository.deleteById(id);
            return new ResponseEntity<Car>(result.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<Car>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/requestcar")
    public ResponseEntity<String> bookCar(@RequestBody Map<String, String> json) {
        String custID = json.get("customerid");
        String carID = json.get("carid");

        String startTimeDate = json.get("starttime");
        String endTimeDate = json.get("endtime");

        String date = startTimeDate.split("T")[0];
        String startTime = startTimeDate;
        String endTime = endTimeDate;

        Optional<Car> result = carRepository.findById(carID);
        Optional<Customer> customerResult = customerRepository.findById(custID);

        if (result.isPresent() && customerResult.isPresent()) {
            Car car = result.get();
            if (car.getStatus().equals("Booked")) {
                return new ResponseEntity<String>("Car is already booked!", HttpStatus.BAD_REQUEST);
            }

            CarRequest req = new CarRequest();
            req.setCarId(carID);
            req.setCustomerId(custID);
            req.setDate(date);
            req.setStartTime(startTime);
            req.setEndTime(endTime);
            req.setRequestStatus("Pending");
            req.setCarownerId(car.getCoId());
            carRequestRepository.save(req);
            return new ResponseEntity<String>("Request Sent!", HttpStatus.OK);
        } else if (!customerResult.isPresent()) {
            return new ResponseEntity<String>("Invalid Customer ID", HttpStatus.NOT_FOUND);

        } else {
            return new ResponseEntity<String>("Car Not Found!", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/acceptcar")
    public ResponseEntity<String> acceptCar(@RequestBody Map<String, String> json) {
        Optional<CarRequest> result = carRequestRepository.findById(json.get("requestid"));

        if (result.isPresent()) {
            CarRequest req = result.get();

            Optional<Car> carExists = carRepository.findById(req.getCarId());
            if (carExists.isPresent()) {
                Car car = carExists.get();
                if (car.getStatus().equals("Booked")) {
                    return new ResponseEntity<String>("Car is already booked", HttpStatus.BAD_REQUEST);
                } else {
                    car.setStatus("Booked");
                    req.setRequestStatus("Approved");

                    carRequestRepository.save(req);
                    carRepository.save(car);
                    return new ResponseEntity<String>("Car Booked", HttpStatus.OK);
                }
            } else {
                return new ResponseEntity<String>("Car not Found", HttpStatus.NOT_FOUND);
            }

        } else {
            return new ResponseEntity<String>("Request Not Found!", HttpStatus.NOT_FOUND);
        }
    }

}
