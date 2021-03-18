import React from "react";
import Logo from "./Logo";
import Container from "@material-ui/core/Container";
import HomeBanner from "../../../Images/home.png";
import Navbar from "../../HomePage/Header/Navbar";

function Header() {
  return (
    <div className="banner" style={{ backgroundImage: `url(${HomeBanner})` }}>
      {/* <img src={HomeBanner} alt="Home Banner" /> */}
      <Container>
        <Logo />
        <Navbar />
      </Container>
    </div>
  );
}

export default Header;
