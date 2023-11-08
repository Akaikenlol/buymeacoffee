import Image from "next/image";
import Link from "next/link";
import React from "react";

const Search = () => {
	return (
		<main className="w-full flex flex-col items-center justify-center gap-24 mb-28">
			<div className="flex justify-between items-center shadow-sm bg-zinc-50 mt-5 w-[900px] py-2 px-4 rounded-full border border-yellow-100">
				<div className="flex gap-4">
					<Link href="/">
						<Image
							src="/assets/bmc-logo.png"
							alt="logo"
							width={40}
							height={40}
							priority
							className="object-contain rounded-full"
						/>
					</Link>

					<button className="hover:bg-neutral-200 py-2 px-5 rounded-full text-center ease-in-out duration-300">
						<Link href="/pages/faq">FAQ</Link>
					</button>
				</div>

				<div className="flex gap-2">
					<button className="hover:bg-neutral-200 py-2 px-3 rounded-full text-center ease-in-out duration-300 font-bold">
						<Link href="/pages/login">Log in</Link>
					</button>
					<button className="bg-yellow-300 rounded-full py-2 px-3 text-center hover:scale-105 ease-in-out duration-300 font-bold">
						Sign up
					</button>
				</div>
			</div>
		</main>
	);
};

export default Search;
