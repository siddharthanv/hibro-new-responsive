import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   work: {
//     paddingTop: "20px",
//   },
// });

function Category(props) {
  // const classes = useStyles();
  return (
    <Container >
      <Grid  container
  // direction="row"
  // justify="center"
  // alignItems="center"
>
        <Grid item style={{ padding: "20px", }}>
          
          <i className={props.iconName}   style={{ fontSize: 50 }} ></i>
          <p className="catName">{props.catName}</p>
        </Grid>
        
      </Grid>
    </Container>
  )
};

export default Category;
