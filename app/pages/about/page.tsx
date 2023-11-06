import Aboutlanding from "@/app/components/aboutlanding";
import Bottomnavbar from "@/app/components/bottomnavbar";
import Search from "@/app/components/search";
import React from "react";

const Page = () => {
	return (
		<main className="w-full flex flex-col items-center justify-center">
			<Aboutlanding />
			<Bottomnavbar />
		</main>
	);
};

export default Page;
