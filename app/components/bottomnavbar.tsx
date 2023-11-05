import Image from "next/image";
import Link from "next/link";
import React from "react";

const Bottomnavbar = () => {
	return (
		<div className="flex justify-center items-center text-center gap-96 mb-10">
			<div className="flex gap-5 justify-center items-center text-center font-bold ">
				<Link
					href="/pages/about"
					className="hover:text-gray-400 ease-in-out duration-300"
				>
					About
				</Link>
				<Link
					href="/pages/helpcenter"
					className="hover:text-gray-400 ease-in-out duration-300"
				>
					Help Center
				</Link>
				<Link
					href="/pages/app"
					className="hover:text-gray-400 ease-in-out duration-300"
				>
					App
				</Link>
				<Link
					href="/resources"
					className="hover:text-gray-400 ease-in-out duration-300"
				>
					Resources
				</Link>
				<Link
					href="/pages/privacy"
					className="hover:text-gray-400 ease-in-out duration-300"
				>
					Privacy
				</Link>
				<Link
					href="/pages/terms"
					className="hover:text-gray-400 ease-in-out duration-300"
				>
					Terms
				</Link>
			</div>
			<div className="flex gap-5 justify-center items-center text-center">
				<div className="flex gap-1">
					<Image
						src="/assets/copyright.png"
						alt="logo"
						width={15}
						height={15}
						priority
						className="object-contain "
					/>
					<p>Buy Me a Coffee</p>
				</div>
				<Image
					src="/assets/youtube.png"
					alt="logo"
					width={25}
					height={25}
					priority
					className="object-contain hover:scale-125 ease-in-out duration-200"
				/>
				<Image
					src="/assets/twitter.png"
					alt="logo"
					width={25}
					height={25}
					priority
					className="object-contain hover:scale-125 ease-in-out duration-200"
				/>
			</div>
		</div>
	);
};

export default Bottomnavbar;
