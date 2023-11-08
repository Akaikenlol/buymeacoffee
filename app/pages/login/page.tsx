import Image from "next/image";
import React from "react";

const Page = () => {
	return (
		<div>
			<div className="flex justify-between items-center px-10 py-5">
				<Image
					src="/assets/bmc-logo.svg"
					alt="logo"
					width={40}
					height={40}
					priority
					className="object-contain cursor-pointer"
				/>
				<div className="flex gap-5 justify-center items-center">
					<p>Don't have an account?</p>
					<button className="bg-yellow-300 rounded-full py-2 px-3 text-center hover:scale-105 ease-in-out duration-300 font-bold">
						Sign Up
					</button>
				</div>
			</div>
		</div>
	);
};

export default Page;
