import React from "react";
import  './App.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
const bottom=()=>{
    return(
        <div>
            <h3 style={{textAlign:"center",marginTop:"2.5rem",fontSize:"2.5rem"}}>Welcome</h3>
            <div>
                <span style={{marginLeft:"24.3rem", marginTop:"2rem",fontSize:"1.5rem"}}> Facility</span>
                <span style={{marginLeft: "31.8rem", marginTop:"2rem",fontSize:"1.5rem"}}  >Nurse</span>
            </div>
            <div >
            
                <Grid
                 container
                 direction="row"
                 justify="center"
                 alignItems="center"
                >
                <Grid
                  sm={3}>
                    <img className="facility" src="/images/Facility.jpg"/>
                </Grid >
                <Grid  xs={3}> 
                    <div className="line"></div>
                </Grid>
                <Grid  sm={3}>
                    <img className="nurse" src="/images/nurse.jpg" />
                </Grid>
                </Grid>
            
            </div>
            <div>
                <span style={{marginLeft:"22.2rem", marginTop:"200rem",fontSize:"1.2rem"}}>Sign up as a facility</span>
                <span style={{marginLeft: "26rem", marginTop:"3rem",fontSize:"1.2rem"}}  >Sign up as a Nurse</span>
            </div>
            <div>
                <button  style={{
                    marginLeft:"23.1rem" ,
                    marginTop:"1rem",
                    paddingTop:"0.7rem",
                    paddingRight:"2.6rem",
                    paddingBottom:"0.7rem",
                    paddingLeft:"2.6rem"
                    }}>
                        Sign Up</button>
                <button 
                 style={{
                    marginLeft:"27rem" ,
                    marginTop:"1rem",
                    paddingTop:"0.7rem",
                    paddingRight:"2.6rem",
                    paddingBottom:"0.7rem",
                    paddingLeft:"2.6rem"
                    
                    }}
                >
                    Sign Up</button>
            </div>
        </div>
    );
};
export default bottom;