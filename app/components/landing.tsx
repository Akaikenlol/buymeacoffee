import React from "react";

const Landing = () => {
	return (
		<main className="w-full flex flex-col items-center justify-center gap-24 mb-36">
			<div className="max-w-screen-xl w-full md:w-[800px] flex flex-col gap-5 justify-center items-center text-center">
				<h1 className="font-bold text-3xl md:text-5xl text-center tracking-wide leading-tight">
					A supporter is worth a thousand followers.
				</h1>
				<div className="w-full  md:w-[650px]">
					<p className="text-lg md:text-xl text-center tracking-wide leading-tight">
						Accept donations. Start a membership. Sell anything you like. It's
						easier than you think.
					</p>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center shadow-sm gap-1 mt-5 w-full md:w-[600px] h-fit py-4 px-5 rounded-lg md:rounded-full border md:border border-yellow-100">
					<div className="flex flex-col md:flex-row justify-center items-center">
						<span className="font-semibold">buymeacoffee.com/</span>
						<input
							type="text"
							className="outline-none w-full md:w-fit bg-amber-100 md:bg-transparent mt-2 md:mt-0 rounded-full px-5 py-2 md:p-0"
							placeholder="yourname"
						/>
					</div>

					<button className="bg-yellow-300 rounded-full py-2 px-3 text-center hover:scale-105 ease-in-out duration-300 font-bold  mt-2 md:mt-0 ">
						Start my page
					</button>
				</div>
				<span>It's free, and take less than a minute.</span>
			</div>
		</main>
	);
};

export default Landing;
