const firstsignup = ()=>{
    return(
            <div>
                <Container >
                    <form>
                    <div><h2>hey there!<br/> Enter your basic details </h2> </div>
                    <div>
                        <Grid container >
                        1
                        2
                        3
                        4
                        </Grid>
                        <div>
                            <h3>Select your qualification type</h3>
                            <div><label>RN</label><input type= "checkbox"/>
                                 <label>LPN</label><input type= "checkbox"/>
                                 <label>CRNA</label><input type= "checkbox"/>
                                 <label>CNM</label><input type= "checkbox"/>
                                 <label>CNS</label><input type= "checkbox"/>
                                 <label>CNA/STNA</label><input type= "checkbox"/>
                                                               </div>
                        </div>
                        <div><h3>What kind of shifts you are looking for</h3>
                            <div><label>DAY</label><input type= "checkbox"/>
                                 <label>EVENING</label><input type= "checkbox"/>
                                 <label>OVERNIGHT</label><input type= "checkbox"/>
                            </div>
                            <div><label>WEEKEND</label><input type= "checkbox"/>
                                 <label>WEEKDAY</label><input type= "checkbox"/>
                                 <label>ROTATING</label><input type= "checkbox"/>
                            </div>
                            </div>
                            <div >
                                <h2>willingness to commute</h2>
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
                                    <h3>i prefer to work in shift of</h3>
                                    <div><label>6hr</label><input type= "checkbox"/>
                                        <label>8hr</label><input type= "checkbox"/>
                                        <label>10hr</label><input type= "checkbox"/>
                                        <label>12hr</label><input type= "checkbox"/>
                                        <label>anything is prefered</label><input type= "checkbox"/>
                                        
                                                                    </div>
                                </div>
                                <div><h3>Please select your years of licensed work experience</h3>
                                    <div><label>Less than a year</label><input type= "checkbox"/>
                                        <label>1-2 years</label><input type= "checkbox"/>
                                        <label>2+ years</label><input type= "checkbox"/>
                            </div></div>
                            <div>
                                <div><input type="checkbox"/><label>i agree to NURSD term and conditionsand Privacy policy</label></div>
                            </div>
                            
                    </div>
                    </form>
                </Container>
            </div>
            
    );
};
export default firstsignup;