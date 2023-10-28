import { useEffect, useState } from "react"
import { useParams,  Navigate } from "react-router-dom";
import datas from '../data/data'
import Slider from "./Carrousel"
import Collapse from './collapse';
import greyStar from '../../public/media/redStar.png'
import redStar from '../../public/media/redStar.png';
// import withRouter from './withRouter';

export default function Accomodation() {
	const [imageSlider, setImageSlider] = useState([]);
	const idAccomodation    		= useParams();
	const dataCurrentAccomodation 	= datas.filter(data => data.id === idAccomodation.id);
	let name 		= "";
	let rating 		= "";
	let description = "";
	let equipments 	= "";

	if(dataCurrentAccomodation.length > 0){
		name 			= dataCurrentAccomodation[0].host.name.split(' '); 
		rating 		= dataCurrentAccomodation[0].rating;
		description  	= dataCurrentAccomodation[0].description;
		equipments 	= dataCurrentAccomodation[0].equipments;
	}
	useEffect(() => {
		setImageSlider((dataCurrentAccomodation.length > 0) ? dataCurrentAccomodation[0].pictures : []);
	}, [dataCurrentAccomodation]);

	if (dataCurrentAccomodation.length === 0){
		return <Navigate to="/404" replace />
	}else{
		return (
			<div >
				<Slider imageSlider={imageSlider}/>
				<main className="accomodation">
					<div className="accomodation_content">
						<div className="accomodation_content_infos">
							<h1>{dataCurrentAccomodation[0].title}</h1>
							<p>{dataCurrentAccomodation[0].location}</p>
							<div className ="accomodation_content_infos_tags-logement">
								{dataCurrentAccomodation[0].tags.map((tag, index) => {
									return (
										<button className="tags"  key={index}>{tag}</button>
									)
								})}
							</div>
						</div>
						<div className="accomodation_content_host">
							<div className="accomodation_content_host_0">
								<div className='accomodation_content_host_name'>
									<p className="name">{name[0]}     { name[1]}</p>
								</div>
								<img src={dataCurrentAccomodation[0].host.picture} alt="host accomodation" />
							</div>
								
							<div className="accomodation_content_host_stars">
								{[...Array(5)].map((star, index) => {
									const ratingValue = index + 1;
									return (
										<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
									)
								})}
							</div>
						</div>
					</div>
					<div className="accomodation_collapse">
						<div className="accomodation_collapse_item">
							<Collapse title={'Description'} content={description} />	
						</div>
						<div className="accomodation_collapse_item">
							<Collapse title={'Équipements'} content={equipments}/>
						</div>	
					</div>
				</main>
				
			</div>
		)
	}

}

