import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './App.css';

const page5 = () => {
    return (

        <div >
            {/*Main container to hold contents of the page            */}
            <Container style={{ width: "800px", marginTop: "5rem" }}>
                <form>
                    <div> <h2 className="oops" style={{ color: "blue" }}>Enter OTP</h2> </div>

                    <p className="fffoont" style={{ marginTop: "2rem" ,marginLeft:"12rem"}}> Enter the verification code sent to you on your<br />registered Email address</p>
                {/* 4 input fields to enter the four digit otp  */}
                  {/* event handlers for restricting input fields to numbers to be written */}
                    <div>
                        <input style={{ marginLeft: "20rem",marginTop: "1rem" }}type="text" className="digit-group" id="digit-1" name="digit-1" data-next="digit-2" placeholder="2"  maxlength="1" returnKeyType={"next"} />
                        <input type="text" className="digit-group" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" placeholder="2"  maxlength="1"/>
                        <input type="text" className="digit-group" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" placeholder="2"  maxlength="1"/>
                        <input type="text" className="digit-group" id="digit-4" name="digit-4" data-previous="digit-3" placeholder="2"  maxlength="1"/>
                    </div>

                    
                            <div>
                                <p className="ffoont" style={{ marginTop: "2rem" ,marginLeft:"12rem"}}> Didn't recieve the code? <a href="https://google.com/">Resend</a></p>
                            </div>
                   
                    <div>
                        <button className="button" type="submit" style={{ marginTop:"3rem",marginLeft:"27rem"}}>Next</button>
                    </div>
                </form>
            </Container>

        </div>





    );
}
export default page5;
