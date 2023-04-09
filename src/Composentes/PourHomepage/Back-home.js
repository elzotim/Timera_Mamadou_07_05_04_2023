import {Component} from 'react';
import backHome from '../../public/media/IMG.png';

class BackgroundHome extends Component {
    render(){
        return(
            <div className="backghome">
                <div className ="img-back-home">
                    <img src={backHome} alt="Background de la page home" />
                </div>
                <div className="slogan-home">
                    <p> Chez vous, partout et ailleurs</p>
                </div>
            </div>
        )
    }
}

export default BackgroundHome;