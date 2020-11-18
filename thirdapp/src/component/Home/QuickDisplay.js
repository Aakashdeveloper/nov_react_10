import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {
    const listTrip = ({tripdata}) =>{
        if(tripdata){
            return tripdata.map((item) => {
                return(
                    <Link to={`/list/${item.trip}`}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.image}/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.name}
                                </div>
                                <div className="componentSubHeading">
                                    Start Your {item.name} trip with Us
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }
    return(
        <React.Fragment>
            <div className="quickSearchContainer">
                <p className="quickSearchHeading">
                    Quick Search
                </p>
                <p className="quickSearchSubHeading">
                    Discover Trip With Us
                </p>
                <br/>
                {listTrip(props)}
            </div>
        </React.Fragment>
    )

}

export default QuickDisplay;