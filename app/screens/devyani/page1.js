import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './App.css';
function isNumber(evt) {
	var iKeyCode = (evt.which) ? evt.which : evt.keyCode
	if (iKeyCode < 48 || iKeyCode > 57)
		return false;

	return true;
}
const page1 = () => {
	return (
		<div >
			<Container style={{ width: "800px", marginTop: "5rem" }}>
				<form>
					<div> <h2 className="fontt" >Confirm your phone number</h2> </div>

					<Grid>
						<Grid item xs={12}>
							<div style={{ marginTop: "3rem", marginBottom: "2rem" }}><label className="fffont">
								Enter the code you recieved via SMS</label></div>
							<input className="oteepee" type="text" value=""
								onkeypress="javascript:return isNumber(event)"
								/*onKeyPress={(event) => {
									if (event.charCode >= 48 && event.charCode <= 57 ) {
										return true;
									} else {
										return false;
									}
								}}*/
								placeholder="XXXXXX" />


						</Grid>
					</Grid>
					<Grid>
						<Grid item xs={12}>
							<div><p className="fffontt">A code has been sent to the phone you entered via SMS</p>
								<p className="fffontt"><a href="https://google.com/">Edit</a></p></div>
						</Grid>
					</Grid>
					<div>
						<button className="button" type="submit" style={{ float: "right" }}>Confirm</button>
					</div>
				</form>
			</Container>

		</div>
	);
}
export default page1;