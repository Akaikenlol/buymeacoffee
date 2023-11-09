import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
	return (
		<main className="flex flex-col gap-10">
			<div className="flex justify-between items-center px-10 py-5">
				<button>
					<Link href="/">
						<Image
							src="/assets/bmc-logo.svg"
							alt="logo"
							width={40}
							height={40}
							priority
							className="object-contain cursor-pointer"
						/>
					</Link>
				</button>

				<div className="flex gap-5 justify-center items-center">
					<p>Already have an account?</p>
					<button className="bg-yellow-300 rounded-full py-2 px-3 text-center hover:scale-105 ease-in-out duration-300 font-bold">
						<Link href="/pages/login">Login</Link>
					</button>
				</div>
			</div>
			<div className="flex justify-center items-center text-center text-2xl font-semibold">
				<h1>Welcome Back</h1>
			</div>
			<div className="flex flex-col gap-5 justify-center items-center text-center">
				<input
					type="text"
					className="bg-transparent w-[400px] border-2 border-black rounded-md p-3 outline-none placeholder:text-gray-400 focus-within:border-yellow-200 ease-in-out duration-300"
					placeholder="Email"
				/>
				<input
					type="text"
					className="bg-transparent w-[400px] border-2 border-black rounded-md p-3 outline-none placeholder:text-gray-400 focus-within:border-yellow-200 ease-in-out duration-300"
					placeholder="Password"
				/>
				<button className="bg-yellow-300 w-[400px] rounded-full py-4 px-6 text-center hover:scale-105 ease-in-out duration-300 font-semibold">
					Continue with email
				</button>
			</div>
			<div className="flex justify-center items-center text-center gap-5">
				<div className="border w-[130px]  flex " />
				<p>or signup with</p>
				<div className="border w-[130px]  flex " />
			</div>
			<div className="flex flex-col justify-center items-center text-center gap-3">
				<button className="border-2 flex gap-5 justify-center items-center  border-black w-[400px] rounded-full py-3 px-5 text-center hover:scale-105 ease-in-out duration-300 font-semibold cursor-pointer">
					<Image
						src="/assets/facebook.png"
						alt="logo"
						width={30}
						height={30}
						priority
						className="object-contain"
					/>
					<p>Continue with Meta</p>
				</button>
				<button className="border-2 flex gap-5 justify-center items-center  border-black w-[400px] rounded-full py-3 px-5 text-center hover:scale-105 ease-in-out duration-300 font-semibold cursor-pointer">
					<Image
						src="/assets/twitter.png"
						alt="logo"
						width={25}
						height={25}
						priority
						className="object-contain"
					/>
					<p>Continue with Twitter</p>
				</button>
				<button className="border-2 flex gap-5 justify-center items-center  border-black w-[400px] rounded-full py-3 px-5 text-center hover:scale-105 ease-in-out duration-300 font-semibold cursor-pointer">
					<Image
						src="/assets/google.png"
						alt="logo"
						width={25}
						height={25}
						priority
						className="object-contain"
					/>
					<p>Continue with Google</p>
				</button>
				<button className="border-2 flex gap-5 justify-center items-center  border-black w-[400px] rounded-full py-3 px-5 text-center hover:scale-105 ease-in-out duration-300 font-semibold cursor-pointer">
					<Image
						src="/assets/apple-logo.png"
						alt="logo"
						width={30}
						height={30}
						priority
						className="object-contain"
					/>
					<p>Continue with Apple</p>
				</button>
			</div>
			<div className="flex justify-center items-center text-center mb-10">
				<p className="w-[500px] text-xs tracking-wide leading-relaxed">
					By signing up, you agree to the{" "}
					<Link
						href="/pages/terms"
						className="hover:font-bold ease-in duration-300"
					>
						Terms
					</Link>{" "}
					and{" "}
					<Link
						href="/pages/privacy"
						className="hover:font-bold ease-in duration-300"
					>
						Privacy Policy
					</Link>
					. Creators or content that violate our terms will be unpublished.
				</p>
			</div>
		</main>
	);
};

export default Page;
