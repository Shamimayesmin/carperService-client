import React from "react";
import useTitle from "../../../hook/useTitle";
import About from "../../About/About";

import Banner from "../Banner/Banner";
import HomePageService from "../HomePageService/HomePageService";

// import Other from "../Other/Other";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import ExploreWork from "../ExploreWork/ExploreWork";
import MeetATeam from "../MeetATeam/MeetATeam";


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
			<ExploreWork></ExploreWork>
			<MeetATeam></MeetATeam>
		</div>
	);
};

export default Home;
