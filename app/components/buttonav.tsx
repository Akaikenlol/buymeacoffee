import React from "react";

const Buttonav = () => {
	return (
		<div className="flex flex-wrap justify-center items-center gap-3 md:gap-5">
			<button className="bg-stone-100 rounded-full py-2 px-3 text-center hover:bg-neutral-200 ease-in-out duration-300 ">
				Content Creator
			</button>
			<button className=" rounded-full py-2 px-3 text-center hover:bg-stone-200 ease-in-out duration-300 ">
				Artists
			</button>
			<button className=" rounded-full py-2 px-3 text-center hover:bg-stone-200 ease-in-out duration-300 ">
				Authors
			</button>
			<button className=" rounded-full py-2 px-3 text-center hover:bg-stone-200 ease-in-out duration-300 ">
				Musicians
			</button>
			<button className=" rounded-full py-2 px-3 text-center hover:bg-stone-200 ease-in-out duration-300 ">
				Developers
			</button>
			<button className=" rounded-full py-2 px-3 text-center hover:bg-stone-200 ease-in-out duration-300 ">
				Gaming
			</button>
			<button className=" rounded-full py-2 px-3 text-center hover:bg-stone-200 ease-in-out duration-300 ">
				Podcast
			</button>
			<button className=" rounded-full py-2 px-3 text-center hover:bg-stone-200 ease-in-out duration-300 ">
				Community
			</button>
		</div>
	);
};

export default Buttonav;
