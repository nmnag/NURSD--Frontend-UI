import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';

const bottom = ()=>{
    return(
        <div>
            
            <Grid
            className="grid"
           xs={12}
            container
            direction="row"
            
            >
                <Grid xs={6 } className="grid">
                    <div className="grid"
                    style={{

                        color:"#1082CB",
                        marginLeft:"15rem",
                        fontSize:"1.7rem"
                    
                    }}
                    >Great,<br/> Lets's start with your application
                    
                   </div>
                   <div>
                   <br/>
                    <br/>
                    <form> 
                        <label className="email" >
                            <span className="ont"  >Email</span>
                            <br/>
                        </label>
                        <input className="in"  type="text" name="email"/>
                        <br/>
                        <br/>
                        <br/>
                        <label className="email">
                            <span className="ont" >Create a Password</span>
                            <br/>
                        </label>
                        <input className="in" type="password" name="email"/>
                        <br/>
                        <br/>
                        <br/>
                        <label className="email">
                            <span className="ont" >Confirm the Password</span>
                            <br/>
                        </label>
                        <input className="in" type="password" name="email"/>
                        <br/>
                        <br/>
                        <br/>
                        <input className="sub" type="submit" value="Create an Account" />
                    </form>
                    </div>
                         
                </Grid>
                <Grid xs={6} className="grid">
                    <img src="./images/Desktop - 19.jpg"
                    style={{height: "100%",
                    width:"100%"
                    }}/>
                </Grid>

            </Grid>
        </div>
    );
};
export default bottom;