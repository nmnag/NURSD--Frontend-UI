import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
const page2 = () => {

  return (
    <div>
      <Container style={{ width: "600px" }}>
        <form>
          <h2 className="font">Set up a telephonic interview<br />whichever time you like</h2>
          <h3 className="ffont">Pick date and slot</h3>
          <div style={{ marginTop: "1.5rem" }}>
            <p className="ffont">
              A quick 20 minute interview to jumpstart your Nursing Career
      </p></div>
          <Grid className="Clndr" item xs={12}>
            <TextField
              type='date'
              name='startdate'
              id='startdate'
              //label='Start date'
              //defaultValue={any.startdate}
              variant='outlined'
              margin='normal'
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                min: new Date().toISOString().slice(0, 10),
                max: "2100-01-01"
              }}
            //required
            //fullWidth={isWidthDown("sm")}
            />
          </Grid>
          <div style={{ marginTop: "18rem" }}>
            <p className="ffont"> Still worried what your first interview with NURSD team look like?</p>

            <p className="ffont"><i className="fa-fla"class="fa fa-play-circle-o"/> Watch a demo interview</p>


          </div>
          <div>
            <button className="button" type="submit" style={{ marginLeft:"15rem" }}>Book</button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default page2;