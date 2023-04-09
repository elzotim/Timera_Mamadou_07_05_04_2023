import {Component} from 'react';
import Card from './Card';
import datas from '../data/data'
class GridHomePage extends Component {
    
    
  
           
      
    render() {
      
        
        return (
            <main className='logements'>
                <div className ="logement-list">
               {datas.map(data => {
                   return (
                       <Card
                           key={data.id}
                           id={data.id}
                           title={data.title}
                           cover={data.cover}
                       />
                   )
               })}
               </div>
           </main>
          );
        }
    }



export default GridHomePage;
