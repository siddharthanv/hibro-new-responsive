import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  follow: {
    backgroundColor: "#1D1C07",
    color: "#fff",
    paddingTop: 50,
    paddingBottom: 50,
    marginTop: 109
  },
  groupIcon: {
    display: "inline-block",
    textAlign: "right",
  },
  icon: {
    paddingLeft: "30px",
  },
});

function FollowUs() {
  const classes = useStyles();
  return (
    <div  className="bg-blk py-3">
      <Container >
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <h1 className='oswald'>FOLLOW US</h1>
          </Grid>
          <Grid className={classes.groupIcon} item xs={6}>
            <div className="iconBg">

            
              <ul className="list-inline">

              <li><a className="bg"><i className="flaticon-facebook" ></i></a></li>
              <li> <a className="bg"><i className="flaticon-twitter"></i></a></li>
              <li><a className="bg"><i className="flaticon-youtube"></i></a></li>
              <li><a className="bg"> <i className="flaticon-instagram"></i></a></li>
            

              </ul>
            
             
            
        
            
           
            </div>
           
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default FollowUs;
