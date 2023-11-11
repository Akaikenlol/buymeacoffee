import React from "react";
import Search from "./search";
import Image from "next/image";

const Aboutlanding = () => {
	return (
		<div className="bg-amber-50 w-full flex justify-center flex-col items-center">
			<section className="bg-amber-50  w-full mb-10 flex justify-center items-center text-justify flex-col">
				<Search />
				<h1 className="text-2xl md:text-5xl font-bold tracking-wide leading-tight w-[300px] md:w-[900px]">
					We believe almost everyone will work for themselves in the future—our
					mission is to empower individuals to achieve that.
				</h1>
				<div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-16 ">
					<Image
						src="/assets/amd.png"
						alt="logo"
						width={80}
						height={80}
						priority
						className="object-contain"
					/>
					<Image
						src="/assets/johnson-and-johnson.png"
						alt="logo"
						width={150}
						height={150}
						priority
						className="object-contain"
					/>
					<Image
						src="/assets/kik.png"
						alt="logo"
						width={70}
						height={70}
						priority
						className="object-contain"
					/>
					<Image
						src="/assets/slidesgo.png"
						alt="logo"
						width={150}
						height={150}
						priority
						className="object-contain"
					/>
					<Image
						src="/assets/uicons.png"
						alt="logo"
						width={150}
						height={150}
						priority
						className="object-contain"
					/>
				</div>
			</section>
			<section className="bg-white w-full flex flex-col justify-center items-center text-justify p-5 md:p-0">
				<Image
					src="/assets/about-bg.png"
					alt="bg"
					width={800}
					height={800}
					priority
					className="object-contain w-auto h-auto md:w-[50%] md:h-[50%] mt-10"
				/>
				<div className="w-full md:w-[750px] flex flex-col justify-center items-center gap-10">
					<h1 className="tracking-wide leading-loose mt-10">
						<span className="font-bold text-4xl ">W</span>
						hen we started designing Buy Me a Coffee in 2017, our goal was to
						remove all the complexities and give creators a simple way to get
						paid and connect with their fans. But simple wasn't enough. Creators
						needed a product that was meaningful and enjoyable to use. This
						meant designing a payment platform that doesn't feel
						transactional—starting with the name itself.
					</h1>
					<h1 className="tracking-wide leading-loose">
						Where did the idea come from? Our founders Jijo Sunny and Joseph
						Sunny were creators who lived on a moderate advertising income from
						their creative gigs. Although $500 per month is what you pay for a
						gym membership in San Francisco, it's enough to make a living in
						many parts of the world. If it weren't for those Adsense checks,
						there would be no Buy Me a Coffee.
					</h1>
					<h1 className="tracking-wide leading-loose ">
						That said, advertising model and algorithms have become too
						unreliable to pay creators what they're worth. It is far more
						reliable to build a direct relationship with the audience. Buy Me a
						Coffee gives fans a meaningful way to express gratitude to creators.
						Creators can also offer exclusive content and community access for
						their biggest fans.
						<div className="flex flex-col justify-start items-start">
							<span className="tracking-wide leading-loose mt-10 mb-5 flex ">
								Sip Sip hooray.
							</span>
							<Image
								src="/assets/signature.png"
								alt="signature"
								width={100}
								height={100}
								priority
								className="object-contain items-start w-auto h-auto"
							/>
						</div>
					</h1>
				</div>
				<div className="border w-full md:w-[750px] flex flex-col md:flex-row items-center md:justify-evenly mb-20 mt-10">
					<div className="flex flex-col justify-center items-center">
						<h1 className="text-gray-400 mt-5">Official payment partner</h1>
						<Image
							src="/assets/storyset.png"
							alt="logo"
							width={80}
							height={80}
							priority
							className="object-contain"
						/>
					</div>
					<div className="border md:h-[50px] flex w-full md:w-0" />
					<div className="flex flex-col">
						<h1 className="text-gray-400 mt-5">Backed by</h1>
						<Image
							src="/assets/slidesgo.png"
							alt="logo"
							width={80}
							height={80}
							priority
							className="object-contain"
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Aboutlanding;
