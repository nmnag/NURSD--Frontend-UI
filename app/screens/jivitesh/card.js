import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Grid } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
const card=()=>{
    return (
        <div>
        <Card style={{width:"30rem",height:"13rem"}}>
        <Grid container>
        <Grid xs={6}>
        <CardMedia
         component="img"
         height="220"
         style={{width:"100%"}}
         image="./images/Building.JPG"
         title="Live from space album cover"
      /></Grid>
      <Grid xs={6}>
      <p style={{marginLeft:"2rem"}}>XYZ hospital</p>
      </Grid>
      </Grid>
      </Card>
      </div>
    );
};
export default card;