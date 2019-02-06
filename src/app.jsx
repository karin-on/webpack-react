import React from 'react';
import ReactDOM from 'react-dom';

import './main.scss';
import {Header} from './components/Header/Header.jsx';
import {Image} from './components/Image/Image.jsx';
import {Footer} from './components/Footer/Footer.jsx';


class App extends React.Component {
    render() {
        return <div>
            <Header/>
            <Footer/>
        </div>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

