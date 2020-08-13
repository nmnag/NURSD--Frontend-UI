import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Checkbox } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';

const marks = [
    {
      value: 0,
      label: '0miles',
    },
    {
        value: 50,
        label: '50 miles+',
      },
      
   
  ];
  function valuetext(value) {
    return `${value}miles`;
  }  
 //const handleKeyPress= ()=>{
      //if(event.charCode>=48&&event.charCode<=57){
       //   return event.key;
     // }
     // else{
     //     return error;
   //   }
 // }

const firstsignup = ()=>{
    return(
            <div>
                <Container style={{width: "60rem"}}>
                    <form>
                    <div><h2 style={{fontWeight:"bold" }}>Hi there!<br/> Enter your basic details </h2> </div>
                    <div>
                        <Grid container >
                        <Grid item xs={6}>
                           <div> <label className="name">
                               <h2> First name</h2>
                            </label></div>
                            <input className="inp"  type="text" />
                        </Grid>
                        <Grid item xs={6}>
                        <div> <label className="name">
                               <h2> last name</h2>
                            </label></div>
                            <input  className="inp" type="text" />
                        </Grid>
                        <Grid item xs={6}>
                           <div> <label className="zipcode">
                               <h2> zipcode</h2>
                            </label></div>
                            <input placeholder="XXXXX" className="inp" type="number"  />
                        </Grid>
                        <Grid item xs={6}>
                        <div> <label className="number">
                             <h2>   phone number</h2>
                            </label></div>
                            <input placeholder="XXX-XXX-XXXXX" className="inp"  type="number" />
                        </Grid>
                        </Grid>
                        <div style={{marginTop:"6.5rem"}}>
                            <h2 >Select your qualification type</h2>
                            <div><Checkbox  className="box" /><label className="checkBox">RN</label>     
                                 <Checkbox style={{marginLeft:"4.5rem"}} className="box" /><label className="checkBox">LPN</label>    
                                 <Checkbox style={{marginLeft:"4.5rem"}} className="box" /><label  className="checkBox">CRNA</label>   
                                 <Checkbox style={{marginLeft:"4.5rem"}} className="box" /><label  className="checkBox">CNM</label>    
                                 <Checkbox style={{marginLeft:"4.5rem"}} className="box" /><label  className="checkBox">CNS</label>    
                                 <Checkbox style={{marginLeft:"4.5rem"}} className="box" /><label className="checkBox">CNA/STNA</label>
                                                               </div>
                        </div>
                        <div style={{marginTop:"3.5rem"}}><h2>What kind of shifts you are looking for</h2>
                            <div><Checkbox className="box" /><label>DAY</label>      
                                 <Checkbox style={{marginLeft:"4.5rem"}} className="box" /><label className="checkBox">EVENING</label>  
                                 <Checkbox style={{marginLeft:"4.5rem"}} className="box" /><label className="checkBox">OVERNIGHT</label>
                            </div>
                            <div style={{marginTop:"2rem"}}>
                                 <Checkbox className="box" /><label className="checkBox">WEEKEND</label>
                                 <Checkbox style={{marginLeft:"4.5rem"}} className="box" /><label className="checkBox">WEEKDAY</label>
                                 <Checkbox style={{marginLeft:"4.5rem"}} className="box" /><label className="checkBox">ROTATING</label>
                            </div>
                            </div>
                            <div >
                                <h2 style={{marginTop:"3.5rem"}}>willingness to commute</h2>
                                <Slider
                                    
                                    defaultValue={0}
                                    getAriaValueText={valuetext}
                                    aria-labelledby="discrete-slider-custom"
                                    step={5}
                                    min={0}
                                    max={50}
                                    
                                    valueLabelDisplay="auto"
                                    marks={marks}
                                />
                                </div>
                                <div>
                                    <h2 style={{marginTop:"4rem"}}>I prefer to work in shift of</h2>
                                    <div> <Checkbox className="box" /> <label className="checkBox">6hr</label>
                                          <Checkbox style={{marginLeft:"4.5rem"}} className="box" /> <label className="checkBox" >8hr</label >
                                          <Checkbox style={{marginLeft:"4.5rem"}} className="box" /> <label className="checkBox" >10hr</label >
                                          <Checkbox style={{marginLeft:"4.5rem"}} className="box" /> <label className="checkBox" >12hr</label >
                                          <Checkbox style={{marginLeft:"4.5rem"}} className="box" /> <label className="checkBox">anything is prefered</label>
                                         
                                                                    </div>
                                </div>
                                <div style={{marginTop:"3.5rem"}}><h2>Please select your years of licensed work experience</h2>
                                    <div><Checkbox  className="box" /> <label className="checkBox">Less than a year</label> 
                                         <Checkbox style={{marginLeft:"4.5rem"}} className="box" />< label className="checkBox">1-2 years</label>         
                                         <Checkbox style={{marginLeft:"4.5rem"}} className="box" />< label className="checkBox">2+ years</label>          
                            </div></div> 
                            <div style={{marginTop:"3rem"}}>
                                <div><Checkbox className="box" /><label className="checkBox">I agree to NURSD term and conditions and Privacy policy</label></div>
                            </div> 
                            <div style={{marginTop:"6rem"}}>
                                <Grid  container>
                                    <Grid xs={6}><button style={{height:"2.4rem",width:"8.3rem"}}><span style={{fontSize:"1.1rem"}}>save</span></button></Grid>
                                    <Grid xs={6}><button style={{height:"2.4rem",width:"8.3rem",float:"right"}} ><span style={{fontSize:"1.1rem"}}>next</span></button></Grid>
                                </Grid>
                            </div>
                    </div>
                    </form>
                </Container>
            </div>
            
    );
};
export default firstsignup;