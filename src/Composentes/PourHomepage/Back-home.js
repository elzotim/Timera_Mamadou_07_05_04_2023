import {Component} from 'react';
import backHome from '../../public/media/IMG.png';

class BackgroundHome extends Component {
    render(){
        return(
            <div className="backghome1">
                <div className ="img-back1">
                    <img src={backHome} alt="Background de la page home" />
                </div>
                <div className="slogan-home1"> 
                    <p> Chez vous, partout et ailleurs</p>
                </div>
            </div>
        )
    }
}

export default BackgroundHome;