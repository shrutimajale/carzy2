-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 28, 2023 at 09:12 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `carzy`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `a_id` varchar(255) NOT NULL,
  `a_name` varchar(255) NOT NULL,
  `a_email` varchar(255) NOT NULL,
  `a_password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`a_id`, `a_name`, `a_email`, `a_password`) VALUES
('2cde1cd7-03ee-4469-83ed-3306c3c86670', 'carzy', 'carzy@gmail.com', 'BmyYULOq15hkg+x5ZtqNYg==');

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `car_id` varchar(255) NOT NULL,
  `car_name` varchar(255) NOT NULL,
  `car_rate` float NOT NULL,
  `co_id` varchar(255) NOT NULL,
  `car_status` varchar(255) DEFAULT NULL,
  `car_city` varchar(255) NOT NULL,
  `car_area` varchar(255) NOT NULL,
  `car_country` varchar(255) DEFAULT NULL,
  `car_state` varchar(255) NOT NULL,
  `car_address` text NOT NULL,
  `car_image` varchar(255) NOT NULL,
  `car_image_file_path` varchar(255) NOT NULL,
  `car_description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`car_id`, `car_name`, `car_rate`, `co_id`, `car_status`, `car_city`, `car_area`, `car_country`, `car_state`, `car_address`, `car_image`, `car_image_file_path`, `car_description`) VALUES
