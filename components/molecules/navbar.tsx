"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Import Components //
import PrimaryButton from "../atoms/primary-button";

// Import Assets //
import logowhite from "@/assets/images/img-logotype-white.svg";
import dottedmenu from "@/assets/icons/icon-dotted-menu.svg";
import dottedclose from "@/assets/icons/icon-dotted-close.svg";
import dribbble from "@/assets/icons/icon-dribbble.svg";
import linkedin from "@/assets/icons/icon-linkedin.svg";
import x from "@/assets/icons/icon-x.svg";

function Navbar() {
	// Navbar Links //
	const navLinks = [
		{
			text: "About",
			path: "/about",
		},
		{
			text: "Expertise",
			path: "/expertise",
		},
		{
			text: "Works",
			path: "/#case-studies",
		},
		{
			text: "Contact",
			path: "https://dribbble.com/aliffirdaus",
		},
	];

	// Navbar Mobile View //
	const [isOpen, setOpen] = useState(false);

	// Navbar Toggle //
	const toggleMenu = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	// Close menu when navigating //
	const closeMenu = () => {
		setOpen(false);
	};

	// External Link Path //
	interface NavItemProps {
		text: string;
		path: string;
	}

	const NavItem = ({ text, path }: NavItemProps) => {
		const isExternalLink = path.startsWith("http");

		if (isExternalLink) {
			return (
				<Link
					href={path}
					target="_blank"
					rel="noopener noreferrer"
					onClick={closeMenu}
				>
					{text}
				</Link>
			);
		} else {
			return (
				<Link href={path} onClick={closeMenu}>
					{text}
				</Link>
			);
		}
	};

	return (
		<>
			{/* <-- ==== Navbar Mobile Start ==== --> */}
			<nav
				className={`fixed w-screen h-fit z-[100] border-b-[1px] border-dark-border ${
					isOpen ? "bg-void" : "bg-bgbase"
				} `}
			>
				<div className="flex w-full items-center justify-between h-full pl-content-padding-sm">
					<Link href="/">
						<div className="w-fit h-fit flex items-center justify-center">
							<Image
								src={logowhite}
								alt="Alchemist Logo"
								title="Alchemist Logo"
								priority={true}
								className="h-4 w-auto"
							/>
						</div>
					</Link>

					{/* <-- === Navbar Toggle === --> */}
					<div
						onClick={toggleMenu}
						className="flex items-center justify-center bg-floral-white w-[70px] h-[70px] cursor-pointer"
					>
						{isOpen ? (
							<Image
								src={dottedclose}
								alt="Close"
								title="Close"
								priority={true}
								className="h-8 w-auto"
							/>
						) : (
							<Image
								src={dottedmenu}
								alt="Menu"
								title="Menu"
								priority={true}
								className="h-8 w-auto"
							/>
						)}
					</div>
					{/* <-- === Navbar Toggle === --> */}
				</div>
			</nav>

			{/* <-- ==== Navbar Open Start ==== --> */}
			<div
				className={`fixed w-full h-fit z-[80] px-5 bg-void border-b-[1px] border-dark-border lg:hidden
            ${
				isOpen
					? "top-0 left-0 transition-all duration-500 ease-in-out"
					: "-top-full left-0 transition-all duration-1000 ease-in-out"
			}`}
			>
				<div className="w-full flex flex-col h-full bg-void border-x-[1px] border-dark-border pt-[70px] justify-center items-center">
					<div className="flex flex-col w-full h-fit">
						{/* <-- === Navbar Links Start === --> */}
						{navLinks.map((link, index) => (
							<div
								key={index}
								className="flex w-full h-[70px] items-center justify-start px-[30px] text-base text-floral-white font-aeonik-regular border-b-[1px] border-dark-border"
							>
								<NavItem
									key={index}
									text={link.text}
									path={link.path}
								/>
							</div>
						))}
						{/* <-- === Navbar Links End === --> */}

						{/* <-- === Socials Start === --> */}
						<div className="w-full flex items-center justify-center h-fit">
							<div className="flex w-full h-[70px] items-center justify-center border-r-[1px] border-b-[1px] border-dark-border">
								<Image
									src={dribbble}
									alt="Dribbble"
									title="Dribbble"
									priority={true}
									className="h-[17px] w-auto"
								/>
							</div>
							<div className="flex w-full h-[70px] items-center justify-center border-r-[1px] border-b-[1px] border-dark-border">
								<Image
									src={linkedin}
									alt="Linkedin"
									title="Linkedin"
									priority={true}
									className="h-[17px] w-auto"
								/>
							</div>
							<div className="flex w-full h-[70px] items-center justify-center border-b-[1px] border-dark-border">
								<Image
									src={x}
									alt="X"
									title="X"
									priority={true}
									className="h-[17px] w-auto"
								/>
							</div>
						</div>
						{/* <-- === Socials End === --> */}

						{/* <-- === CTA Start === --> */}
						<div className="flex w-full h-fit items-center justify-center px-[30px] py-[30px]">
							<PrimaryButton
								text="Book a Discovery Call"
								bgColor="bg-charcoal"
								textColor="text-floral-white"
							/>
						</div>
						{/* <-- === CTA End === --> */}
					</div>
				</div>
			</div>
			{/* <-- ==== Navbar Open End ==== --> */}
			{/* <-- ==== Navbar Mobile End ==== --> */}

			{/* <-- ==== Navbar Desktop Start ==== --> */}

			{/* <-- ==== Navbar Desktop End ==== --> */}
		</>
	);
}

export default Navbar;
