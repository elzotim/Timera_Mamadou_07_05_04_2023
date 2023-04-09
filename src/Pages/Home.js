import {Component} from 'react';
import Footer from '../Composentes/Footer'
import Logo from '../Composentes/logo';
import Navigation from '../Composentes/Navigation';
import BackHome from '../Composentes/PourHomepage/Back-home';
class Home extends Component {
    render(){
        return(
            <div className="home">
                <Logo />
                <Navigation />
                <BackHome />
                <Footer />
            </div>
        )
    }
}

export default Home;