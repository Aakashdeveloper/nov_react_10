import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';
import PostDetails from './PostDetails'

const Routing = () => {
     return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/post" component={Post}></Route>
            <Route path="/post/:topic" component={PostDetails}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Footer/>
        </BrowserRouter>
     )
}

export default Routing;
