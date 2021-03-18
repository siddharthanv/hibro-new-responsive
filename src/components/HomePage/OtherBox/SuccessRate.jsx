import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ServiceIllustrator from "../../../Images/ServiceIllustrator.png";


function SuccessRate() {
  return (
    <div className="successBox">
      <h1 className="successText oswald">
        <span style={{ color: "#fff" }}>OUR</span> SUCCESS{" "}
        <span style={{ color: "#fff" }}>RATE</span>
      </h1>
      <Container className="py-4">
        <Grid container spacing={1}>
          <Grid item sm={6}>
            <img
              className="ServiceIllustrator"
              src={ServiceIllustrator}
              alt="Service Illustrator"
            />
          </Grid>
          <Grid item sm={6}>
            <Grid container spacing={1} className="successRate">
              <Grid item xs={6} style={{ margin: "40px 0px" }}>
                <i className="flaticon-people icons"  ></i>
                <h2 className="successRateCount">4126+</h2>
                <p className="successRateDescription">HAPPY CLIENTS</p>
              </Grid>
              <Grid item xs={6} style={{ margin: "40px 0px" }}>
              <i className="flaticon-security icons"  ></i>
                <h2 className="successRateCount">50+</h2>
                <p className="successRateDescription">QUALIFIED STAFFS</p>
              </Grid>
              <Grid item xs={6} style={{ margin: "40px 0px" }}>
              <i className="flaticon-project icons"  ></i>
                <h2 className="successRateCount">2500+</h2>
                <p className="successRateDescription">PROJECTS COMPLETED</p>
              </Grid>
              <Grid item xs={6} style={{ margin: "40px 0px" }}>
              <i className="flaticon-earth-globe icons"  ></i>
                <h2 className="successRateCount">4+</h2>
                <p className="successRateDescription">AVERAGE RATING</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SuccessRate;
