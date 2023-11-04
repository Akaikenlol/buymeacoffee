import Image from "next/image";
import React from "react";

const Membership = () => {
	return (
		<section className=" bg-amber-50 w-full flex justify-center flex-col items-center">
			<div className="flex flex-col justify-center items-center text-center gap-5 mt-10  w-[700px]">
				<p className="text-gray-500 font-bold">MEMBERSHIP</p>
				<h1 className="text-5xl font-bold tracking-wide leading-tight">
					Monthly membership for your biggest fans.
				</h1>
			</div>
			<div className="flex flex-col justify-center items-center text-center gap-5 mt-10">
				<p className="text-xl tracking-wider leading-normal w-[750px] ">
					Earn a recurring income by accepting monthly or yearly membership.
					Share exclusive content, or just give them a way to support your work
					on an ongoing basis.
				</p>

				<Image
					src="/assets/membership-new.png"
					alt="banner1"
					width={800}
					height={800}
					quality={100}
					priority
					className="object-contain"
				/>
			</div>
		</section>
	);
};

export default Membership;
