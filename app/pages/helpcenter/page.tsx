import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
	return (
		<main>
			<section className="bg-amber-300  w-full mb-10 flex justify-between items-center text-center flex-col">
				<div className="flex justify-between items-center text-center w-[900px]  gap-96 px-5 mt-5 mb-10">
					<Image
						src="/assets/bmc-full-logo-no-background.png"
						alt="logo"
						width={200}
						height={200}
						priority
						className="object-contain cursor-pointer"
					/>
					<div className="flex gap-10 text-white text-sm font-semibold">
						<Link
							href="/"
							className="hover:text-neutral-200 ease-in-out duration-300"
						>
							Go Buy Me a Coffee
						</Link>
						<div className="flex gap-2 hover:text-neutral-200 ease-in-out duration-300 cursor-pointer">
							<Image
								src="/assets/internet.png"
								alt="logo"
								width={20}
								height={20}
								priority
								className="object-contain invert"
							/>
							<p>English</p>
						</div>
					</div>
				</div>

				<div className="w-[850px] flex">
					<h1 className="text-2xl font-semibold text-white tracking-wide leading-relaxed mb-5">
						Need assistance? Email support@buymeacoffee.com
					</h1>
				</div>
				<div className="shadow-md bg-white/25 flex px-8 py-5 gap-2 justify-start items-center text-center rounded-lg mb-10 w-[850px] hover:shadow-xl ease-in-out duration-300 focus-within:bg-white">
					<Image
						src="/assets/loupe.png"
						alt="logo"
						width={25}
						height={25}
						priority
						className="object-contain cursor-pointer"
					/>
					<input
						type="text"
						placeholder="Search for articles...."
						className="bg-transparent outline-none w-full placeholder:text-black  text-black"
					/>
				</div>
			</section>
		</main>
	);
};

export default Page;
