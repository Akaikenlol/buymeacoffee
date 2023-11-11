import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
	return (
		<div>
			<section className="bg-amber-300  w-full mb-10 flex justify-between items-center text-center flex-col p-5 md:p-0">
				<div className="flex justify-between items-center text-center w-full md:w-[900px]  gap-10 md:gap-96 px-5 mt-5 mb-10">
					<Link href="/">
						<Image
							src="/assets/bmc-full-logo-no-background.png"
							alt="logo"
							width={200}
							height={200}
							priority
							className="object-contain cursor-pointer"
						/>
					</Link>

					<div className="flex gap-5 md:gap-10 text-white text-sm font-semibold">
						<Link
							href="/"
							className="hover:text-neutral-200 ease-in-out duration-300"
						>
							Go Buy Me a Coffee
						</Link>
						<div className="flex justify-center items-center gap-2 hover:text-neutral-200 ease-in-out duration-300 cursor-pointer">
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

				<div className="w-full md:w-[850px] flex flex-col items-center md:items-start">
					<h1 className="text-2xl font-semibold text-white tracking-wide leading-relaxed mb-5 text-center md:text-start">
						Need assistance? Email support@buymeacoffee.com
					</h1>
				</div>
				<div className="shadow-md bg-white/25 flex px-8 py-5 gap-2 justify-start items-center text-center rounded-lg mb-10 w-full md:w-[850px] hover:shadow-xl ease-in-out duration-300 focus-within:bg-white">
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
			<section className="w-full flex flex-col justify-center items-center text-start gap-10 p-5 md:p-0">
				<div className="w-full md:w-[900px] border flex flex-col md:flex-row  gap-10 px-10 py-5 rounded-md hover:border-black ease-in-out duration-300">
					<Image
						src="/assets/lightbulb.png"
						alt="logo"
						width={50}
						height={50}
						priority
						className="object-contain cursor-pointer"
					/>
					<div className="flex flex-col gap-2 tracking-normal md:tracking-wider md:leading-relaxed">
						<p className="font-semibold">New on Buy Me a Coffee? Start here</p>
						<p className="">Everything you need to know to get started.</p>
						<div className="flex gap-5 md:gap-2 justify-center items-center text-center">
							<div className="flex -space-x-4 ">
								<Image
									src="/assets/arturopog.png"
									alt="profile"
									width={35}
									height={35}
									priority
									className="object-cover cursor-pointer rounded-full border-black"
								/>
								<Image
									src="/assets/arturo2.jpg"
									alt="profile"
									width={35}
									height={35}
									priority
									className="object-cover cursor-pointer rounded-full border-black"
								/>
								<Image
									src="/assets/ai1.jpg"
									alt="profile"
									width={35}
									height={35}
									priority
									className="object-cover cursor-pointer rounded-full border-black"
								/>
							</div>

							<p className="text-gray-400  md:text-base text-xs">
								By Virtousa and 2 others
							</p>
							<p className="font-bold text-gray-400 md:text-base text-xs">.</p>
							<p className="text-gray-400 md:text-base text-xs">10 articles</p>
						</div>
					</div>
				</div>
				<div className="w-full md:w-[900px] border flex flex-col md:flex-row gap-10 px-10 py-5 rounded-md hover:border-black ease-in-out duration-300">
					<Image
						src="/assets/arrow.png"
						alt="logo"
						width={50}
						height={50}
						priority
						className="object-contain cursor-pointer"
					/>
					<div className="flex flex-col gap-2 tracking-normal md:tracking-wider md:leading-relaxed">
						<p className="font-semibold">Growing your Supporters</p>
						<p className="">
							Read more to know what measure you can take to grow your
							supporters.
						</p>
						<div className="flex gap-5 md:gap-2 justify-start items-center text-center">
							<div className="flex -space-x-4">
								<Image
									src="/assets/arturopog.png"
									alt="profile"
									width={35}
									height={35}
									priority
									className="object-cover cursor-pointer rounded-full border-black"
								/>

								<Image
									src="/assets/ai1.jpg"
									alt="profile"
									width={35}
									height={35}
									priority
									className="object-cover cursor-pointer rounded-full border-black"
								/>
							</div>

							<p className="text-gray-400 md:text-base text-xs">
								By Virtousa and 2 others
							</p>
							<p className="font-bold text-gray-400 md:text-base text-xs">.</p>
							<p className="text-gray-400 md:text-base text-xs">4 articles</p>
						</div>
					</div>
				</div>
				<div className="w-full md:w-[900px] border flex flex-col md:flex-row gap-10 px-10 py-5 rounded-md hover:border-black ease-in-out duration-300">
					<Image
						src="/assets/connection.png"
						alt="logo"
						width={50}
						height={50}
						priority
						className="object-contain cursor-pointer"
					/>
					<div className="flex flex-col gap-2 tracking-normal md:tracking-wider md:leading-relaxed">
						<p className="font-semibold">Launching your Membership</p>
						<p className="">
							Get the complete context on what membership is and how to earn
							with memberships.
						</p>
						<div className="flex gap-5 md:gap-2 justify-start items-center text-center">
							<div className="flex -space-x-4">
								<Image
									src="/assets/arturopog.png"
									alt="profile"
									width={35}
									height={35}
									priority
									className="object-cover cursor-pointer rounded-full border-black"
								/>
								<Image
									src="/assets/arturo2.jpg"
									alt="profile"
									width={35}
									height={35}
									priority
									className="object-cover cursor-pointer rounded-full border-black"
								/>
								<Image
									src="/assets/ai1.jpg"
									alt="profile"
									width={35}
									height={35}
									priority
									className="object-cover cursor-pointer rounded-full border-black"
								/>
							</div>

							<p className="text-gray-400 md:text-base text-xs">
								By Virtousa and 2 others
							</p>
							<p className="font-bold text-gray-400 md:text-base text-xs">.</p>
							<p className="text-gray-400 md:text-base text-xs">9 articles</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-10 justify-center items-center text-center mb-20 mt-10">
					<Image
						src="/assets/bmc-full-logo-no-background.png"
						alt="logo"
						width={200}
						height={200}
						priority
						className="object-contain cursor-pointer w-auto h-auto"
					/>
					<div className="flex justify-center items-center text-center gap-5 text-gray-400 text-xs">
						<Link href="/pages/faq">FAQ</Link>
						<Link href="/">Email Support</Link>
						<Link href="/">Go back to Buy Me a Coffee</Link>
					</div>
					<div className="flex justify-center items-center gap-5 ">
						<Image
							src="/assets/facebook.png"
							alt="logo"
							width={20}
							height={20}
							priority
							className="object-contain w-auto h-auto"
						/>
						<Image
							src="/assets/twitter.png"
							alt="logo"
							width={20}
							height={20}
							priority
							className="object-contain w-auto h-auto"
						/>
						<Image
							src="/assets/linkedin.png"
							alt=""
							width={20}
							height={20}
							priority
							className="object-contain w-auto h-auto"
						/>
					</div>
					<p className="text-xs text-gray-400 cursor-pointer">
						We run on intercom
					</p>
				</div>
			</section>
		</div>
	);
};

export default Page;
