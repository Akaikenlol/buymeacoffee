import Image from "next/image";
import React from "react";

const Search = () => {
	return (
		<main className="w-full flex flex-col items-center justify-center gap-24">
			<div className="flex justify-between items-center shadow-sm bg-zinc-50 mt-5 w-[900px] py-2 px-4 rounded-full border border-yellow-100">
				<div className="flex gap-4">
					<Image
						src="/assets/bmc-logo.png"
						alt="logo"
						width={40}
						height={40}
						priority
						className="object-contain rounded-full"
					/>
					<button className="hover:bg-neutral-200 py-2 px-5 rounded-full text-center ease-in-out duration-300">
						FAQ
					</button>
				</div>

				<div className="flex gap-2">
					<button className="hover:bg-neutral-200 py-2 px-3 rounded-full text-center ease-in-out duration-300 font-bold">
						Log in
					</button>
					<button className="bg-yellow-300 rounded-full py-2 px-3 text-center hover:bg-amber-200 ease-in-out duration-300 font-bold">
						Sign up
					</button>
				</div>
			</div>
			<div className="w-[800px] flex flex-col gap-5 justify-center items-center text-center">
				<h1 className="font-bold text-6xl text-center tracking-wide leading-tight">
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

export default Search;
