import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './App.css';

const page3 = () => {
    return (
        <div>
            {/* Main container to hold the contents of the page */}
            <Container style={{ width: "800px", marginTop: "5rem" }}>
                <form>
                    <div> <h2 className="fontt" >Hi, there!<br />Enter your Facility details</h2> </div>

                    <Grid container> 
                        <Grid item xs={6}>
                           {/* Bed count and clinical staff- event handler to be added*/}
                            <div style={{ marginTop: "3rem", marginBottom: "2rem" }}><label className="page3body">
                                Bed Count</label></div>
                            <input className="otteepee" type="number" />

                        </Grid>
                        <Grid item xs={6}>
                            <div style={{ marginTop: "3rem", marginBottom: "2rem"}}><label className="page3body">
                                Number of Clinical staff</label></div>
                            <input className="otteepee" type="number" />

                        </Grid>
                        </Grid>
                    <Grid>
                        <Grid item xs={12}>
                            {/* describe hospital type*/}
                            <div style={{ marginTop: "2rem", marginBottom: "2rem" }}><label className="page3body">
                                Health System</label></div>
                            <input className="oteepee" type="text" />

                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item xs={12}>
                            {/* Affiliation*/}
                            <div style={{ marginTop: "2rem", marginBottom: "2rem" }}><label className="page3body">
                                Facility Affiliated University</label></div>
                            <input className="oteepee" type="text" />

                        </Grid>
                    </Grid>

                    <Grid container>
                        {/* drop downs, options to be rectified*/}
                        <Grid item xs={6}>
                            <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                                <label className="page3body" >Nurse to Patient ratio: </label><br />
                                <select class="select-css">
                                    <option >1:1</option>
                                    <option >1:5</option>
                                    <option >1:10</option>
                                    <option >1:20</option>
                                </select></div>

                        </Grid>
                        <Grid item xs={6}>
                            
                            <div style={{ marginTop: "2rem", marginBottom: "2rem" ,marginLeft:"7rem"}}>
                                <label className="page3body" >Is facility a Magnet Hospital?</label><br />
                                
                                    <select class="select-css"> 
                                        <option >       Yes        </option>
                                        <option >       No          </option>
                                    </select>
                            </div>

                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item xs={12}>
                            {/*Description of clinical resources*/}
                            <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                                <label className="page3body">Clinical resource(eg. 5 MRI Machines, 12 operating Rooms,etc):</label>
                                <textarea className="textarea" rows="4" cols="120" placeholder="Enter text here">
                                </textarea></div>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item xs={12}>
                            {/*  adding images */}
                            <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                                <p className="page3body">Upload Images of your Facility <br/>
                                <AddCircleOutlineIcon className="addphotos"  style={{ fontSize: 100,color: "#5872e7" }}> icon</AddCircleOutlineIcon>
                                </p>
                                </div>
                        </Grid>
                    </Grid>
                    <div>
                        <button className="button" type="submit" style={{ float: "left" }}>Next</button>
                    </div>
                </form>
            </Container>

        </div>
    );
}
export default page3;