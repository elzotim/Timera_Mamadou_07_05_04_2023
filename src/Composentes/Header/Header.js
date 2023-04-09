import {Component} from 'react';
import Logo from '../logo';
import Navigation from '../Navigation';

class Home extends Component {
    render(){
        return(
            <div className="home">
                <Logo />
                <Navigation />
            </div>
        )
    }
}

export default Home;