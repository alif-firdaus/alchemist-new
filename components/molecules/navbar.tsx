"use client";

import { useState, useEffect } from "react";
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

	// Store scroll position //
	let scrollPosition = 0;

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

	// Navbar Background and Scroll Direction //
	const [scrolling, setScrolling] = useState(false);
	const [scrollDirection, setScrollDirection] = useState("up");

	const handleScroll = () => {
		const currentScrollY = window.scrollY;
		if (currentScrollY > 0) {
			setScrolling(true);
		} else {
			setScrolling(false);
		}

		if (currentScrollY > scrollPosition) {
			setScrollDirection("down");
		} else {
			setScrollDirection("up");
		}
		scrollPosition = currentScrollY;
	};

	useEffect(() => {
		let scrollPosition = 0;
		if (window.scrollY > 0) {
			setScrolling(true);
		}

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

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
									src={dribbble}
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
			<nav
				className={`hidden lg:flex fixed w-full px-sectionpxlg 2xl:px-sectionpx2xl z-[100] py-5 items-center justify-between transition-all duration-300 ${
					scrolling
						? "bg-bgbase bg-opacity-25 backdrop-blur-2xl"
						: "bg-transparent"
				} ${
					scrollDirection === "down"
						? "-translate-y-full"
						: "translate-y-0"
				}`}
			>
				<Link href="/">
					<div className="w-fit h-fit pb-[2px]"></div>
				</Link>

				{/* <-- === Navbar Desktop Links Start === --> */}
				<div className="flex items-center justify-center rounded-full border border-white border-opacity-10 gap-1 p-[6px]">
					<Link href="/about">
						<div className="flex items-center justify-center px-5 rounded-full bg-inherit py-[10px] hover:bg-white hover:bg-opacity-[0.07] duration-300 cursor-pointer">
							<p className="text-sm text-white">About</p>
						</div>
					</Link>

					<Link href="/expertise">
						<div className="flex items-center justify-center px-5 rounded-full bg-inherit py-[10px] hover:bg-white hover:bg-opacity-[0.07] duration-300 cursor-pointer">
							<p className="text-sm text-white">Expertise</p>
						</div>
					</Link>

					<Link href="/#case-studies">
						<div className="flex items-center justify-center px-5 rounded-full bg-inherit py-[10px] hover:bg-white hover:bg-opacity-[0.07] duration-300 cursor-pointer">
							<p className="text-sm text-white">Case Studies</p>
						</div>
					</Link>

					<Link
						href="https://dribbble.com/aliffirdaus"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="flex items-center justify-center px-5 rounded-full bg-inherit py-[10px] hover:bg-white hover:bg-opacity-[0.07] duration-300 cursor-pointer">
							<p className="text-sm text-white">Portfolio</p>
						</div>
					</Link>
				</div>
				{/* <-- === Navbar Desktop Links End === --> */}
			</nav>

			{/* <-- ==== Navbar Desktop End ==== --> */}
		</>
	);
}

export default Navbar;
