import React from "react";
import Search from "./search";

const Terms = () => {
	return (
		<div className="bg-amber-50 w-full flex justify-center flex-col items-center">
			<section className="bg-amber-50  w-full mb-10 flex justify-center items-center text-center flex-col">
				<Search />
				<h1 className="text-5xl  font-bold tracking-wide leading-tight">
					Terms of use
				</h1>
			</section>
			<section className="bg-white w-full flex flex-col justify-center items-center text-justify">
				<div className="w-[750px] flex flex-col justify-center items-center gap-10 mt-10 mb-10">
					<h1 className="tracking-wide leading-loose mb-5">
						Welcome to Buy Me a Coffee, this page explains our terms of use.
						When you use Buy Me a Coffee, you’re agreeing to all the rules on
						this page. Some of them need to be expressed in legal language, but
						we’ve done our best to offer you clear and simple explanations of
						what everything means.
					</h1>
					<h1 className="font-bold text-5xl">About Creating an Account</h1>
					<h1 className="tracking-wide leading-loose">
						To sign up for a Buy Me a Coffee account, you need to be 18 or over.
						You’re responsible for your account and all the activity on it. You
						can browse Buy Me a Coffee without registering for an account. But
						to use some of our features, you’ll need to register, choose a
						username, and set a password. When you do that, the information you
						give us has to be accurate and complete. Don’t impersonate anyone
						else or choose names that are offensive or that violate anyone’s
						rights. If you don’t follow these rules, we may cancel your account.
					</h1>
					<h1 className="tracking-wide leading-loose">
						You’re responsible for all the activity on your account, and for
						keeping your password confidential. If you find out that someone has
						used your account without your permission, you should report it to{" "}
						<span className="font-bold hover:underline ease-in-out duration-300 cursor-pointer">
							support@buymeacoffee.com.
						</span>
					</h1>
					<h1 className="tracking-wide leading-loose">
						To sign up for an account, you need to be at least 18 years old, or
						old enough to form a binding contract where you live. If necessary,
						we may ask you for proof of age.
					</h1>
					<h1 className="font-bold text-5xl">Account deletion</h1>
					<h1 className="tracking-wide leading-loose mb-5">
						You may stop using our Service, by contacting Buy Me a Coffee at{" "}
						<span className="font-bold hover:underline ease-in-out duration-300 cursor-pointer">
							support@buymeacoffee.com
						</span>
						, and requesting account deletion. We may retain certain information
						as required by law or as necessary for our legitimate business
						purposes. All provisions of this agreement survive termination of an
						account, including our rights regarding any content you’ve already
						submitted to the Site. (For instance, if you’ve launched a page,
						deleting your account will not automatically remove the page from
						the Site.) If you have signed up for a membership, you can find
						information about your cancellation rights on our site. You will
						need to cancel your subscription in accordance with these
						cancellation rights to stop your recurring payments for the relevant
						subscription. Merely deleting your account without canceling your
						subscription will not stop these payments.
					</h1>
					<h1 className="font-bold text-5xl">About dispute resolution</h1>
					<h1 className="tracking-wide leading-loose mb-5">
						We at Buy Me a Coffee encourage you to contact us if you’re having
						an issue, before resorting to the courts. In the unfortunate
						situation where legal action does arise, these Terms (and all other
						rules, policies, or guidelines incorporated by reference) will be
						governed by and construed in accordance with the laws of the United
						States, without giving effect to any principles of conflicts of law,
						and without application of the Uniform Computer Information
						Transaction Act or the United Nations Convention of Controls for
						International Sale of Goods.
					</h1>
					<h1 className="font-bold text-5xl">About copyright</h1>
					<h1 className="tracking-wide leading-loose mb-5">
						The Digital Millennium Copyright Act lays out a system of legal
						requirements for dealing with allegations of copyright infringement.
						Buy Me a Coffee complies with the DMCA, and we respond to notices of
						alleged infringement if they comply with the law and the
						requirements set forth in our Copyright Policy. We reserve the right
						to delete or disable content alleged to be infringing, and to
						terminate accounts for repeat infringers. (We do this when
						appropriate and at our sole discretion.)
					</h1>
					<h1 className="font-bold text-5xl">Agreement Between You & Us</h1>
					<h1 className="tracking-wide leading-loose mb-5">
						These Terms are the entire agreement between You and Buy Me a Coffee
						with respect to the Services. They supersede all other
						communications and proposals (whether oral, written, or electronic)
						between you and Buy Me a Coffee with respect to the Services and
						govern our relationship. If any provision of these Terms are deemed
						invalid by a court of competent jurisdiction, the invalidity of such
						provision shall not affect the validity of the remaining provisions
						of this Agreement, which shall remain in full force and effect. Buy
						Me a Coffee's failure to assert any right or provision under this
						Agreement shall not constitute a waiver of such right or provision.
					</h1>
				</div>
			</section>
		</div>
	);
};

export default Terms;
