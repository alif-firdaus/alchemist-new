"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { delay, motion } from "framer-motion";

// Import Icons //
import { ArrowRightIcon } from "@radix-ui/react-icons";

// Import Assets //
import logo from "@/assets/images/img-alchemist-logo.svg";

function Navbar() {
	// Navbar Links //
	const navLinks = [
		{
			text: "About",
			path: "#",
		},
		{
			text: "Expertise",
			path: "#",
		},
		{
			text: "Case Studies",
			path: "#",
		},
		{
			text: "Portfolio",
			path: "https://dribbble.com/aliffirdaus",
		},
		{
			text: "Connect",
			path: "#",
		},
	];

	// Navbar Mobile View //
	const [isOpen, setOpen] = useState(false);
	const [showContent, setShowContent] = useState(false);

	// Navbar Toggle //
	const toggleMenu = () => {
		if (!isOpen) {
			setOpen(true);
		} else {
			setShowContent(false);
			setTimeout(() => setOpen(false), 100); // Delay closing animation
		}
	};

	// Close menu when navigating //
	const closeMenu = () => {
		setOpen(false);
		setShowContent(false);
	};

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

	const variants = {
		open: {
			width: "100vw",
			height: "100vh",
			top: "0px",
			right: "0px",
			transition: {
				duration: 0.7,
				type: "tween",
				ease: [0.76, 0, 0.24, 1],
			},
		},
		closed: {
			width: "0px",
			height: "0px",
			top: "0px",
			right: "0px",
			transition: {
				duration: 0.7,
				delay: 0,
				type: "tween",
				ease: [0.76, 0, 0.24, 1],
			},
		},
	};

	const contentVariants = {
		visible: {
			opacity: 1,
			transition: {
				delay: 0.1,
				duration: 0.6,
				ease: [0.76, 0, 0.24, 1],
			},
		},
		hidden: {
			opacity: 0,
			transition: {
				delay: 1,
				duration: 10, // Add duration for fade-out
				ease: [0.61, 1, 0.88, 1],
			},
		},
	};

	return (
		<>
			{/* <-- ==== Navbar Mobile Start ==== --> */}
			<nav className="fixed top-0 left-0 right-0 w-full z-[100] block">
				<div className="flex items-center justify-between px-content-padding-sm py-7">
					<Link href="/">
						<Image
							src={logo}
							alt="Alchemist"
							priority={true}
							className="h-[18px] w-auto fill-red-400"
						/>
					</Link>

					<div onClick={toggleMenu} className="block w-fit">
						<p className="text-sm text-floral-white text-opacity-90 font-kode-mono">
							[ MENU ]
						</p>
					</div>
				</div>
			</nav>

			{/* <-- ==== Navbar Mobile Open ==== --> */}
			<motion.div
				variants={variants}
				animate={isOpen ? "open" : "closed"}
				initial="closed"
				className="bg-floral-white absolute z-[200] overflow-hidden h-full"
				onAnimationComplete={() => {
					if (isOpen) {
						setShowContent(true);
					}
				}}
			>
				{showContent && (
					<>
						<motion.div
							variants={contentVariants}
							initial="hidden"
							animate={isOpen ? "visible" : "hidden"}
							exit="hidden"
							className="flex items-center justify-between px-content-padding-sm py-7"
						>
							<p className="text-base text-charcoal font-aeonik-regular">
								Navigate
							</p>

							<div onClick={toggleMenu} className="block w-fit">
								<p className="text-sm text-charcoal text-opacity-90 font-kode-mono">
									[ CLOSE ]
								</p>
							</div>
						</motion.div>

						<motion.div
							initial="hidden"
							animate={isOpen ? "visible" : "hidden"}
							exit="hidden"
							variants={contentVariants}
							className="flex flex-col items-start pt-16 px-content-padding-sm justify-between pb-32 h-full w-full"
						>
							<div className="flex flex-col gap-1 w-full h-fit items-start justify-center text-5xl font-aeonik-regular text-charcoal tracking-tight">
								{navLinks.map(({ text, path }) => (
									<NavItem
										key={text}
										text={text}
										path={path}
									/>
								))}
							</div>

							<div className="w-full flex flex-col">
								<Link
									href="https://www.linkedin.com/in/aliffirdaus97/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="w-full flex items-center justify-between pt-[14px] pb-4 border-t border-charcoal border-opacity-15">
										<p className="text-xl text-charcoal font-aeonik-regular">
											Linkedin
										</p>

										<ArrowRightIcon className="text-charcoal w-[23px] h-[23px] text-opacity-50" />
									</div>
								</Link>

								<Link
									href="https://dribbble.com/aliffirdaus"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="w-full flex items-center justify-between pt-[14px] pb-4 border-t border-charcoal border-opacity-15">
										<p className="text-xl text-charcoal font-aeonik-regular">
											Dribbble
										</p>

										<ArrowRightIcon className="text-charcoal w-[23px] h-[23px] text-opacity-50" />
									</div>
								</Link>

								<Link
									href="https://github.com/alif-firdaus"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="w-full flex items-center justify-between pt-[14px] pb-4 border-t border-charcoal border-opacity-15">
										<p className="text-xl text-charcoal font-aeonik-regular">
											Github
										</p>

										<ArrowRightIcon className="text-charcoal w-[23px] h-[23px] text-opacity-50" />
									</div>
								</Link>

								<Link
									href="https://x.com/whereisalif"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="w-full flex items-center justify-between pt-[14px] pb-4 border-y border-charcoal border-opacity-15">
										<p className="text-xl text-charcoal font-aeonik-regular">
											Twitter
										</p>

										<ArrowRightIcon className="text-charcoal w-[23px] h-[23px] text-opacity-50" />
									</div>
								</Link>

								<div className="flex items-center justify-end mt-10">
									<p className="text-base text-charcoal font-aeonik-regular">
										&copy; Alchemist 2024
									</p>
								</div>
							</div>
						</motion.div>
					</>
				)}
			</motion.div>
			{/* <-- ==== Navbar Mobile End ==== --> */}

			{/* <-- ==== Navbar Desktop Start ==== --> */}
			{/* <-- ==== Navbar Desktop End ==== --> */}
		</>
	);
}

export default Navbar;
