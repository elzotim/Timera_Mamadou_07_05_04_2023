import { Link } from 'react-router-dom';



export default function Card({id, title, cover}) {

	return (
        <div className="appartement">
            <div className ="appartement-window">
		<Link to={`/accomodation/${id}`} className="gallery_card">
			<img src={cover} alt={title} />
			<p>{title}</p>	
		</Link>
        </div>
        </div>
	)
}

