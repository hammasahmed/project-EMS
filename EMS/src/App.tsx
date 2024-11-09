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
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
        <Navbar />

<<<<<<< HEAD
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/listings" element={<Listings />} />
=======
                
>>>>>>> e51a5b8002bb8680b2f9840b9e126bb43f93ebc7

          <Route path="/details/:id" element={<VenueDetail />} />
          <Route path="/vendordb" element={<VendorDB />} />
          <Route path="/BookingForm" element={<BookingForm />} />
          <Route path="/CateringForm" element={<CateringForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
