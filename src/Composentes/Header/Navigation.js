import {Component} from 'react';
import { NavLink } from "react-router-dom"

class Navigation extends Component {
    render(){
        return(
            <div className="navigation">
                <NavLink  style={({ isActive }) => ({ textdecoration: isActive ? 'underline' : 'none' })} to ="/home" >
                    Accueil
                </NavLink>
                <NavLink   to ="/a-propos" >
                    A propos
                </NavLink>
            </div>
        )
    }
}

export default Navigation;