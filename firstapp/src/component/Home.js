import React,{Component} from 'react';
import Footer from './Footer';
import Header from './Header';

class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <Header/>
                <h1>React App</h1>
                <h2>My App</h2>
                <Footer year="2021" month="Nov"/>
            </React.Fragment>
        )
    }
}

export default Home;