import React from "react";
import { GiHouse,GiTrophyCup } from 'react-icons/gi';
import { PiBrain } from 'react-icons/pi';
import { VscTools } from 'react-icons/vsc';
import { BsChatSquareText,BsClockHistory } from 'react-icons/bs';

const WhyChooseUs = () => {
	return (
		<div>
			<>
				<h2 className="text-center text-amber-400 font-semibold text-lg">
					Welcome
				</h2>
				<h3 className="text-center text-4xl font-sans font-bold">
					WHY CHOOSE US ?
				</h3>
			</>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-10">
				<div className="w-96 flex gap-2">
					<div>
                        <span>
                            <GiHouse className="text-6xl hover:bg-amber-300 p-3 text-amber-500 hover:text-white rounded-md"/>
                        </span>
                    </div>
					<div>
						<h2 className="text-lg font-bold font-sans">5 YEARS OF EXPERINCE</h2>
						<p>
							We have 25 years of woodcraft experience right to your
							residential,office,restaurants hospital and etc...
						</p>
					</div>
				</div>
				<div className="w-96 flex gap-2">
					<div>
                        <span>
                            <PiBrain className="text-6xl hover:bg-amber-300 p-3 text-amber-500 hover:text-white rounded-md"/>
                        </span>
                    </div>
					<div>
						<h2 className="text-lg font-bold font-sans">CREATIVE DESIGNERS</h2>
						<p>
                        Our designing team designs with your taste, space, and budget, Also our team will guide you to choose better.
						</p>
					</div>
				</div>
				<div className="w-96 flex gap-2">
					<div>
                        <span>
                            <VscTools className="text-6xl hover:bg-amber-300 p-3 text-amber-500 hover:text-white rounded-md"/>
                        </span>
                    </div>
					<div>
						<h2 className="text-lg font-bold font-sans">QUALITY PRODUCTS</h2>
						<p>
                        We provide high quality products only to our customers, our prodcuts are certified with WI organization usa.
						</p>
					</div>
				</div>
				
			</div>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-10">
				<div className="w-96 flex gap-2">
					<div>
                        <span>
                            <GiTrophyCup className="text-6xl hover:bg-amber-300 p-3 text-amber-500 hover:text-white rounded-md"/>
                        </span>
                    </div>
					<div>
						<h2 className="text-lg font-bold font-sans">AWARDS WINNING TEAM</h2>
						<p>
                        In 1984 we have won the best resedential carpenter awrard from worlds carpernter organization in usa.
						</p>
					</div>
				</div>
				<div className="w-96 flex gap-2">
					<div>
                        <span>
                            <BsChatSquareText className="text-6xl hover:bg-amber-300 p-3 text-amber-500 hover:text-white rounded-md"/>
                        </span>
                    </div>
					<div>
						<h2 className="text-lg font-bold font-sans">FREE CONSULTATION</h2>
						<p>
                        We provide free consultation about designs, quality, space, budget and etc you can get it all of them free of cost.
						</p>
					</div>
				</div>
				<div className="w-96 flex gap-2">
					<div>
                        <span>
                            <BsClockHistory className="text-6xl hover:bg-amber-300 p-3 text-amber-500 hover:text-white rounded-md"/>
                        </span>
                    </div>
					<div>
						<h2 className="text-lg font-bold font-sans">24/7 CUSTOMER SUPPORT</h2>
						<p>
                        Whenever & wherever you need our support you can contact ourcustomer support team by 24/7, they will guide you.
						</p>
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default WhyChooseUs;
