import "./App.css";
// Import Pages
import LandingPage from "./Pages/LandingPage";
import Auth from "./Pages/Authentication/Auth";

// Import Components
import AdminPanel from "./Components/Admin/AdminPanel";
import DriverPanel from "./Components/Driver/DriverPanel";
import CustomerPanel from "./Components/Customer/CustomerPanel";
import CarOwnerPanel from "./Components/CarOwner/CarOwnerPanel";
import BookCar from "./Components/Customer/BookCar";
import BookDriver from "./Components/Customer/BookDriver";

import MyCars from "./Components/CarOwner/MyCars";
import Requests from "./Components/CarOwner/Requests";
import CustomerMyProfile from "./Components/Customer/MyProfile";
import CarOwnerMyProfile from "./Components/CarOwner/MyProfile";
import CarOwnerAddCar from "./Components/CarOwner/AddCar";
import DriverMyProfile from "./Components/Driver/DriverProfile";
import DriverMyRequests from "./Components/Driver/DriverRequest";

import AdminLogin from "./Components/Admin/AdminLogin";
import AdminCarOwnerData from "./Components/Admin/AdminCarOwnerData";
import AdminCustomerData from "./Components/Admin/AdminCarOwnerData";
import AdminDriverData from "./Components/Admin/AdminDriverData";

import { Routes, Route } from "react-router-dom";
import MyBookings from "./Components/Customer/MyBookings";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/car-owner/" element={<CarOwnerPanel />}>
          <Route path="my-cars" element={MyCars} />
          <Route path="my-requests" element={Requests} />
          <Route path="my-profile" element={CarOwnerMyProfile} />
          <Route path="add-car" element={CarOwnerAddCar} />
        </Route>
        <Route path="/customer/" element={<CustomerPanel />}>
          <Route path="my-profile" element={CustomerMyProfile} />
          <Route path="my-bookings" element={MyBookings} />
          <Route path="book-car" element={BookCar} />
          <Route path="book-driver" element={BookDriver} />

        </Route>
        <Route path="/driver/" element={<DriverPanel />}>
          <Route path="my-requests" element={DriverMyRequests} />
          <Route path="my-profile" element={DriverMyProfile} />
        </Route>
        <Route path="/admin/" element={<AdminPanel />}>
          <Route path="car-owners" element={AdminCarOwnerData} />
          <Route path="customers" element={AdminCustomerData} />
          <Route path="drivers" element={AdminDriverData} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
