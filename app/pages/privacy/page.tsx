import Bottomnavbar from "@/app/components/bottomnavbar";
import Privacy from "@/app/components/privacy";
import React from "react";

const Page = () => {
	return (
		<main className="w-full flex flex-col items-center justify-center">
			<Privacy />
			<Bottomnavbar />
		</main>
	);
};

export default Page;
