import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";





function FootBottom() {

  return (
    <div className="foot-bot py-4">
      <Container >
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <p className="roboto text-center">Copyright © 2020 <span className="blue">Hibro.</span> All Rights Reserved.</p>
          </Grid>
          
        </Grid>
      </Container>
    </div>
  );
}

export default FootBottom;