('004bc917-24a2-4b4e-8091-db24349e207a', 'BMW SClass', 3000, '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'Booked', 'Latur', 'Nandi Stop', 'India', 'Maharashtra', 'Ram Nagar, Latur', 'wp2495526.jpg', 'D:\\CARZY\\project\\Carzy\\CarZy Backend\\carzy\\src\\main\\carimages\\8fc4f8d0-0f4c-408c-a360-c9115fd92a19_1693168712421.jpg', 'none'),
('09071407-7343-4f76-b845-8222f4946863', 'BMW SClass', 3000, '9057cc7a-95f0-4292-a92b-7b47de2aafd2', 'Booked', 'Latur', 'Nandi Stop', 'India', 'Maharashtra', 'Ram Nagar, Latur', 'wp2495526.jpg', 'D:\\CARZY\\project\\Carzy\\CarZy Backend\\carzy\\src\\main\\carimages\\9057cc7a-95f0-4292-a92b-7b47de2aafd2_1693164306122.jpg', 'none'),
('105867e5-d326-476a-8893-e70df664b0e4', 'Maruti 800', 160, '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'Booked', 'Nashik', 'wqraefsd', 'India', 'Maharashtra', 'userid', 'th (4).jpg', 'D:\\CARZY\\project\\Carzy\\CarZy Backend\\carzy\\src\\main\\carimages\\8fc4f8d0-0f4c-408c-a360-c9115fd92a19_1693206266537.jpeg', 'Jay Bajrangbali'),
('19b93833-1db1-4c3d-b6a9-578c259733b1', 'BMW SClass', 3000, '9057cc7a-95f0-4292-a92b-7b47de2aafd2', 'available', 'Latur', 'Nandi Stop', 'India', 'Maharashtra', 'Ram Nagar, Latur', 'wp2495526.jpg', 'D:\\CARZY\\project\\Carzy\\CarZy Backend\\carzy\\src\\main\\carimages\\9057cc7a-95f0-4292-a92b-7b47de2aafd2_1693164198705.jpg', 'none'),
('25491f83-bf3e-48e0-afb6-f62b14a44803', 'Gandharvawe', 34, '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'Booked', 'Nashik', 'sadf', 'sdf', 'Maharashtra', 'userid', 'mk_123.jpg', 'D:\\CARZY\\project\\Carzy\\CarZy Backend\\carzy\\src\\main\\carimages\\8fc4f8d0-0f4c-408c-a360-c9115fd92a19_1693206740895.jpeg', 'sdzs'),
('4c69de5e-ee30-487f-a241-ee931fb0957a', 'BMW SClass', 3000, '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'available', 'Latur', 'Nandi Stop', 'India', 'Maharashtra', 'Ram Nagar, Latur', 'wp2495526.jpg', 'D:\\CARZY\\project\\Carzy\\CarZy Backend\\carzy\\src\\main\\carimages\\8fc4f8d0-0f4c-408c-a360-c9115fd92a19_1693168725036.jpg', 'none'),
('64738d9c-1245-421a-b057-b1596471e0de', 'Alto K10', 200, '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'Available', 'Nashik', 'asfd', 'India', 'Maharashtra', 'userid', 'th (4).jpg', 'D:\\CARZY\\project\\Carzy\\CarZy Backend\\carzy\\src\\main\\carimages\\8fc4f8d0-0f4c-408c-a360-c9115fd92a19_1693205993124.jpeg', 'Aajao Boss'),
('90836620-646c-4b12-952d-4d589cadf8d2', 'Maruti 800', 160, '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'Booked', 'Nashik', 'wqraefsd', 'India', 'Maharashtra', 'userid', 'th (4).jpg', 'D:\\CARZY\\project\\Carzy\\CarZy Backend\\carzy\\src\\main\\carimages\\8fc4f8d0-0f4c-408c-a360-c9115fd92a19_1693206422573.jpeg', 'Jay Bajrangbali'),
('91cc1202-aa02-4088-937b-42ff2e424681', 'mercedes benz', 10000000, '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'Booked', 'Bhusawal', 'nahata college', 'India', 'Maharashtra', 'userid', 'wp2495526.jpg', 'D:\\CARZY\\project\\Carzy\\CarZy Backend\\carzy\\src\\main\\carimages\\8fc4f8d0-0f4c-408c-a360-c9115fd92a19_1693221311331.jpeg', 'jai hind '),
('9896a373-1231-4ce5-80f3-d3d8070cb5ca', 'BMW SClass', 3000, '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'available', 'Latur', 'Nandi Stop', 'India', 'Maharashtra', 'Ram Nagar, Latur', 'wp2495526.jpg', 'D:\\CARZY\\project\\Carzy\\CarZy Backend\\carzy\\src\\main\\carimages\\8fc4f8d0-0f4c-408c-a360-c9115fd92a19_1693168723659.jpg', 'none'),
('a8fef834-3978-4291-9e01-1f46e25823e8', 'BMW SClass', 3000, '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'available', 'Latur', 'Nandi Stop', 'India', 'Maharashtra', 'Ram Nagar, Latur', 'th (3).jpg', 'D:\\CARZY\\project\\Carzy\\CarZy Backend\\carzy\\src\\main\\carimages\\8fc4f8d0-0f4c-408c-a360-c9115fd92a19_1693170312868.jpg', 'none'),
('ab87f6de-4b88-41d2-bbc3-96bfcd46033b', 'Maruti 800', 160, '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'Available', 'Nashik', 'wqraefsd', 'India', 'Maharashtra', 'userid', 'th (4).jpg', 'D:\\CARZY\\project\\Carzy\\CarZy Backend\\carzy\\src\\main\\carimages\\8fc4f8d0-0f4c-408c-a360-c9115fd92a19_1693206209725.jpeg', 'Jay Bajrangbali'),
('afd6a736-c4a9-4c94-94b2-7741ea074586', 'Audi', 50, '9057cc7a-95f0-4292-a92b-7b47de2aafd2', 'available', 'Nashik', 'Ring road', 'India', 'Maharashtra', 'userid', 'th (3).jpg', 'D:\\CARZY\\project\\Carzy\\CarZy Backend\\carzy\\src\\main\\carimages\\9057cc7a-95f0-4292-a92b-7b47de2aafd2_1693247942118.jpeg', 'Some description'),
('b71fc2ca-b8b5-4f04-a1a6-87140dd99225', 'Alto 800', 100000, '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'Available', 'Goa', 'rajhanwadi', 'India', 'Goa', 'userid', 'th (4).jpg', 'D:\\CARZY\\project\\Carzy\\CarZy Backend\\carzy\\src\\main\\carimages\\8fc4f8d0-0f4c-408c-a360-c9115fd92a19_1693205833685.jpeg', 'my alto is my alto and none of your alto\'s'),
('c04e30a3-8baa-4e29-9e81-1d8349a2888a', 'asd', 432, '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'available', 'sadf', 'sadf', 'sadf', 'sadf', 'userid', 'th (3).jpg', 'D:\\CARZY\\project\\Carzy\\CarZy Backend\\carzy\\src\\main\\carimages\\8fc4f8d0-0f4c-408c-a360-c9115fd92a19_1693206704953.jpeg', 'undefined'),
('c50a4105-ec1a-4e93-9025-6fc9ddfe0d72', 'asdfsaf', 23, '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', NULL, 'sfd', 'sdgsdag', 'sdf', 'vcbxc', 'userid', 'th (1).jpg', 'D:\\CARZY\\project\\Carzy\\CarZy Backend\\carzy\\src\\main\\carimages\\8fc4f8d0-0f4c-408c-a360-c9115fd92a19_1693205663837.jpeg', 'sdfzcxvxzvz');

-- --------------------------------------------------------

--
-- Table structure for table `car_owner`
--

CREATE TABLE `car_owner` (
  `co_id` varchar(255) NOT NULL,
  `co_name` varchar(255) NOT NULL,
  `co_email` varchar(255) NOT NULL,
  `co_phone` varchar(255) NOT NULL,
  `co_password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `car_owner`
--

INSERT INTO `car_owner` (`co_id`, `co_name`, `co_email`, `co_phone`, `co_password`) VALUES
('0e65f333-dbc2-45ca-8c55-7dd22eb23467', 'sakharam', 'bhide@gmail.com', '9099887789', '19FcI709kpbLy1ZWbkwm7w=='),
('468aa14f-d8c4-4f01-ad69-5967f34adbe8', 'Gandharv Kulkarni', 'gandharv2003@gmail.com', '07972368497', 'QlYp2pe56URSUpGPIx+bsg=='),
('8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'mk', 'mk@gmail.com', '1234567890', 'nFITIfw8mAOoTC64OHTtkg=='),
('9057cc7a-95f0-4292-a92b-7b47de2aafd2', 'Car Owner', 'carowner@gmail.com', '9999999999', 'nFITIfw8mAOoTC64OHTtkg=='),
('b2ec75cc-d31d-446d-b88d-a7af58e00cd9', 'Mr. Meow 7', 'meow7@gmail.com', '7878787878', 'nFITIfw8mAOoTC64OHTtkg=='),
('ba078bcf-3dd9-4aab-ae88-920d61731f33', 'Prathamesh shirwadkar', 'mymail@gmail.com', '1222222222', 'nFITIfw8mAOoTC64OHTtkg==');

-- --------------------------------------------------------

--
-- Table structure for table `car_request`
--

CREATE TABLE `car_request` (
  `req_id` varchar(255) NOT NULL,
  `car_id` varchar(255) NOT NULL,
  `c_id` varchar(255) NOT NULL,
  `co_id` varchar(255) DEFAULT NULL,
  `req_status` varchar(255) NOT NULL,
  `start_time` varchar(255) DEFAULT NULL,
  `end_time` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `car_request`
--

INSERT INTO `car_request` (`req_id`, `car_id`, `c_id`, `co_id`, `req_status`, `start_time`, `end_time`, `date`) VALUES
('2388c6cc-6ff6-46c9-94a9-225621d4179b', '90836620-646c-4b12-952d-4d589cadf8d2', '1604b802-7399-4109-8d72-b0bec90091a0', '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'Approved', '11:34', '11:34', '2023-08-31'),
('2cb155e0-d93c-4271-841f-fcf7d63c8313', '25491f83-bf3e-48e0-afb6-f62b14a44803', '1604b802-7399-4109-8d72-b0bec90091a0', '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'Approved', '17:18', '13:18', '2023-08-29'),
('42a7f75d-59af-4623-afbe-2d14f8231bce', '105867e5-d326-476a-8893-e70df664b0e4', 'e30cb793-41cf-49a8-b762-23ccbb18bb34', '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'Approved', '2023-08-29T22:34', '2023-08-30T18:34', '2023-08-29'),
('5adab7f6-e2c3-4293-8d7f-325b9e6461d1', '91cc1202-aa02-4088-937b-42ff2e424681', '1604b802-7399-4109-8d72-b0bec90091a0', '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'Approved', '17:17', '18:17', '2023-08-29'),
('64f74b50-504c-407e-88f1-9f77ed64d548', '91cc1202-aa02-4088-937b-42ff2e424681', '1604b802-7399-4109-8d72-b0bec90091a0', '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'Pending', '2023-08-29T19:04', '2023-08-30T19:04', '2023-08-29'),
('6cd40d6a-dcbc-43a6-a1f6-e917760b3989', '105867e5-d326-476a-8893-e70df664b0e4', '1604b802-7399-4109-8d72-b0bec90091a0', '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'Pending', '18:57', '11:57', '2023-08-28'),
('7d016f26-c1f0-4b6a-b872-35a2486bc146', 'b71fc2ca-b8b5-4f04-a1a6-87140dd99225', '1604b802-7399-4109-8d72-b0bec90091a0', '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'Pending', '11:49', '11:49', '2023-08-31'),
('975ba7a5-bc1d-4c65-a9e2-ef4d4043ab51', 'ab87f6de-4b88-41d2-bbc3-96bfcd46033b', '1604b802-7399-4109-8d72-b0bec90091a0', '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'Pending', '2023-08-29T19:04', '2023-08-30T19:04', '2023-08-29'),
('9838fee9-b2fc-47b4-acc6-ebcf2907ee28', '105867e5-d326-476a-8893-e70df664b0e4', '1604b802-7399-4109-8d72-b0bec90091a0', '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'Pending', '18:57', '11:57', '2023-08-28'),
('af97145e-b3d1-4359-aaf0-79e402ed868b', '90836620-646c-4b12-952d-4d589cadf8d2', '1604b802-7399-4109-8d72-b0bec90091a0', '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'Pending', '2023-08-31T11:34', '2023-09-09T11:34', '2023-08-31'),
('d0e7044a-e3e4-4ba5-bbec-821dddf76147', '9896a373-1231-4ce5-80f3-d3d8070cb5ca', '1604b802-7399-4109-8d72-b0bec90091a0', '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'Pending', '2023-08-29T19:04', '2023-08-30T19:04', '2023-08-29'),
('eb00bbf7-1440-488e-81ef-d4f1ff51f9d7', '90836620-646c-4b12-952d-4d589cadf8d2', '1604b802-7399-4109-8d72-b0bec90091a0', '8fc4f8d0-0f4c-408c-a360-c9115fd92a19', 'Pending', '15:07', '18:07', '2023-09-09');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `c_id` varchar(255) NOT NULL,
  `c_name` varchar(255) NOT NULL,
  `c_email` varchar(255) NOT NULL,
  `c_phone` varchar(255) NOT NULL,
  `c_password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`c_id`, `c_name`, `c_email`, `c_phone`, `c_password`) VALUES
('0af30be9-7c22-4e46-b606-c53df2887f18', 'Mr. Meow 2', 'meow2@gmail.com', '8787878787', 'nFITIfw8mAOoTC64OHTtkg=='),
('1604b802-7399-4109-8d72-b0bec90091a0', 'akshay', 'customer@gmail.com', '1212323232', 'nFITIfw8mAOoTC64OHTtkg=='),
('22bae292-0b4b-4b4e-98db-c5820516f1ba', 'Gandharv Kulkarni', 'gandharv2003@gmail.com', '07972368497', 'QlYp2pe56URSUpGPIx+bsg=='),
('3169311f-e53f-4480-8d89-4ece91fc34aa', 'Mr. Meow 5', 'meow5@gmail.com', '8787878787', 'nFITIfw8mAOoTC64OHTtkg=='),
('86192d0d-e62d-45ce-81a2-9688f8f0e298', 'Prathamesh Patil', 'mymail@gmail.com', '7798410505', 'nFITIfw8mAOoTC64OHTtkg=='),
('986523a1-7dd8-40d5-8d22-24977fdd203c', 'Mr meow', 'meow@gmail.com', '8787878787', 'nFITIfw8mAOoTC64OHTtkg=='),
('c37d5ddd-4f04-44bc-b19c-ce34e31f5b5b', 'Parthmesh Patil', 'prathmesh@gmail.com', '07972368497', '19FcI709kpbLy1ZWbkwm7w=='),
('cdb5047d-5a46-43a0-a32a-029598470349', 'Mr. Meow 7', 'meow7@gmail.com', '7878787878', 'nFITIfw8mAOoTC64OHTtkg=='),
('e174356f-71bd-4805-8009-142e54f0957f', 'Mr. Meow 6', 'meow6@gmail.com', '7878787878', 'nFITIfw8mAOoTC64OHTtkg=='),
('e30cb793-41cf-49a8-b762-23ccbb18bb34', 'Shruti', 'shruti@gmail.com', '9518311215', 'WTp26wQLun+x9FiLYB2tkg=='),
('e86f01b3-398a-44f4-b8ad-3d08c8ba55c8', 'Maddy', 'mymail2@gmail.com', '9669696969', 'nFITIfw8mAOoTC64OHTtkg=='),
('f2b20b64-2a1a-4291-ad07-a23948d5c379', 'Mr. Meow 3', 'meow3@gmail.com', '8787878787', 'nFITIfw8mAOoTC64OHTtkg=='),
('f90969e7-e3fd-4369-af09-1f7cf28dd8a9', 'Mr. Meow 4', 'meow4@gmail.com', '8787878787', 'nFITIfw8mAOoTC64OHTtkg==');

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE `driver` (
  `d_id` varchar(255) NOT NULL,
  `d_name` varchar(255) NOT NULL,
  `d_email` varchar(255) NOT NULL,
  `d_phone` varchar(255) DEFAULT NULL,
  `d_password` varchar(255) NOT NULL,
  `d_city` varchar(255) DEFAULT NULL,
  `d_state` varchar(255) DEFAULT NULL,
  `d_country` varchar(255) DEFAULT NULL,
  `d_address` text DEFAULT NULL,
  `d_age` varchar(255) DEFAULT NULL,
  `driving_licence` varchar(255) DEFAULT NULL,
  `d_exp` varchar(255) DEFAULT NULL,
  `d_rate` varchar(255) DEFAULT NULL,
  `d_status` varchar(255) DEFAULT NULL,
  `d_description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `driver`
--

INSERT INTO `driver` (`d_id`, `d_name`, `d_email`, `d_phone`, `d_password`, `d_city`, `d_state`, `d_country`, `d_address`, `d_age`, `driving_licence`, `d_exp`, `d_rate`, `d_status`, `d_description`) VALUES
('2a6acffa-597d-47ed-90c0-e39903f8b3e2', 'Driver', 'driver@gmail.com', '1111111112', 'nFITIfw8mAOoTC64OHTtkg==', 'Nashik', 'Maharashtra', 'India', 'Flat 8,Vasant Deep Soc, Jailroad,Nashik - 422101.', '12', '123213', '0', '10', 'Not Available', 'That\'s my description.'),
('3ad051cd-f582-4f37-801d-0ba8b126e666', 'mk', 'mkd@gmail.com', '9090909090', 'nFITIfw8mAOoTC64OHTtkg==', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('42cb2e21-2cfb-4323-9ce9-ba617a787d47', 'Prathmesh', 'prathmesh@gmail.com', '8847366474', 'QlYp2pe56URSUpGPIx+bsg==', NULL, NULL, NULL, NULL, '0', NULL, '0', '0', NULL, NULL),
('498a652d-dc45-4047-9eaa-931c2b087393', 'Bharat', 'bharat@gmail.com', '1234567829', 'nFITIfw8mAOoTC64OHTtkg==', 'fdyfh', 'sdfasfd', 'sdfasf', 'dhulesdas ads', '24', '2423', '234', '21', NULL, 'asdfeawfsdsadf'),
('a7926796-7759-4ad1-8a61-07eb4ab82345', 'Prathamesh Patil', 'mymail@gmail.com', '7798410500', 'nFITIfw8mAOoTC64OHTtkg==', 'Nashik', 'Maharashtra', 'India', 'hello world', '23', '243234', '19', '500', NULL, 'jai hind'),
('f2ffc3ff-7b45-4008-9a09-9d6b5df2b586', 'Mr. Meow 7', 'meow7@gmail.com', '7878787878', 'nFITIfw8mAOoTC64OHTtkg==', NULL, NULL, NULL, NULL, '0', NULL, '0', '0', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `driver_request`
--

CREATE TABLE `driver_request` (
  `req_id` varchar(255) NOT NULL,
  `d_id` varchar(255) NOT NULL,
  `c_id` varchar(255) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `place` varchar(255) DEFAULT NULL,
  `car_id` varchar(255) NOT NULL,
  `start_time` varchar(255) DEFAULT NULL,
  `end_time` varchar(255) DEFAULT NULL,
  `req_status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `driver_request`
--

INSERT INTO `driver_request` (`req_id`, `d_id`, `c_id`, `date`, `place`, `car_id`, `start_time`, `end_time`, `req_status`) VALUES
('0bb78328-e1ce-4358-9f37-f426f0363231', '42cb2e21-2cfb-4323-9ce9-ba617a787d47', '1604b802-7399-4109-8d72-b0bec90091a0', NULL, NULL, '', NULL, NULL, 'Pending'),
('a1ea32be-e3d7-4325-b8fd-c0ffd30404e5', '2a6acffa-597d-47ed-90c0-e39903f8b3e2', '1604b802-7399-4109-8d72-b0bec90091a0', '2023-08-30', NULL, '', '2023-08-30T12:23', '2023-08-30T12:23', 'Booked'),
('b173f124-596f-47c8-8d98-738869566db0', '2a6acffa-597d-47ed-90c0-e39903f8b3e2', 'e30cb793-41cf-49a8-b762-23ccbb18bb34', '2023-08-29', NULL, '', '2023-08-29T22:35', '2023-08-30T18:35', 'Pending'),
('bbc11e17-ee2b-48e3-b86f-f4a39bdff6f6', '2a6acffa-597d-47ed-90c0-e39903f8b3e2', '1604b802-7399-4109-8d72-b0bec90091a0', '2023-08-30', NULL, '', '12:23', '12:23', 'Pending'),
('e417fc79-e648-4c74-b051-c989b21264e0', '2a6acffa-597d-47ed-90c0-e39903f8b3e2', '1604b802-7399-4109-8d72-b0bec90091a0', '2023-08-31', NULL, '', NULL, NULL, 'Pending'),
('fc2390ec-e385-40e4-b782-e60af5013890', '2a6acffa-597d-47ed-90c0-e39903f8b3e2', '1604b802-7399-4109-8d72-b0bec90091a0', NULL, NULL, '', NULL, NULL, 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `token`
--

CREATE TABLE `token` (
  `user_id` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `token`
--

INSERT INTO `token` (`user_id`, `token`) VALUES
('22bae292-0b4b-4b4e-98db-c5820516f1ba', '1693086019663a6KlYqXbkDEYQS8YJsOb'),
('86192d0d-e62d-45ce-81a2-9688f8f0e298', '1693110654248a6KlYqXbkDEYQS8YJsOb'),
('86192d0d-e62d-45ce-81a2-9688f8f0e298', '1693110700974a6KlYqXbkDEYQS8YJsOb'),
('cdb5047d-5a46-43a0-a32a-029598470349', '1693111962820a6KlYqXbkDEYQS8YJsOb'),
('f2ffc3ff-7b45-4008-9a09-9d6b5df2b586', '1693111966696a6KlYqXbkDEYQS8YJsOb'),
('b2ec75cc-d31d-446d-b88d-a7af58e00cd9', '1693111970301a6KlYqXbkDEYQS8YJsOb'),
('f2ffc3ff-7b45-4008-9a09-9d6b5df2b586', '1693111988334a6KlYqXbkDEYQS8YJsOb'),
('f2ffc3ff-7b45-4008-9a09-9d6b5df2b586', '1693111989854a6KlYqXbkDEYQS8YJsOb'),
('f2ffc3ff-7b45-4008-9a09-9d6b5df2b586', '1693111997086a6KlYqXbkDEYQS8YJsOb'),
('f2ffc3ff-7b45-4008-9a09-9d6b5df2b586', '1693112001939a6KlYqXbkDEYQS8YJsOb'),
('f2ffc3ff-7b45-4008-9a09-9d6b5df2b586', '1693112485282a6KlYqXbkDEYQS8YJsOb'),
('f2ffc3ff-7b45-4008-9a09-9d6b5df2b586', '1693112682501a6KlYqXbkDEYQS8YJsOb'),
('f2ffc3ff-7b45-4008-9a09-9d6b5df2b586', '1693112728831a6KlYqXbkDEYQS8YJsOb'),
('f2ffc3ff-7b45-4008-9a09-9d6b5df2b586', '1693112876858a6KlYqXbkDEYQS8YJsOb'),
('f2ffc3ff-7b45-4008-9a09-9d6b5df2b586', '1693112954370a6KlYqXbkDEYQS8YJsOb'),
('f2ffc3ff-7b45-4008-9a09-9d6b5df2b586', '1693112982829a6KlYqXbkDEYQS8YJsOb'),
('f2ffc3ff-7b45-4008-9a09-9d6b5df2b586', '1693113000448a6KlYqXbkDEYQS8YJsOb'),
('8ed7313a-bfe2-404d-a997-d0fb3ffd2e92', '1693113281401a6KlYqXbkDEYQS8YJsOb'),
('8ed7313a-bfe2-404d-a997-d0fb3ffd2e92', '1693113284464a6KlYqXbkDEYQS8YJsOb'),
('8ed7313a-bfe2-404d-a997-d0fb3ffd2e92', '1693113287931a6KlYqXbkDEYQS8YJsOb'),
('8ed7313a-bfe2-404d-a997-d0fb3ffd2e92', '1693113290753a6KlYqXbkDEYQS8YJsOb'),
('8ed7313a-bfe2-404d-a997-d0fb3ffd2e92', '1693113361838a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693113555782a6KlYqXbkDEYQS8YJsOb'),
('9057cc7a-95f0-4292-a92b-7b47de2aafd2', '1693113572286a6KlYqXbkDEYQS8YJsOb'),
('eb7f6cef-f5a6-418f-a5ba-d1488911b090', '1693113587362a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693113736780a6KlYqXbkDEYQS8YJsOb'),
('eb7f6cef-f5a6-418f-a5ba-d1488911b090', '1693113755263a6KlYqXbkDEYQS8YJsOb'),
('eb7f6cef-f5a6-418f-a5ba-d1488911b090', '1693114232054a6KlYqXbkDEYQS8YJsOb'),
('eb7f6cef-f5a6-418f-a5ba-d1488911b090', '1693114498536a6KlYqXbkDEYQS8YJsOb'),
('eb7f6cef-f5a6-418f-a5ba-d1488911b090', '1693114519148a6KlYqXbkDEYQS8YJsOb'),
('eb7f6cef-f5a6-418f-a5ba-d1488911b090', '1693114647849a6KlYqXbkDEYQS8YJsOb'),
('eb7f6cef-f5a6-418f-a5ba-d1488911b090', '1693114843267a6KlYqXbkDEYQS8YJsOb'),
('a7926796-7759-4ad1-8a61-07eb4ab82345', '1693121741674a6KlYqXbkDEYQS8YJsOb'),
('a7926796-7759-4ad1-8a61-07eb4ab82345', '1693121847012a6KlYqXbkDEYQS8YJsOb'),
('2a6acffa-597d-47ed-90c0-e39903f8b3e2', '1693121933109a6KlYqXbkDEYQS8YJsOb'),
('2a6acffa-597d-47ed-90c0-e39903f8b3e2', '1693122014467a6KlYqXbkDEYQS8YJsOb'),
('ba078bcf-3dd9-4aab-ae88-920d61731f33', '1693122063230a6KlYqXbkDEYQS8YJsOb'),
('2a6acffa-597d-47ed-90c0-e39903f8b3e2', '1693122663113a6KlYqXbkDEYQS8YJsOb'),
('498a652d-dc45-4047-9eaa-931c2b087393', '1693123382773a6KlYqXbkDEYQS8YJsOb'),
('2a6acffa-597d-47ed-90c0-e39903f8b3e2', '1693131444037a6KlYqXbkDEYQS8YJsOb'),
('9057cc7a-95f0-4292-a92b-7b47de2aafd2', '1693131762054a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693131932248a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693133344387a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693133774072a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693133848169a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693133884586a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693134129686a6KlYqXbkDEYQS8YJsOb'),
('9057cc7a-95f0-4292-a92b-7b47de2aafd2', '1693134675749a6KlYqXbkDEYQS8YJsOb'),
('9057cc7a-95f0-4292-a92b-7b47de2aafd2', '1693136979454a6KlYqXbkDEYQS8YJsOb'),
('9057cc7a-95f0-4292-a92b-7b47de2aafd2', '1693139951110a6KlYqXbkDEYQS8YJsOb'),
('9057cc7a-95f0-4292-a92b-7b47de2aafd2', '1693142355457a6KlYqXbkDEYQS8YJsOb'),
('2a6acffa-597d-47ed-90c0-e39903f8b3e2', '1693143676250a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693147225307a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693147502455a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693157587350a6KlYqXbkDEYQS8YJsOb'),
('9057cc7a-95f0-4292-a92b-7b47de2aafd2', '1693157783907a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693158074707a6KlYqXbkDEYQS8YJsOb'),
('9057cc7a-95f0-4292-a92b-7b47de2aafd2', '1693158418013a6KlYqXbkDEYQS8YJsOb'),
('2a6acffa-597d-47ed-90c0-e39903f8b3e2', '1693158663749a6KlYqXbkDEYQS8YJsOb'),
('9057cc7a-95f0-4292-a92b-7b47de2aafd2', '1693158757613a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693161685827a6KlYqXbkDEYQS8YJsOb'),
('9057cc7a-95f0-4292-a92b-7b47de2aafd2', '1693161732511a6KlYqXbkDEYQS8YJsOb'),
('8fc4f8d0-0f4c-408c-a360-c9115fd92a19', '1693168665713a6KlYqXbkDEYQS8YJsOb'),
('8fc4f8d0-0f4c-408c-a360-c9115fd92a19', '1693195423167a6KlYqXbkDEYQS8YJsOb'),
('3ad051cd-f582-4f37-801d-0ba8b126e666', '1693197528680a6KlYqXbkDEYQS8YJsOb'),
('8fc4f8d0-0f4c-408c-a360-c9115fd92a19', '1693200823892a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693207586894a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693211800261a6KlYqXbkDEYQS8YJsOb'),
('8fc4f8d0-0f4c-408c-a360-c9115fd92a19', '1693211874457a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693211943997a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693220853150a6KlYqXbkDEYQS8YJsOb'),
('8fc4f8d0-0f4c-408c-a360-c9115fd92a19', '1693221236775a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693221782903a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693228862370a6KlYqXbkDEYQS8YJsOb'),
('8fc4f8d0-0f4c-408c-a360-c9115fd92a19', '1693235118134a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693235160387a6KlYqXbkDEYQS8YJsOb'),
('2cde1cd7-03ee-4469-83ed-3306c3c86670', '1693237940909a6KlYqXbkDEYQS8YJsOb'),
('9057cc7a-95f0-4292-a92b-7b47de2aafd2', '1693241438449a6KlYqXbkDEYQS8YJsOb'),
('e30cb793-41cf-49a8-b762-23ccbb18bb34', '1693247606877a6KlYqXbkDEYQS8YJsOb'),
('9057cc7a-95f0-4292-a92b-7b47de2aafd2', '1693247896684a6KlYqXbkDEYQS8YJsOb'),
('2a6acffa-597d-47ed-90c0-e39903f8b3e2', '1693248020436a6KlYqXbkDEYQS8YJsOb'),
('2cde1cd7-03ee-4469-83ed-3306c3c86670', '1693248157694a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693249257456a6KlYqXbkDEYQS8YJsOb'),
('9057cc7a-95f0-4292-a92b-7b47de2aafd2', '1693249268867a6KlYqXbkDEYQS8YJsOb'),
('9057cc7a-95f0-4292-a92b-7b47de2aafd2', '1693249328282a6KlYqXbkDEYQS8YJsOb'),
('9057cc7a-95f0-4292-a92b-7b47de2aafd2', '1693249386025a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693249454188a6KlYqXbkDEYQS8YJsOb'),
('9057cc7a-95f0-4292-a92b-7b47de2aafd2', '1693249511284a6KlYqXbkDEYQS8YJsOb'),
('1604b802-7399-4109-8d72-b0bec90091a0', '1693249592066a6KlYqXbkDEYQS8YJsOb'),
('9057cc7a-95f0-4292-a92b-7b47de2aafd2', '1693249762273a6KlYqXbkDEYQS8YJsOb');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`a_id`),
  ADD UNIQUE KEY `a_email` (`a_email`);

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`car_id`);

--
-- Indexes for table `car_owner`
--
ALTER TABLE `car_owner`
  ADD PRIMARY KEY (`co_id`),
  ADD UNIQUE KEY `co_email` (`co_email`),
  ADD UNIQUE KEY `co_phone` (`co_phone`);

--
-- Indexes for table `car_request`
--
ALTER TABLE `car_request`
  ADD PRIMARY KEY (`req_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`c_id`),
  ADD UNIQUE KEY `c_email` (`c_email`);

--
-- Indexes for table `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`d_id`),
  ADD UNIQUE KEY `d_email` (`d_email`),
  ADD UNIQUE KEY `c_phone` (`d_phone`);

--
-- Indexes for table `driver_request`
--
ALTER TABLE `driver_request`
  ADD PRIMARY KEY (`req_id`);

--
-- Indexes for table `token`
--
ALTER TABLE `token`
  ADD UNIQUE KEY `token` (`token`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
