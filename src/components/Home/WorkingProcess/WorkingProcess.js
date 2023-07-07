import React from "react";
import { HiOutlineLightBulb ,HiOutlineDocumentText} from "react-icons/hi";
import { MdOutlineDesignServices } from "react-icons/md";
import { GoPeople } from "react-icons/go";

const WorkingProcess = () => {
	return (
		<div className="my-20">
			<h1 className="text-center text-2xl font-semibold uppercase my-7">
				Working process
			</h1>

			<div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
				<div className="card card-compact w-72 shadow-md">
					<div className=" flex justify-center items-center">
						<GoPeople className="text-8xl text-amber-500 p-3 rounded-full mt-3 bg-slate-100 hover:border-amber-600 hover:border-4" />
					</div>
					<div className="card-body flex justify-center items-center">
						<h2 className="card-title">MEET CUSTOMERS</h2>
						<p className="text-slate-400">
							Our designers will meet the customer and share about our ideas.
						</p>
					</div>
				</div>
				<div className="card card-compact w-72 shadow-md">
					<div className=" flex justify-center items-center">
						<HiOutlineLightBulb className="text-8xl text-amber-500 p-3 rounded-full mt-3 bg-slate-100 hover:border-amber-600 hover:border-4" />
					</div>
					<div className="card-body flex justify-center items-center">
						<h2 className="card-title">DISCUSS CONCEPT</h2>
						<p className="text-slate-400">
							After customer meeting, our designer will give some idea to new
							design.
						</p>
					</div>
				</div>
				<div className="card card-compact w-72 shadow-md">
					<div className=" flex justify-center items-center">
						<HiOutlineDocumentText className="text-8xl text-amber-500 p-3 rounded-full mt-3 bg-slate-100 hover:border-amber-600 hover:border-4" />
					</div>
					<div className="card-body flex justify-center items-center">
						<h2 className="card-title">CONFIRM AGREEMENT</h2>
						<p className="text-slate-400">
							With 100% customer satifsfaction our designer confirn the agree.
						</p>
					</div>
				</div>
				<div className="card card-compact w-72 shadow-md">
					<div className=" flex justify-center items-center">
						<MdOutlineDesignServices className="text-8xl text-amber-500 p-3 rounded-full mt-3 bg-slate-100 hover:border-amber-600 hover:border-4" />
					</div>
					<div className="card-body flex justify-center items-center">
						<h2 className="card-title">DESIGN & INSTALL</h2>
						<p className="text-slate-400">
							After the confirmation our designing team will design & Completed.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkingProcess;
