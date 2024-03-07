/*import {Button} from 'react-bootstrap';
import React from 'react';
function MyButton() {
    return (
        <Button varaint="primary">
            Click me 
        </Button>
    )
}
export default MyButton; */

function Button(props) {
    return (
        <button onClick={props.eventHandler} className= "btn btn-primary" disabled={props.disable}> {props.children}
        </button>
    )
}
export default Button;









