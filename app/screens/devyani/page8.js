import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './App.css';
const page8 = () => {
    return (
        <div >
            {/*Main container to hold the page contents*/}
            <Container style={{ width: "800px", marginTop: "5rem" }}>
                <form>
                    <div> <h2 className="oops" style={{ color: "blue" }}>XYZ Facility </h2> </div>

                    <Grid container>
                        <Grid item xs={6}>
                            TextField(
                            keyboardType: TextInputType.multiline,
                            minLines: 3,
                            maxLines: null);
                         

                        </Grid>
                        <Grid item xs={6}>
                            <div style={{ marginTop: "3rem", marginBottom: "2rem" }}><label className="page3body">
                                Number of Clinical staff</label></div>
                            <input className="otteepee" type="number" />

                        </Grid>
                    </Grid>



                    <Grid>

                      
                    </Grid>
                    <Grid>
                        <button className="rbutton" type="submit" style={{ marginLeft: "18rem" }}>Reschedule</button>
                    </Grid>

                    <Grid>
                        <p className="nffoont" style={{ marginTop: "2rem" }}> You will be given access to the Dashboard<br /> once you're done with the interview</p>
                    </Grid>
                    <div>
                        <button className="rrbutton" type="submit" style={{ color: "grey", marginLeft: "17.5rem" }}><i class="fa fa-home"></i> Dashboard</button>
                    </div>
                </form>
            </Container>
        </div>
    );
}
export default page8;