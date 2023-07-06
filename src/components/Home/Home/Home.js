import React from "react";
import useTitle from "../../../hook/useTitle";
import About from "../../About/About";

import Banner from "../Banner/Banner";
import HomePageService from "../HomePageService/HomePageService";

// import Other from "../Other/Other";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
	useTitle("Home");
	return (
		<div>
			<Banner></Banner>
			{/* <Other></Other> */}
			{/* <AddService></AddService> */}
			<HomePageService></HomePageService>
			<About></About>
			<WhyChooseUs></WhyChooseUs>
		</div>
	);
};

export default Home;
