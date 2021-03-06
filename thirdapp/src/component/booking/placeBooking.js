import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'

const url = "https://developerfunnel.herokuapp.com/hotelsdetails";
const bookingUrl = ""

class PlaceOrder extends Component{
    constructor(){
        super()

        this.state={
            order_id:Math.floor(Math.random()*10000),
            hotel_name:'',
            name:'',
            phone:''
        }
    }

    async componentDidMount(){
        var hotelid = this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelid}`)
        this.setState({hotel_name:response.data[0].name})
    }

    handleChangeName=(event)=>{
        this.setState({name:event.target.value})
    }

    handleChangePhone=(event)=>{
        this.setState({phone:event.target.value})
    }

    handleSubmit=()=>{
        console.log(this.state)
        fetch(bookingUrl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/viewBooking'))
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div  className="panel-heading">
                        Place booking
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="control-label">Order Id</label>
                            <input type="text" value={this.state.order_id} readOnly className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Hotel Name</label>
                            <input type="text" value={this.state.hotel_name} readOnly className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Name</label>
                            <input type="text" value={this.state.name}  className="form-control" 
                            onChange={this.handleChangeName}/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Phone</label>
                            <input type="text" value={this.state.phone}  className="form-control"
                            onChange={this.handleChangePhone}/>
                        </div>
                        <Link to={`/details/${this.props.match.params.id}`} className="btn btn-danger">Back</Link>
                        &nbsp;
                        <button className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }

}


export default PlaceOrder