import React from "react";

const ExploreWork = () => {
	return (
		<>
			<section className="mt-32 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
				<div className=" w-80 group relative block bg-black">
					<img
						alt="Developer"
						src="https://stories.site/furnitureheaven/7-small-kitchen-design-ideas-for-kitchen/assets/1.png"
						className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity group-hover:opacity-25 inset-x-0 bottom-0"
					/>

					<div className="relative p-4 sm:p-6 lg:p-8">
						<div className="mt-32 sm:mt-48 lg:mt-64">
							<div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-amber-400 p-3 rounded-md inset-x-0 bottom-0">
								<h4 className="text-2xl text-white text-center">
									Wooden Cabinate
								</h4>
								<p className="text-center text-white text-lg">Furniture</p>
							</div>
						</div>
					</div>
				</div>
				<div className=" w-80 group relative block bg-black">
					<img
						alt="Developer"
						src="https://d1hy6t2xeg0mdl.cloudfront.net/image/266915/850fa6c881/standard"
						className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity group-hover:opacity-25 inset-x-0 bottom-0"
					/>

					<div className="relative p-4 sm:p-6 lg:p-8">
						<div className="mt-32 sm:mt-48 lg:mt-64">
							<div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-amber-400 p-3 rounded-md inset-x-0 bottom-0">
								<h4 className="text-2xl text-white text-center">
									Furniture Renovation
								</h4>
								<p className="text-center text-white text-lg">Renovation</p>
							</div>
						</div>
					</div>
				</div>
				<div className=" w-80 group relative block bg-black">
					<img
						alt="Developer"
						src="https://images.woodenstreet.de/image/cache/data%2Fbed-with-storage%2Fbacon-hydraulic-bed-with-storage%2Fupdated-revised%2Fhoney%2Fupdated%2F1-750x650.jpg"
						className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity group-hover:opacity-25 inset-x-0 bottom-0"
					/>

					<div className="relative p-4 sm:p-6 lg:p-8">
						<div className="mt-32 sm:mt-48 lg:mt-64">
							<div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-amber-400 p-3 rounded-md inset-x-0 bottom-0">
								<h4 className="text-2xl text-white text-center">Wooden bed</h4>
								<p className="text-center text-white text-lg">Furniture</p>
							</div>
						</div>
					</div>
				</div>
				<div className=" w-80 group relative block bg-black">
					<img
						alt="Developer"
						src="https://cdn.trendir.com/wp-content/uploads/old/interiors/interior-design-wood-3.jpg"
						className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity group-hover:opacity-25 inset-x-0 bottom-0"
					/>

					<div className="relative p-4 sm:p-6 lg:p-8">
						<div className="mt-32 sm:mt-48 lg:mt-64">
							<div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-amber-400 p-3 rounded-md inset-x-0 bottom-0">
								<h4 className="text-2xl text-white text-center">
									Menufacturing
								</h4>
								<p className="text-center text-white text-lg">Flooring Ren</p>
							</div>
						</div>
					</div>
				</div>

			
			</section>
			<section className="mb-24">
				<div className="bg-slate-50 p-14 w-full flex justify-around">
					<h2 className="text-2xl uppercase font-semibold">Do You Want to explore all our works?</h2>
                    <button className="btn outline-1 bg-gradient-to-tr from-orange-500 to-amber-300">Click Here</button>
					
				</div>
			</section>
		</>
	)
};

export default ExploreWork;
