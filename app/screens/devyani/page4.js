import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Relax from './Relax.png';
import './App.css';
const page4 = () => {
    return (
        <div >
            {/*Main container to hold the page contents*/}
            <Container style={{ width: "800px", marginTop: "5rem" }}>
                <form>
                    <div> <h2 className="oops" style={{ color: "blue" }}>Oops! Looks like you missed<br /> your interview call</h2> </div>

                    <Grid>

                        <img className="image" style={{ marginLeft: "9rem" }} src={Relax} />
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
export default page4;