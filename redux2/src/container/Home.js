import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {latestNews,articleNews,galleryNews} from '../actions/actionfile';
import LatestDisplay from '../component/Home/latestDisplay';
import ArticleDisplay from '../component/Home/articleDisplay';
import GalleryDisplay from '../component/Home/galleryDisplay';

class Home extends Component{
    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
        this.props.dispatch(galleryNews())
    }

    render(){
        return(
            <div>
                <LatestDisplay ldata={this.props.datalist.latestNews}/>
                <ArticleDisplay adata={this.props.datalist.articleNews}/>
                <GalleryDisplay gdata={this.props.gallist.galleryNews}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.article,
        gallist:state.gallery
    }
}

Home.protoTypes = {
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(Home)