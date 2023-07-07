import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const MeetATeam = () => {
	return (
		<div className="mt-20 mb-20 bg-slate-50">
			<h2 className="text-2xl font-bold uppercase">Meet our team</h2>
			<div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
				<div class="group relative block bg-black my-10 w-72 h-80">
					<img
						alt="Developer"
						src="http://demo.cottic.com/woodworks/images/joomlabuff/team/2.jpg"
						class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
					/>

					<div class="relative p-4 sm:p-6 lg:p-8">
						<div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
							<p class="text-xl font-bold text-white sm:text-2xl">
								Johny Zabrila
							</p>
							<p class="text-sm font-medium uppercase tracking-widest text-pink-500">
								Carpender
							</p>
							<div className="flex gap-4 mt-3">
								<BsFacebook className="text-xl text-amber-500" />
								<AiFillTwitterCircle className="text-2xl text-amber-500" />
								<FcGoogle className="text-xl" />
							</div>
						</div>
					</div>
				</div>
				<div class="group relative block bg-black my-10 w-72 h-80">
					<img
						alt="Developer"
						src="http://demo.cottic.com/woodworks/images/joomlabuff/team/3.jpg"
						class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
					/>

					<div class="relative p-4 sm:p-6 lg:p-8">
						<div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
							<p class="text-xl font-bold text-white sm:text-2xl">
								Vena Georgeyo
							</p>
							<p class="text-sm font-medium uppercase tracking-widest text-pink-500">
								Carpender
							</p>
							<div className="flex gap-4 mt-3">
								<BsFacebook className="text-xl text-amber-500" />
								<AiFillTwitterCircle className="text-2xl text-amber-500" />
								<FcGoogle className="text-xl" />
							</div>
						</div>
					</div>
				</div>
				<div class="group relative block bg-black my-10 w-72 h-80">
					<img
						alt="Developer"
						src="http://demo.cottic.com/woodworks/images/joomlabuff/team/1.jpg"
						class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
					/>

					<div class="relative p-4 sm:p-6 lg:p-8">
						<div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
							<p class="text-xl font-bold text-white sm:text-2xl">
								Vena Georgeyo
							</p>
							<p class="text-sm font-medium uppercase tracking-widest text-pink-500">
								Carpender
							</p>

							<div className="flex gap-4 mt-3">
								<BsFacebook className="text-xl text-amber-500" />
								<AiFillTwitterCircle className="text-2xl text-amber-500" />
								<FcGoogle className="text-xl" />
							</div>
						</div>
					</div>
				</div>
				<div class="group relative block bg-black my-10 w-72 h-80">
					<img
						alt="Developer"
						src="http://demo.cottic.com/woodworks/images/joomlabuff/team/4.jpg"
						class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
					/>

					<div class="relative p-4 sm:p-6 lg:p-8">
						<div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
							<p class="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>
							<p class="text-sm font-medium uppercase tracking-widest text-pink-500">
								Carpender
							</p>

							<div className="flex gap-4 mt-3">
								<BsFacebook className="text-xl text-amber-500" />
								<AiFillTwitterCircle className="text-2xl text-amber-500" />
								<FcGoogle className="text-xl" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className="p-5">
				<p className="text-center items-center text-2xl">
					We’re always looking for talented Carpenters, creative directors and
					anyone has a <br /> passion for the interior designing join our team.
				</p>
			</section>
		</div>
	);
};

export default MeetATeam;
