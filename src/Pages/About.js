import { Component } from 'react';

import Footer from '../Composentes/Footer';
import Header from '../Composentes/Header/Header';
import AboutMainText from '../Composentes/PourAbout/About-main-text';
import BackgroundAbout from '../Composentes/PourAbout/Background-About';

class About extends Component {
    render() {
        return (
            <>
                <div className="about">
                    <Header />
                    <BackgroundAbout />
                    <AboutMainText />
                </div>
                <Footer />
            </>
        )
    }
}

export default About;