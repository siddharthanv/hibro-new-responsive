import React from "react";
//import Collapse from '@material-ui/core/Collapse';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

function OnlineSupport() {
  return (
    //<Slide direction="up"  mountOnEnter unmountOnExit>
    //<Collapse>
    <div className="firstHeading" style={{ marginBottom: "50px" }}>
      <h1 style={{ paddingBottom: "30px" }}>
        <span style={{ color: "#0066FF" }}>LARGEST HOME</span>
        <span style={{ color: "#000000" }}> SERVICE PROVIDER</span>
      </h1>
      <div className="blueAndYellow">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={6}   className="blueBack whiteText">
            <h1 style={{ padding: "20px" }}>
              <i className="flaticon-24-hours-delivery p-2 roboto icons50" ></i> ONLINE SUPPORT
            </h1>
          </Grid>
          <Grid item xs={6}  className="yellowBack">
          <div  className="d-flex" >

<i className="flaticon-user-at-phone p-2 roboto icons50 "></i>
   <h1 style={{ padding: "20px" ,fontFamily:"roboto" ,fontWeight:"bolder"}}>
            
              9962562562
              <br />
              <span className="callusfree">call us free</span>
            </h1>
           
           
</div>  

            
          </Grid>
        </Grid>
        </Container>
      </div>
    </div>
    //</Collapse>
    //</Slide>
  );
}

export default OnlineSupport;
