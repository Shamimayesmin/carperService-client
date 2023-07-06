import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../hook/useTitle";
import HomePageServiceCard from "./HomePageServiceCard";


const HomePageService = () => {
	const [addService, setAddService] = useState([]);

	useTitle("AddService");
	useEffect(() => {
		fetch("https://assignment-11-server-omega.vercel.app/services")
			.then((res) => res.json())
			.then((data) => setAddService(data));
	}, []);


	return (
		<div>
			<div className="text-center mt-5">
				<p className="text-lg font-semibold text-amber-400">Services</p>
				<h2 className="text-4xl font-bold">Quality wooden products</h2>
				<p className="mt-5">
					There is a number of service I provide since a many years.
					<br />
					You will get quality wooden product service.
				</p>
			</div>

			<div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
				{addService.slice(0,3).map((service) => (
					<HomePageServiceCard key={service._id}
					 service={service}
					 
					></HomePageServiceCard>
				))}
			</div>
			<div className="mb-10 flex justify-center">
				<Link to="/services" className="rounded-lg bg-gradient-to-tr from-orange-500 to-amber-300 py-3 px-6 ">
					<button className="text-white ">SEE ALL</button>
				</Link>
			</div>
		</div>
	);
};

export default  HomePageService 
	;
