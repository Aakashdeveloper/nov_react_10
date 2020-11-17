import React,{Component} from 'react';
import './Search.css';

const locationUrl = "https://developerfunnel.herokuapp.com/location";
const hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city="

class Search extends Component {
    //1
    constructor(){
        super()

        this.state={
            location:'',
            hotel:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    renderHotel = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.name} | {item.city_name}
                    </option>
                )
            })
        }
    }

    handleCity = (event) => {
        var data = Number(event.target.value)
        var url = `${hotelUrl}${data}`;
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({hotel:data})
        })
    }

    //2
    render(){
        console.log("state>>>>",this.state.location)
        return(
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Your Trip With Us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown"  onChange={this.handleCity}>
                        <option>----SELECT CITY-----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput">
                        <option>----SELECT CITY-----</option>
                        {this.renderHotel(this.state.hotel)}
                    </select>
                </div>
            </div>
        )
    }

    //3
    componentDidMount(){
        fetch(locationUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
        .catch((err) => console.log(err))
    }
    
}

export default Search;