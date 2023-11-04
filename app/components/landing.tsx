import React from "react";

const Landing = () => {
	return (
		<main className="w-full flex flex-col items-center justify-center gap-24">
			<div className="w-[800px] flex flex-col gap-5 justify-center items-center text-center">
				<h1 className="font-bold text-5xl text-center tracking-wide leading-tight">
					A supporter is worth a thousand followers.
				</h1>
				<div className="w-[650px]">
					<p className="text-xl text-center tracking-wide leading-tight">
						Accept donations. Start a membership. Sell anything you like. It's
						easier than you think.
					</p>
				</div>
				<div className="flex justify-between items-center shadow-sm gap-1 mt-5 w-[600px] h-fit py-4 px-5  rounded-full border border-yellow-100">
					<div>
						<span className="font-bold">buymeacoffee.com/</span>
						<input
							type="text"
							className="outline-none w-auto"
							placeholder="yourname"
						/>
					</div>

					<button className="bg-yellow-300 rounded-full py-2 px-3 text-center  hover:bg-amber-200 ease-in-out duration-300 font-bold">
						Start my page
					</button>
				</div>
				<span>It's free, and take less than a minute.</span>
			</div>
		</main>
	);
};

export default Landing;
