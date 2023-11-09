import Image from "next/image";
import Search from "./components/search";
import Landing from "./components/landing";
import Buttonav from "./components/buttonav";
import Card from "./components/card";
import Intro from "./components/intro";
import Sponsor from "./components/sponsor";
import Bottomnavbar from "./components/bottomnavbar";

export default function Home() {
	return (
		<main className="w-full flex flex-col items-center justify-center p-2 md:p-5">
			<Search />
			<Landing />
			<Buttonav />
			<Card />
			<Intro />
			<Sponsor />
			<Bottomnavbar />
		</main>
	);
}
