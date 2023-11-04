import Image from "next/image";
import Search from "./components/search";
import Landing from "./components/landing";
import Buttonav from "./components/buttonav";
import Card from "./components/card";
import Intro from "./components/intro";
import Membership from "./components/membership";

export default function Home() {
	return (
		<main className="w-full flex flex-col items-center justify-center gap-20">
			<Search />
			<Landing />
			<Buttonav />
			<Card />
			<Intro />
			{/* <Membership /> */}
		</main>
	);
}
