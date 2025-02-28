import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import Subscription from "../Components/Subscription"
function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <Subscription/>
      <Reviews />
      <Doctors />
      <Footer />
    </div>
  );
}

export default Home;
