import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function OurPlans() {
  return (
    <div className=" oswald " style={{ marginBottom: "50px" }}>
      
      <h1 className="text-center my-5">
        <span style={{ color: "#0066FF" }}>OUR</span>
        <span style={{ color: "#000000" }}> PLANS</span>
      </h1>
      <div className="blueAndYellow">
      <Container maxWidth="lg">
        <Grid container >
          <Grid item xs={6} className="blueBack whiteText"  >
         
            <h1 className="pr-5" style={{ padding: "20px"}}>
            <i className="flaticon-round-info-button icons50 mr-3 "  
              style={{fontSize:"50px" ,fontWeight: "bold"}}></i>  GENERAL
            </h1>
            <Grid  className="roboto generalplan" >
              <h4 >RS.500/2-4HRS</h4>
              <h5  className="generalplanf" >Free support</h5>
            </Grid>
          </Grid>
          <Grid item xs={6} className="yellowBack roboto ">
         
            <h1 style={{ padding: "20px" , textAlign:"left"}}>
            <i className="flaticon-badge icons50 mr-1" style={{fontSize:"50 px", fontWeight: "bold"}}></i>  PREMIUM
            </h1>
            <Grid >
            <div className="premplan">
            <h4 className="roboto" >RS.700/5-9HRS</h4>
              <h5 className="roboto" >Free upgrades</h5>
            </div>
              
            </Grid>
          </Grid>
        </Grid>
        </Container>
      </div>
    </div>
  );
}

export default OurPlans;
