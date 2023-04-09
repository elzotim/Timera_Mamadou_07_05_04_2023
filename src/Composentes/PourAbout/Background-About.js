import {Component} from 'react';
import backgroundAbout from '../../public/media/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg'

class BackgroundAbout extends Component {
    render(){
        return(
            <div className="backghome">
                <div className ="img-back">
                    <img src={backgroundAbout} alt="Background de la page a propos" />
                </div>
            </div>
        )
    }
}

export default BackgroundAbout;