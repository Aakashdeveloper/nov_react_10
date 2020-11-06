import React,{Component} from 'react';
import Footer from './Footer';
import Header from './Header';
import JSON from './db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON
        }
    }

    filterNews = (keyword) => {
        console.log("in home ",keyword)
    }

    render(){
        console.log(JSON)
        return(
            <React.Fragment>
                <Header userText={(userInput)=>{this.filterNews(userInput)}}/>
                <NewsDisplay newsdata={this.state.news}/>
                <Footer year="2021" month="Nov"/>
            </React.Fragment>
        )
    }
}

export default Home;