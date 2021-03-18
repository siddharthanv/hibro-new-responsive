import React from "react";
import Home from "./components/HomePage/Home";
import About from "./components/NavigationBarPages/About/AboutUs";
import MyBookings from "./components/NavigationBarPages/MyBookings/MyBookings";
import Blog from "./components/NavigationBarPages/Blog/Blog";
import Careers from "./components/NavigationBarPages/Careers/Careers";
import ContactUs from "./components/NavigationBarPages/ContactUs/ContactUs";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/mybookings" component={MyBookings} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/careers" component={Careers} />
      <Route exact path="/contact" component={ContactUs} />
    </div>
  );
}

export default App;
