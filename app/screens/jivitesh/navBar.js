import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="static"style={{width:"100%", backgroundColor:"white",paddingTop:"1.2rem",paddingBottom:"1.2rem"}} >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <div style={{color:"blue", marginLeft:'12rem',fontWeight:"bold", font:"Franklin Gothic"}}>
            <img src="./images/Group 10168.png" style={{height:"2rem"}}  />
              NURSD</div>
          </Typography>
          
          <div style={{ marginLeft: '1rem', color:"black"}}>For nurses</div>
          <div style={{ marginLeft: '1rem', color:"black"}}>For Facilities</div>
          <div style={{ marginLeft: '1rem', color:"black" }}>covid-19</div>
          <div style={{ marginLeft: '1rem', color:"black" }}>About us</div>
          <div style={{ marginLeft: '1rem', color:"black" }}>Login</div>
          <div style={{  marginLeft: '1rem', color:"black",marginRight: "12rem" }}>Sign up</div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
