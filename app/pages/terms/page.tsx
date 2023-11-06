import Bottomnavbar from "@/app/components/bottomnavbar";
import Terms from "@/app/components/terms";
import React from "react";

const Page = () => {
	return (
		<main className="w-full flex flex-col items-center justify-center">
			<Terms />
			<Bottomnavbar />
		</main>
	);
};

export default Page;
