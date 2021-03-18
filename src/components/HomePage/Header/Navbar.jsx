import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  ttle: {
    flexGrow: 1,
  },
  
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar className="transparent" color='transparent' elevation={0} position="absolute">
        <Toolbar>
          
          <Grid container spacing={3} style={{width:"91%"}} justify="flex-end">
            
          {/* <Button color="primary">About Us</Button>
          <Button color="primary">services</Button>
          <Button color="primary">blog</Button>
          <Button color="primary">Home</Button>
          <Button color="primary">Careers</Button>
          <Button color="primary">Contact us</Button> */}
          <ButtonGroup size="small" className="navbar-text" variant="text" color="inherit" aria-label="text primary button group">
  <Button className="nav">Home</Button>
  <Button className="nav">About Us</Button>
  <Button className="nav">Blog</Button>
  <Button className="nav">Careers</Button>
  <Button className="nav">Services</Button>
  <Button className="nav">Contact Us</Button>
</ButtonGroup>
          
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;