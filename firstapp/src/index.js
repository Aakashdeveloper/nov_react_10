import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './component/Footer';
import Header from './component/Header';

const App = () => {
    return(
        <div>
            <Header/>
            <h1>React App</h1>
            <h2>My App</h2>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))