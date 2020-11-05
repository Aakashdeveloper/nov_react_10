import React,{Fragment} from 'react';

function Footer(props){
    return(
        <Fragment>
            <hr/>
            <center>
                <h3>&copy; NareshIT {props.year} {props.month}</h3>
            </center>
        </Fragment>
    )
}


/*const Footer =()=>{
    return(
        <div>
            <hr/>
            <center>
                <h3>&copy; NareshIT</h3>
            </center>
        </div>
    )
}*/


export default Footer;