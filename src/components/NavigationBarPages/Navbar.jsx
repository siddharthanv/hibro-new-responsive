import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  navlinkhead: {
    display: "inline",
    marginRight: 20,
  },
  navlink: {
    color: "#000",
    "&:hover": {
      color: "#foo",
    },
    textDecoration: "none",
  },
});

function NavBar() {
  const classes = useStyles();
  return (
    <ul style={{ listStyleType: "none" }}>
      <li className={classes.navlinkhead}>
        <Link to="/" className={classes.navlink}>
          Home
        </Link>
      </li>
      <li className={classes.navlinkhead}>
        <Link to="/about" className={classes.navlink}>
          About Us
        </Link>
      </li>
      <li className={classes.navlinkhead}>
        <Link to="/mybookings" className={classes.navlink}>
          My Bookings
        </Link>
      </li>
      <li className={classes.navlinkhead}>
        <Link to="/blog" className={classes.navlink}>
          Blog
        </Link>
      </li>
      <li className={classes.navlinkhead}>
        <Link to="/careers" className={classes.navlink}>
          Carrers
        </Link>
      </li>
      <li className={classes.navlinkhead}>
        <Link to="/contact" className={classes.navlink}>
          Contact Us
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
