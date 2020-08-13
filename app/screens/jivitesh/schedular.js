import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
const sched=()=>{
    return (
        <div>
            <Container style={{width: "35rem"}}>
                <h2 style={{marginTop:"4rem",fontWeight:"500rem",color:"#1082CB",}}><span className="sch">Congrulations!</span><br/>Your interview has been scheduled</h2>
                <div>
                    <img style={{width:"19rem",marginLeft:"2.5rem"}} src="./images/Capture.jpg"/>
                </div>
                <div><p style={{fontSize:"1.05rem",fontFamily:"century-gothic"}}>Please be available on<span style={{fontWeight:"bold"}}> 7th july</span> at <span style={{fontWeight:"bold"}}>10:00AM. </span><span style={{textDecoration:"underline"}} >Reschedule</span> </p></div>
                <div><p style={{marginLeft:"4.7rem",fontSize:"0.9rem"}}>You will be given access to the Dashboard<br/>once you're are done with the interview. </p></div>
            </Container>
        </div>
    );
};
export default sched;