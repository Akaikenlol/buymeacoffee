import Image from "next/image";
import React from "react";

const Intro = () => {
	return (
		<div className="bg-amber-50 w-full flex justify-center flex-col items-center">
			<section className=" bg-amber-50 w-full flex justify-center flex-col items-center">
				<div className="flex flex-col justify-center items-center text-center gap-5 mt-10  w-full max-w-screen-lg">
					<p className="text-gray-500 font-bold">DONATIONS</p>
					<h1 className="text-5xl font-bold tracking-wide leading-tight">
						Give your audience an easy way to say thanks.
					</h1>
				</div>
				<div className="flex flex-col justify-center items-center text-center gap-5 mt-10 w-full max-w-screen-lg p-5 md:p-1">
					<p className="text-base md:text-xl tracking-wider leading-normal w-full  md:w-[750px]">
						Buy Me a Coffee makes supporting fun and easy. In just a couple of
						taps, your fans can make the payment (buy you a coffee) and leave a
						message. They don't even have to create an account!
					</p>

					<Image
						src="/assets/onetime-support-new.png"
						alt="banner1"
						width={800}
						height={800}
						quality={100}
						priority
						className="object-contain w-auto h-auto"
					/>
				</div>
			</section>
			<section className=" bg-amber-50 w-full flex justify-center flex-col items-center mt-10">
				<div className="flex flex-col justify-center items-center text-center gap-5 mt-10 w-full max-w-screen-lg">
					<p className="text-gray-500 font-bold">MEMBERSHIP</p>
					<h1 className="text-5xl font-bold tracking-wide leading-tight">
						Monthly membership for your biggest fans.
					</h1>
				</div>
				<div className="flex flex-col justify-center items-center text-center gap-5 mt-10 w-full max-w-screen-lg p-5 md:p-1">
					<p className="text-base md:text-xl  tracking-wider leading-normal w-full md:w-[900px] p-5 md:p-1">
						Earn a recurring income by accepting monthly or yearly membership.
						Share exclusive content, or just give them a way to support your
						work on an ongoing basis.
					</p>

					<Image
						src="/assets/membership-new.png"
						alt="banner1"
						width={800}
						height={800}
						quality={100}
						priority
						className="object-contain w-auto h-auto"
					/>
				</div>
			</section>
			<section className=" bg-amber-50 w-full flex justify-center flex-col items-center mt-10 mb-14">
				<div className="flex flex-col justify-center items-center text-center gap-5 mt-10  max-w-screen-lg">
					<p className="text-gray-500 font-bold">SHOP</p>
					<h1 className="text-5xl font-bold tracking-wide leading-tight">
						Introducing Shop, the creative way to sell.
					</h1>
				</div>
				<div className="flex flex-col justify-center items-center text-center gap-5 mt-10 max-w-screen-lg p-5 md:p-1">
					<p className="text-base md:text-xl tracking-wider leading-normal w-full md:w-[900px] ">
						The things you'd like to sell probably do not belong in a Shopify
						store. Shop is designed from the ground up with creators in mind.
						Whether it's a 1-1 Zoom call, art commissions, or an ebook, Shop is
						for you.
					</p>

					<Image
						src="/assets/extras-new.png"
						alt="banner1"
						width={800}
						height={800}
						quality={100}
						priority
						className="object-contain w-auto h-auto"
					/>
				</div>
			</section>
		</div>
	);
};

export default Intro;
