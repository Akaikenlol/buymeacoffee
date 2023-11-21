import React from "react";
import Search from "./search";
import Link from "next/link";

const paragraph = [
	{
		id: 1,
		title: "Privacy Policy",
		paragraph_1:
			"Buy Me a Coffee is a platform for creators to accept support from their audience and share exclusive content. At Buy Me a Coffee, your privacy is important to us, and we want you to feel confident that your personal information is secure when using our products and our platform.",
		paragraph_2:
			"The services are provided by Publisherr Inc (parent company and hereinafter referred to as “Buy Me a Coffee”), a Delaware company with registered address at 2035 Sunset Lake Road, Suite B-2 Newark, DE 19702, USA. It is Buy Me a Coffee's policy to respect your privacy regarding any information we may collect while operating our website.",
	},
	{
		id: 2,
		title: "Website Visitor",
		paragraph_1:
			"Like most website operators, Buy Me a Coffee collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Buy Me a Coffee's purpose in collecting non-personally identifying information is to better understand how Buy Me a Coffee's visitors use its website. From time to time, Buy Me a Coffee may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.",
		paragraph_2:
			"Buy Me a Coffee also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users making payments on BuyMeACoffee.com. Buy Me a Coffee only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below, except that payee IP addresses and email addresses are visible and disclosed to the administrators of Buy Me a Coffee and is handled by payment processors at the time of processing the payments.",
	},
	{
		id: 3,
		title: "Payment",
		paragraph_1:
			"	To make a payment to a creator on Buy Me a Coffee, you have to provide our payment processor (Stripe) with your payment information. They provide us with a token that represents your account, your card’s expiration date, card type and the last four digits of your credit card. If you provide them with a name and email address then they also provide us with that information.",
		paragraph_2:
			"We collect and process information about the creators you support, the level at which you support them, what rewards you receive and how often you support them.",
	},
	{
		id: 4,
		title: "International Users",
		paragraph_1:
			"Buy Me a Coffee is based in the United States. If you are accessing our Services from the European Union or other regions with laws governing data collection and use, please note that your Personal Data will be transmitted to our servers in the United States and the data may be transmitted to our service providers supporting our business operations (described above). The United States may have data protection laws less stringent than or otherwise different from the laws in effect in the country in which you are located. Where we transfer your Personal Data out of the EU we will take steps to ensure that your Personal Data receives an adequate level of protection where it is processed and your rights continue to be protected (GDPR).",
		paragraph_2:
			"	By providing your information to the Services you agree to the transfer of your information to the United States and processing globally in accordance with this Privacy Policy.",
	},
	{
		id: 5,
		title: "Contact Us",
		paragraph_1:
			"Please feel free to contact us if you have any questions about Buy Me a Coffee’s Privacy Policy or the information practices.",
		paragraph_2:
			"You may contact us as follows: You may send an email to support@buymeacoffee.com, or send mail to.",
	},

	{
		id: 6,
		title: "Privacy Policy Changes",
		paragraph_1:
			"Although most changes are likely to be minor, Buy Me a Coffee may change its Privacy Policy from time to time, and in Buy Me a Coffee's sole discretion . Buy Me a Coffee encourages visitors to frequently check this page for any changes to its Privacy Policy. If you have a BuyMeACoffee.com account, you might also receive an alert informing you of these changes. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change. ",
	},
];

const Privacy = () => {
	return (
		<>
			<div className="bg-amber-50 w-full flex justify-center flex-col items-center">
				<section className="bg-amber-50  w-full mb-10 flex justify-center items-center text-center flex-col">
					<Search />
					{/* <h1 className="md:text-5xl text-2xl font-bold tracking-wide leading-tight">
						Privacy Policy
					</h1> */}
				</section>
			</div>

			{paragraph.map((item) => (
				<section
					className="bg-white w-full flex flex-col justify-center items-center text-justify"
					key={item.id}
				>
					<div
						className="md:w-[750px] w-full md:p-0 p-5 flex flex-col justify-center items-center gap-10 mt-10 mb-10"
						key={item.id}
					>
						<h1 className="font-bold md:text-5xl text-2xl" key={item.id}>
							{item.title}
						</h1>
						<h1 className="tracking-wide leading-loose" key={item.id}>
							{item.paragraph_1}
						</h1>
						<h1 className="tracking-wide leading-loose mb-5" key={item.id}>
							{item.paragraph_2}
						</h1>
					</div>
				</section>
			))}
		</>
	);
};

export default Privacy;
