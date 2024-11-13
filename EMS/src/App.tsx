// App.js
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Featured_services from "./components/featured_services";
import Testimonial from "./components/testimonial";
import Footer from "./components/footer";
import SignUpForm from "./components/login";
import VenueDetail from "./components/DetailPage";
import ListingsPage from "./components/listingpage";
import Login from "./pages/login";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Listings from "./pages/listings";
import VendorDB from "./pages/vendorDB";
import BookingForm from "./components/BookingForm";
import CateringForm from "./components/CateringForm";
import UserDashboard from "./pages/UserDashboard";
import Add_listings from './components/VDB_addlistings'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
=======


>>>>>>> 6e37dfead225e05777f5718711e7e0336adbf961
import CustomerDB from './pages/customerDB'

function App() {
  // x

  return (
    <div>
      {/* <Navbar />
            <Hero />
            <Featured_services />
            <Testimonial />
            <Footer />
            <SignUpForm />
            <LoginForm />
            <ListingsPage /> */}
      <Router>
       

        <Routes>
        
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/details/:id" element={<VenueDetail />} />
          <Route path="/vendordb" element={<VendorDB />} />
          <Route path="/BookingForm" element={<BookingForm />} />
          <Route path="/CateringForm" element={<CateringForm />} />
          <Route path="/customerdb" element={<CustomerDB />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="/add_listings" element={<Add_listings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
