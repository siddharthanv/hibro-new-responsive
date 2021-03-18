import React from "react";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  workHeading: {
    textAlign: "center",
    margin: "75px auto 60px",
    fontFamily: "oswald"

  },
  root: {
    minWidth: 200,
    textAlign: "center",
    paddingTop: "50px",
    paddingBottom: 50,
  },
});

function WorksCard(props) {
  // const classes = useStyles();
  return (
    <Card className="workCard">
      <CardContent>
      <div className="icons50" >
      <i className={props.icon}></i>
      </div>
        
        <Typography variant="h5" component="h2" gutterBottom>
          {props.heading}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {props.subtext}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
}

function HowItWorks() {
  const classe = useStyles();
  return (
    <Container className="py-4">
      <h1 className={classe.workHeading}>
        <span  style={{ color: "#0066ff" }}>HOW IT </span>WORKS
      </h1>
      <Grid container spacing={4}>
        <Grid  item md={3} xs={12} style={{ paddingBottom: "30px" }}>
          {/* <AccessAlarmIcon style={{ fontSize: 50 }} />
          <p>Category Name</p> */}

          <WorksCard 
          icon="flaticon-search"
          heading= "Browse Services"
          subtext ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis tempus cursus."
          />
        </Grid>
        <Grid item md={3} xs={12} style={{ paddingBottom: "30px" }}>
          {/* <AccessAlarmIcon style={{ fontSize: 50 }} />
          <p>Category Name</p> */}
          <WorksCard 
            icon="flaticon-calendar"
          heading= "Schedule Service"
          subtext ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis tempus cursus."
          />
        </Grid>
        <Grid item md={3} xs={12} style={{ paddingBottom: "30px" }}>
          <WorksCard 
            icon="flaticon-open-book"
          heading= "Book Service"
          subtext ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis tempus cursus."
          />
        </Grid>
        <Grid item md={3} xs={12} style={{ paddingBottom: "30px" }}>
          <WorksCard
          icon="flaticon-order"
          heading= "Resolves Issue"
          subtext ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis tempus cursus." />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HowItWorks;
