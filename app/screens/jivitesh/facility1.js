import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
const faci1= ()=>{
    return (
        <div>
            //putting the whole page in a container
            <Container style={{width: "60rem"}}>
            <form>    
                //creating a form
            <h2 style={{fontWeight:"bold" }}>Hi there!<br/>
                enter your faculty details</h2>
                <Grid container >
                //making 2 6 by 6  grid 3 times
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
                    <h2>Email</h2>
                    </label></div>
                    <input  className="inp" type="Text"  />
                </Grid>
                <Grid item xs={6}>
                <div> <label className="number">
                    <h2>   phone number</h2>
                    </label></div>
                    <input  className="inp"  type="number" />
                </Grid>
                <Grid item xs={6}>
                <div> <label className="name">
                    <h2>Create a Password</h2>
                    </label></div>
                    <input className="inp"  type="password" />
                </Grid>
                <Grid item xs={6}>
                <div> <label className="name">
                    <h2>Confirm a Password </h2>
                    </label></div>
                    <input  className="inp" type="password" />
                </Grid>
                </Grid>
                <div>
                    //making single inputs that fit the whole width 
                    <label className="name"><h2>Job Tittle</h2></label>
                    <input className="jt" type="text"/>
                </div>
                <div>
                    <label className="name">
                    <h2>Other questions or comments</h2></label>
                    <textarea className="com" name="comment" form="comment"></textarea>
                </div>
                </form>
                <button type="submit" style={{
                    
                    marginTop:"1rem",
                    paddingTop:"0.7rem",
                    paddingRight:"2.6rem",
                    paddingBottom:"0.7rem",
                    paddingLeft:"2.6rem",
                    
                    }}>
                        Submit</button>
                
                </Container>

        </div>
    );
};
export default faci1;