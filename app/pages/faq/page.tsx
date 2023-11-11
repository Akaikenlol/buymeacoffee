"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "@/app/components/search";
import { useState } from "react";
import { dropdownData } from "@/app/utils/data";
import Bottomnavbar from "@/app/components/bottomnavbar";

const Page = () => {
	const [dropDownItems, setDropDownItems] = useState(dropdownData);

	const toggleDropDown = (index: any) => {
		const updateData = [...dropDownItems];
		updateData[index].isOpen = !updateData[index].isOpen;
		setDropDownItems(updateData);
	};

	const closeDropDown = (index: any) => {
		const updateData = [...dropDownItems];
		updateData[index].isOpen = false;
		setDropDownItems(updateData);
	};

	return (
		<div>
			<section className="bg-amber-50  w-full mb-10 flex justify-center items-center text-center flex-col">
				<Search />
				<div className="flex flex-col justify-center items-center text-center gap-5 mb-10">
					<h1 className="text-2xl md:text-5xl font-bold tracking-wide leading-tight">
						Frequently Asked Questions
					</h1>
					<p className=" tracking-widest leading-relaxed">
						If you can't find an answer that you are looking for, feel free to
						drop us a line.
					</p>
					<div className="flex flex-col md:flex-row gap-5 justify-center items-center">
						<Link
							href="/pages/helpcenter"
							className="border-2 border-black rounded-full py-2 px-11 md:py-2 md:px-7 hover:scale-105 ease-in-out duration-200"
						>
							Visit help center
						</Link>
						<Link
							href="/pages/helpcenter"
							className="border-2 border-black rounded-full py-2 px-11 md:py-2 md:px-7 hover:scale-105 ease-in-out duration-200"
						>
							Contact support
						</Link>
						<Link
							href="/pages/helpcenter"
							className="border-2 border-black rounded-full py-2 px-7  md:py-2 md:px-7 hover:scale-105 ease-in-out duration-200"
						>
							About the company
						</Link>
					</div>
				</div>
			</section>
			<section className="flex flex-col gap-5 mb-20 p-5 md:p-0">
				{dropDownItems.map((data, index) => (
					<>
						<div className="flex justify-center items-center" key={index}>
							<button
								type="button"
								className="inline-flex w-full md:w-[800px] justify-between gap-x-2 rounded-md bg-white px-5 py-5 font-semibold text-gray-400 shadow-sm ring-1 ring-inset ring-gray-400 hover:bg-gray-50"
								aria-expanded="true"
								aria-haspopup="true"
								onClick={() => toggleDropDown(index)}
							>
								{data.title}{" "}
								<Image
									src="/assets/down-arrow.png"
									alt="downarrow"
									width={25}
									height={25}
									priority
									className={`object-contain cursor-pointer transform ${
										data.isOpen ? "rotate-180" : ""
									} transition-transform`}
								/>
							</button>
							{data.isOpen && (
								<div
									className="absolute flex justify-center items-center p-5 md:p-0 gap-5 w-full md:w-[800px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
									role="dialog"
									aria-orientation="vertical"
									aria-labelledby="menu-button"
									tabIndex={-1}
								>
									<div
										className="py-1 flex flex-col md:flex-row justify-between items-center "
										role="none"
									>
										<p className="text-justify text-gray-400 block w-full  md:w-[750px] px-4 py-2 text-sm leading-normal tracking-normal">
											{data.content}
										</p>
										<button
											type="button"
											className="flex justify-center items-center px-5 py-5"
											onClick={() => closeDropDown(index)}
										>
											<Image
												src="/assets/up-arrows.png"
												alt="close"
												width={25}
												height={25}
												priority
												className={`object-contain cursor-pointer transform ${
													data.isOpen ? "rotate-0" : ""
												} transition-transform`}
											/>
										</button>
									</div>
								</div>
							)}
						</div>
					</>
				))}
			</section>
			<Bottomnavbar />
		</div>
	);
};

export default Page;
