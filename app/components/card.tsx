import Image from "next/image";
import React from "react";

const Card = () => {
	return (
		<div className="grid  grid-cols-1 md:grid-cols-4 mb-10 ">
			<div className="flex justify-center items-center text-center flex-col  rounded-md max-w-[300px] gap-5 p-5 cursor-pointer">
				<Image
					src="/assets/arturopog.png"
					alt="user"
					priority
					width={200}
					height={200}
					className="object-cover rounded-md hover:scale-105 ease-in-out duration-200"
				/>

				<p>
					<span className="font-bold">Viratousa</span> is creating celo tution
					videos on YouTube and other.
				</p>

				<div className="flex justify-center items-center text-center gap-5">
					<Image
						src="/assets/heart.png"
						alt="heart"
						priority
						width={25}
						height={25}
						className="object-cover"
					/>
					<span>69420 Supporters</span>
				</div>
			</div>
			<div className="flex justify-center items-center text-center flex-col  rounded-md max-w-[300px] gap-5 p-5 cursor-pointer">
				<Image
					src="/assets/arturo2.jpg"
					alt="user"
					priority
					width={200}
					height={200}
					className="object-cover rounded-md hover:scale-105 ease-in-out duration-200"
				/>

				<p>
					<span className="font-bold">Viratousa</span> is creating celo tution
					videos on YouTube and other.
				</p>

				<div className="flex justify-center items-center text-center gap-5">
					<Image
						src="/assets/heart.png"
						alt="heart"
						priority
						width={25}
						height={25}
						className="object-cover"
					/>
					<span>69420 Supporters</span>
				</div>
			</div>
			<div className="flex justify-center items-center text-center flex-col  rounded-md max-w-[300px] gap-5 p-5 cursor-pointer">
				<Image
					src="/assets/ai3.jpg"
					alt="user"
					priority
					width={200}
					height={200}
					className="object-cover rounded-md hover:scale-105 ease-in-out duration-200"
				/>

				<p>
					<span className="font-bold">Viratousa</span> is creating celo tution
					videos on YouTube and other.
				</p>

				<div className="flex justify-center items-center text-center gap-5">
					<Image
						src="/assets/heart.png"
						alt="heart"
						priority
						width={25}
						height={25}
						className="object-cover"
					/>
					<span>69420 Supporters</span>
				</div>
			</div>
			<div className="flex justify-center items-center text-center flex-col  rounded-md max-w-[300px] gap-5 p-5 cursor-pointer">
				<Image
					src="/assets/pog.png"
					alt="user"
					priority
					width={200}
					height={200}
					className="object-cover rounded-md hover:scale-105 ease-in-out duration-200 w-auto h-auto"
				/>

				<p>
					<span className="font-bold">Pog Cat</span> is a strange species, kinda
					pog.
				</p>

				<div className="flex justify-center items-center text-center gap-5">
					<Image
						src="/assets/heart.png"
						alt="heart"
						priority
						width={25}
						height={25}
						className="object-cover"
					/>
					<span>69420 Supporters</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
