import Image from "next/image";
import React from "react";

const Sponsor = () => {
	return (
		<section className="w-full flex justify-center flex-col items-center gap-5 mb-14 md:mb-28 mt-10 p-5 md:p-1">
			<div className="flex flex-col justify-center items-center text-center w-full md:w-[650px]">
				<h1 className="text-5xl font-bold tracking-wide leading-tight">
					Designed for creators,not for business.
				</h1>
			</div>
			<div className="flex flex-col justify-center items-center text-center gap-5 mt-5">
				<Image
					src="/assets/number-1.png"
					alt="one"
					width={50}
					height={50}
					priority
					className="object-contain"
				/>
				<p className="text-xl w-full md:w-[650px]">
					We don't call them "customer" or transactions. They are your{" "}
					<span className="font-bold">supporters</span>
				</p>
			</div>
			<div className="flex flex-col justify-center items-center text-center gap-5 mt-5">
				<Image
					src="/assets/number-2.png"
					alt="one"
					width={50}
					height={50}
					priority
					className="object-contain"
				/>
				<p className="text-xl w-full md:w-[450px]">
					You get paid instantly to your bank account.{" "}
					<span className="font-bold">No more 30-day delays.</span>
				</p>
			</div>
			<div className="flex flex-col justify-center items-center text-center gap-5 mt-5">
				<Image
					src="/assets/number-3.png"
					alt="one"
					width={50}
					height={50}
					priority
					className="object-contain"
				/>
				<p className="text-xl w-full md:w-[650px]">
					You have <span className="font-bold">100% ownership</span>
					of your supporters. We never email them, and you can export the list
					any time you like.
				</p>
			</div>
			<div className="flex flex-col justify-center items-center text-center gap-5 mt-5">
				<Image
					src="/assets/number-4.png"
					alt="one"
					width={50}
					height={50}
					priority
					className="object-contain"
				/>
				<p className="text-xl w-full md:w-[650px]">
					You get to <span className="font-bold">talk to a human</span>
					for help, or if you just like some advice to hit the ground running.
				</p>
			</div>
			<div className="flex flex-col gap-5">
				<button className="bg-yellow-300 rounded-full py-4 text-center w-full md:w-[300px]  hover:scale-105 ease-in-out duration-300  mt-5">
					<span className="font-bold">Start my page</span> - It's free
				</button>
				<p>It's free, and takes less than a minute.</p>
			</div>
		</section>
	);
};

export default Sponsor;
