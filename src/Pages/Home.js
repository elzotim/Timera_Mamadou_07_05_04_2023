import {Component} from 'react';
import Footer from '../Composentes/Footer'
import Header from '../Composentes/Header/Header';
import BackHome from '../Composentes/PourHomepage/Back-home';
import GridHomePage from '../Composentes/PourHomepage/GridHomePage'
class Home extends Component {
    render(){
        return(
            <div className="home">
                 <Header/>
                <BackHome />
                <GridHomePage/>
                <Footer />
            </div>
        )
    }
}

export default Home;