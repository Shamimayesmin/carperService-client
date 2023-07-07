import React from 'react';
import { Link } from 'react-router-dom';
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const HomePageServiceCard = ({service}) => {
    const { photo, price, title, _id, message} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-12">
			<figure>
				

			<PhotoProvider>
					<PhotoView src={ photo}>
						<img className="p-6 rounded-lg" src={ photo} alt="" />
					</PhotoView>
				</PhotoProvider>
				
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p className="">{message?message.slice(0, 100) + "...":''}</p>
				<p className="text-2xl text-orange-600 font-semibold">
					Price : ${price}
				</p>
				<p className="text-lg text-orange-400">Rating : {4.5}</p>
				<div className="card-actions justify-end">
					
					<Link to={`/details/${_id}`}>
						<button className="btn bg-amber-600">View details</button>
					</Link>
					
				</div>
			</div>
		</div>
    );
};

export default HomePageServiceCard;