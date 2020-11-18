import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';


const url = "https://developerfunnel.herokuapp.com/hotellist";

class ListingApi extends Component{
    constructor(){
        super()

        this.state={
            hotellist:''
        }
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-2">
                    Filter here
                </div>
                <div className="col-md-10">
                    <ListingDisplay listData={this.state.hotellist}/>
                </div>
            </div>
        )
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`${url}/${id}`)
        .then((response) => {this.setState({hotellist:response.data})})
    }
}

export default ListingApi;