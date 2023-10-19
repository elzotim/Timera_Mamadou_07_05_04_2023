import { Component } from 'react';
import Footer from '../Composentes/Footer'
import Logo from '../Composentes/Header/logo'
import Navigation from '../Composentes/Header/Navigation'
import BackHome from '../Composentes/PourHomepage/Back-home';
import GridHomePage from '../Composentes/PourHomepage/GridHomePage'
class Home extends Component {
    render() {
        return (
            <div className="home1">
                <Logo />
                <Navigation />
                <BackHome />
                <GridHomePage />
                <Footer />
            </div>
        )
    }
}

export default Home;