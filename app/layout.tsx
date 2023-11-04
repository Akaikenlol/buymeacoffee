import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Search from "./components/search";

const inter = Inter({ subsets: ["latin"] });
const pop = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={pop.className}>{children}</body>
		</html>
	);
}
