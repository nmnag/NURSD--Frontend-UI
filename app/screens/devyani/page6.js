import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './App.css';
function getCodeBoxElement(index) {
    return document.getElementById('codeBox' + index);
}
function onKeyUpEvent(index, event) {
    const eventCode = event.which || event.keyCode;
    if (getCodeBoxElement(index).value.length === 1) {
        if (index !== 4) {
            getCodeBoxElement(index + 1).focus();
        } else {
            getCodeBoxElement(index).blur();
            // Submit code
            console.log('submit code ');
        }
    }
    if (eventCode === 8 && index !== 1) {
        getCodeBoxElement(index - 1).focus();
    }
}
function onFocusEvent(index) {
    for (item = 1; item < index; item++) {
        const currentElement = getCodeBoxElement(item);
        if (!currentElement.value) {
            currentElement.focus();
            break;
        }
    }
}
const page6 = () => {
    return (

        <div >

            herere
            <section className ="otpclass">
                <form className ="otpclass2">
                    <input className ="otpclass3" id="codeBox1" type="number" maxlength="1" onkeyup="onKeyUpEvent(1, event)" onfocus="onFocusEvent(1)"/>
                        <input className ="otpclass3" id="codeBox2" type="number" maxlength="1" onkeyup="onKeyUpEvent(2, event)" onfocus="onFocusEvent(2)"/>
                            <input className ="otpclass3" id="codeBox3" type="number" maxlength="1" onkeyup="onKeyUpEvent(3, event)" onfocus="onFocusEvent(3)"/>
                                <input className ="otpclass3" id="codeBox4" type="number" maxlength="1" onkeyup="onKeyUpEvent(4, event)" onfocus="onFocusEvent(4)"/>
	</form>
</section>
        </div>





    );
}
export default page6;
