import React,{Component} from 'react';
import Footer from './Footer';
import Header from './Header';
import JSON from './db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    filterNews = (keyword) => {
        console.log("in home ",keyword)
        const output = this.state.news.filter((data)=>{
            return data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })
        this.setState({filtered:output})
    }

    render(){
        console.log(JSON)
        return(
            <React.Fragment>
                <Header userText={(userInput)=>{this.filterNews(userInput)}}/>
                <NewsDisplay newsdata={this.state.filtered}/>
                <Footer year="2021" month="Nov"/>
            </React.Fragment>
        )
    }
}

export default Home;