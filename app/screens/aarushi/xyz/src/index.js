import React from 'react';
import ReactDom from 'react-dom'
import './index.css'
import Group76 from './Group 76.png';
import Bell from './bell.png'
import Group94 from './Group 9454.png'
import Facebook from './facebook 1.png'
import Linkedin from './linkedin 1.png'
import Twitter from './twitter 1.png'
import Divider from './Divider.png'
import Group from './Group 65.png'
import Calendar from './calendar 1.png';
import Clock from './clock.png';
import Group62 from './Group 62.png';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Bookmark1 from './bookmark 1.png';
import Share from './share-2 1.png'
import Frame14 from './Frame 14.png'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import logo from './logo.png';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Faci = ()=>{



    return(
            <div>
            <div>
            <AppBar style={{backgroundColor:'#FFF'}}className="topnav" position="static">
              <Toolbar>
                <img src={Group} alt="Group" className="logotop"/>
                <button style={{
                        paddingTop:"0.3rem",
                        paddingRight:"0.7rem",
                        paddingBottom:"0.3rem",
                        paddingLeft:"0.7rem"
                        }}
                        className="butt7" >
                        <span style={{fontSize:"0.9rem"}}>Find a Shift</span></button>
                <p className="shifts">
                  Shifts
                </p>
                <p  className="shifts">
                  Messages
                </p>
                <img src={Bell} alt="Bell" className="bell"/>
                <img src={Group94} alt="Group94" className="ac"/>
              </Toolbar>
            </AppBar>
          </div>
          <Container style={{width: "60rem"}}>
                    <form>

                      <div> <img src={Group76} alt="Group76" className="Groups"></img> <h1> XYZ Facility</h1><p className="one">  is looking for talented candidates like you.</p>
                      </div>

                      <Grid container>
                         <Grid item xs={6}>
                         <div>
                         <img src={logo} alt="Logo" className="logo" />
                         <figcaption> save <img src={Bookmark1} alt="Bookmark1" className="bookmark"></img> share with your tribe <img src={Share} alt="share" classname="share"></img></figcaption>
                         </div>
                         </Grid>

                        <Grid item xs={6}>
                        <div style={{marginBottom:"10rem", marginTop:"3rem"}}>
                               <button className="butt1" align="right" style={{
                                     paddingTop:"0.7rem",
                                     paddingRight:"2.6rem",
                                     paddingBottom:"0.7rem",
                                     paddingLeft:"2.6rem",

                                     }}>
                                     <span style={{fontSize:"1.5rem"}}>$41.00/hr</span></button>
                               <div style={{marginBottom:"20px"}}>
                                   <label className="add">7733 West Grand Avenue Elmwood Park, IL 60707 </label>
                               </div>
                               <div className="popo" style={{marginBottom:"20px", backgroundColor: "#f2f2f2", width:"40%"}}>
                               <img src={Calendar} alt="Calendar" className="calendar" />
                               <label className="dou"> July 15th </label>
                             </div>
                             <div className="toto" style={{backgroundColor: "#f2f2f2", width:"40%"}}>
                             <img src={Clock} alt="Clock" className="clock" />
                             <label className="time"> 7:00AM - 10:30PM </label>
                           </div>
                           <div style={{marginTop:"20px"}}>
                                   <label className="add1">Speacialisation </label>
                               </div>
                        </div>
                        </Grid>
                        <Grid item xs={6}>
                           <p className = "two">Complete these necessary steps</p>

                           <img src={Group62} alt="Group62" className="number"/>


                           <p className="three">Provide additional documents facility needed for this job</p>
                           <p> The facility you're applying for needed these document.
                               You'll be unable to submit your application without these.
                           </p>

                           <div style={{marginBottom:"3rem", marginTop:"3rem"}}>
                                <button className="butt2" style={{
                                      paddingTop:"0.7rem",
                                      paddingRight:"2.6rem",
                                      paddingBottom:"0.7rem",
                                      paddingLeft:"2.6rem"
                                      }}>
                                      <span style={{fontSize:"1.2rem"}}>Upload</span></button>
                            </div>
                            <Grid container>
                                <Grid item xs={6}>
                                     <div style={{marginBottom:"3rem", marginTop:"1rem"}}>
                                         <button className="butt3" style={{
                                              paddingTop:"0.7rem",
                                              paddingRight:"2.6rem",
                                              paddingBottom:"0.7rem",
                                              paddingLeft:"2.6rem"
                                              }}>
                                          <span style={{fontSize:"1.0rem"}}>save for later</span></button>
                                     </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{marginBottom:"3rem", marginTop:"1rem"}}>
                                         <button variant="contained" disabled className="butt4" style={{
                                              paddingTop:"0.7rem",
                                              paddingRight:"2.6rem",
                                              paddingBottom:"0.7rem",
                                              paddingLeft:"2.6rem"
                                              }}>
                                          <span style={{fontSize:"1.0rem"}}>submit the application</span></button>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>

                  </Grid>

                    </form>
                </Container>
                <div className="footer">
                  <Container style={{width: "100rem"}}>
                  <Grid container>
                   <Grid item xs={3}>
                   <img src={Group} alt="Group" className="logo7"/>
                   </Grid>
                   <Grid item xs={4}>
                    <div className="about">
                     <p className="fop"> About us </p>
                     <p className="fohe"> Simple Flexible Convenient</p>
                     <p className="text">We believe that affinity, common purpose, and trust make powerful networks. NURSD is a secure, private, vetted platform for healthcare facilities looking for high-quality talent and for nurses to explore, identify job opportunities that provide a balance between lifestyle, preferences, and flexibility.</p>
                      <Grid container>
                       <Grid item xs={1}>
                         <img src={Linkedin} alt="Linkedin" className="linkedin"/>
                       </Grid>
                       <Grid item xs={2}>
                         <img src={Facebook} alt="Facebook" className="facebook"/>
                       </Grid>
                       <Grid item xs={2}>
                         <img src={Twitter} alt="twitter" className="twitter"/>
                       </Grid>
                      </Grid>
                     </div>
                   </Grid>

                   <Grid item xs={1}>
                    <img src={Divider} alt="Divider" className="devider" />
                   </Grid>
                   <Grid item xs={3}>
                    <div>
                     <div className="bol">
                     <p className="fool"> For Nurses </p>
                     <p className="fool2"> About </p>
                     </div>
                     <div>
                     <p className="l1"> For Facilities</p>
                     <p className="l12"> Press </p>
                     </div>
                     <div>
                     <p className="l2"> How It Works </p>
                     <p className="l22"> Careers </p>
                     </div>
                     <div>
                     <p className="l3"> Blog </p>
                     <p className="l32"> Events </p>
                     </div>
                     <div>
                     <p className="l4"> FAQs </p>
                     <p className="l42"> Contact Us </p>
                     </div>
                    </div>
                   </Grid>

                   </Grid>

                  </Container>
                </div>
            </div>


    );
};
// ReactDom.render(<Faci />, document.querySelector('#root'))
export default Faci;