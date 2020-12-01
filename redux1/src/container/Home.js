import React,{Component} from 'react';
import {connect} from 'react-redux';
import {movieList} from '../actions/actionfile';
import PropTypes from 'prop-types' ;
import DisplayMovie from '../component/displayMovies'

class Home extends Component{
    componentDidMount(){
        this.props.dispatch(movieList())
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
                <DisplayMovie datalist={this.props.mydata}/>
            </div>
        )
    }

}

//help to receive state from store
function mapStateToProps(state){
    console.log(state)
    return{
        mydata:state.films
    }
}

Home.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(Home)