import { Component } from 'react';
import Footer from '../Composentes/Footer';
import Header from '../Composentes/Header/Header'
import { NavLink } from "react-router-dom"
class NotFound extends Component {
    render() {
        return (
            <div className="notFound">
                <Header/>
                <div className="notFound-error">
                    <div className="container-of-notFound">
                        <h1>404</h1>
                        <p>Oups ! La page que vous demandez n'existe pas.</p>
                        <NavLink exact to="/home">Retournez sur la page d'accueil </NavLink>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default NotFound;