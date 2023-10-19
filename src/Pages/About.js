import { Component } from 'react';

import Footer from '../Composentes/Footer';
import Logo from '../Composentes/Header/logo';
import Navigation from '../Composentes/Header/Navigation';
import AboutMainText from '../Composentes/PourAbout/About-main-text';
import BackgroundAbout from '../Composentes/PourAbout/Background-About';

class About extends Component {
    render() {
        return (
            <div className="about">
                <Logo />
                <Navigation />
                <BackgroundAbout />
                <AboutMainText />
                <Footer />
            </div>
        )
    }
}

export default About;