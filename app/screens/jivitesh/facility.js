import React from 'react';
import { Grid } from '@material-ui/core';

const faci=()=>{
    return (
        <div>
            <Grid container>
                <Grid xs={6}>
                   <div className="gen"> <h2 style={{marginTop:"0.5rem",color:"#1082CB"}}>Great<br/>Lets start with your application
                    </h2>  
                    <label style={{}}><h2 style={{marginTop:"0.5rem"}}>Enter zip code of your medical facility</h2></label></div>
                   <div> <input  className="in" type="number"/></div>
                </Grid>
                <Grid xs={6}>
                        <img className="imgbasic" src="./images/Building.JPG"/>
                </Grid>
            </Grid>
        </div>
    );
};
export default faci;