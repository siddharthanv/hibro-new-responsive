import React from "react";
import Container from "@material-ui/core/Container";
import Category from "./Category";
import catItem from "../../../categorydata";

import Grid from "@material-ui/core/Grid";



function CategoryBox(ctItem) {
  return (

      
<Grid item  class="category-card" sm={3} md={2}>
<Category 
        key={ctItem.id}
        iconName={ctItem.iconName}
        catName={ctItem.catName}
      />
</Grid>
    
  )};

  function Categories(){
    
    return(

      <Container maxWidth="lg" className="categoryBox">
      <input
        type="text"
        name="search"
        placeholder="Search for a service e.g. Plumbing"
      />



      <Grid container justify="center"
  alignItems="center"
  xs={12} spacing={1}
  className="catItem">
     {catItem.map(CategoryBox)}
      
      </Grid>
      
    
      
    
      </Container>

    )

  }

export default Categories;
