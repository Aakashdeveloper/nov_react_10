import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
import RoomFilter from '../filters/roomFilter';
import CostFilter from '../filters/costFilter';

const url = "https://developerfunnel.herokuapp.com/hotellist";

class ListingApi extends Component{
    constructor(){
        super()

        this.state={
            hotellist:''
        }
    }

    setDataAsPerFilter(soretedDate){
        this.setState({hotellist:soretedDate})
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-2">
                    <RoomFilter roomPerType={(data)=>{this.setDataAsPerFilter(data)}}/>
                    <CostFilter roomPerCost={(data)=>{this.setDataAsPerFilter(data)}}/>
                </div>
                <div className="col-md-10">
                    <ListingDisplay listData={this.state.hotellist}/>
                </div>
            </div>
        )
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        sessionStorage.setItem('tripid',id)
        axios.get(`${url}/${id}`)
        .then((response) => {this.setState({hotellist:response.data})})
    }
}

export default ListingApi;