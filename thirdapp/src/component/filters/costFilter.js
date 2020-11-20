import React,{Component} from 'react';
import axios from 'axios';

const rurl= "https://developerfunnel.herokuapp.com/hotellist"

class CostFilter extends Component{
    filterCost = (event) => {
        let costall = (event.target.value).split(',');
        let lcost = Number(costall[0])
        let hcost = Number(costall[1])
        let tripId = sessionStorage.getItem('tripid');
        let newurl;
        if(costall == ""){
            newurl = `${rurl}/${tripId}`
        }else{
            newurl = `${rurl}/${tripId}?hcost=${hcost}&lcost=${lcost}`
        }

        axios.get(newurl)
        .then((response) => {this.props.roomPerCost(response.data)})

    }
    render(){
        return(
            <React.Fragment>
                <center>Room Type</center>
                <div onChange={this.filterCost}>
                    <label className="radio">
                        <input type="radio" value="" name="room"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1000,3000" name="room"/>1000 - 3000
                    </label>
                    <label className="radio">
                        <input type="radio" value="3001,6000" name="room"/>3001 - 6000
                    </label>
                    <label className="radio">
                        <input type="radio" value="6001,9000" name="room"/>6001 - 9000
                    </label>
                    <label className="radio">
                        <input type="radio" value="9001-20000" name="room"/>9001 - 20000
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default CostFilter;