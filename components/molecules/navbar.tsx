"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Import Components //
import { useNavbar } from "../organisms/navbar-context";

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

	const [showContent, setShowContent] = useState(false);
	const { isOpen, toggleMenu } = useNavbar();

	const closeMenu = () => {
		toggleMenu();
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

	const navbarMobileVariants = {
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
			width: "100vw",
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

	const navbarDesktopVariants = {
		open: {
			width: "40%",
			height: "100vh",
			top: "0px",
			right: "0px",
			transition: {
				duration: 1,
				type: "tween",
				ease: [0.76, 0, 0.24, 1],
			},
		},
		closed: {
			width: "0px",
			height: "100vh",
			top: "0px",
			right: "0px",
			transition: {
				duration: 1,
				type: "tween",
				ease: [0.76, 0, 0.24, 1],
			},
		},
	};

	const contentMobileVariants = {
		visible: {
			opacity: 1,
			transition: {
				delay: 0.1,
				duration: 0.5,
				ease: [0.76, 0, 0.24, 1],
			},
		},
		hidden: {
			opacity: 0,
			transition: {
				delay: 1,
				duration: 10,
				ease: [0.61, 1, 0.88, 1],
			},
		},
	};

	return (
		<>
			{/* <-- ==== Navbar Mobile Start ==== --> */}
			<nav
				className={`fixed top-0 left-0 right-0 w-full z-[100] block lg:transition-all lg:duration-500 ${
					isOpen ? "lg:blur-md" : ""
				}`}
			>
				<div className="flex items-center justify-between px-content-padding-sm lg:px-content-padding-lg 2xl:px-content-padding-2xl pt-7 lg:pt-8">
					<Link href="/">
						<Image
							src={logo}
							alt="Alchemist"
							priority={true}
							className="h-[18px] lg:h-5 w-auto"
						/>
					</Link>

					<div
						onClick={toggleMenu}
						className="block w-fit lg:cursor-pointer"
					>
						<p className="text-sm text-floral-white  text-opacity-90 font-kode-mono">
							[ MENU ]
						</p>
					</div>
				</div>
			</nav>

			{/* <-- ==== Navbar Mobile Open Start ==== --> */}
			<motion.div
				variants={navbarMobileVariants}
				animate={isOpen ? "open" : "closed"}
				initial="closed"
				className="bg-floral-white z-[200] fixed overflow-hidden h-screen lg:hidden"
				onAnimationComplete={() => {
					if (isOpen) {
						setShowContent(true);
					}
				}}
			>
				{showContent && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
							exit={{ opacity: 0 }}
							className="flex items-center justify-between px-content-padding-sm py-7"
						>
							<motion.p
								initial={{ opacity: 0 }}
								animate={
									isOpen ? { opacity: 1 } : { opacity: 0 }
								}
								exit={{ opacity: 0 }}
								transition={{
									duration: 0.5,
									delay: 0.5,
								}}
								className="text-base text-charcoal font-aeonik-regular"
							>
								Navigate
							</motion.p>

							<div onClick={toggleMenu} className="block w-fit">
								<motion.p
									initial={{ opacity: 0 }}
									animate={
										isOpen ? { opacity: 1 } : { opacity: 0 }
									}
									exit={{ opacity: 0 }}
									transition={{
										duration: 0.5,
										delay: 0.5,
									}}
									className="text-sm text-charcoal text-opacity-90 font-kode-mono"
								>
									[ CLOSE ]
								</motion.p>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
							exit={{ opacity: 0 }}
							className="flex flex-col items-start pt-14 px-content-padding-sm justify-between pb-28 h-full w-full"
						>
							<motion.div
								initial={{ opacity: 0 }}
								animate={
									isOpen ? { opacity: 1 } : { opacity: 0 }
								}
								exit={{ opacity: 0 }}
								transition={{
									duration: 0.5,
									delay: 0.5,
								}}
								className="flex flex-col gap-1 w-full h-fit items-start justify-center text-5xl font-aeonik-regular text-charcoal tracking-tight"
							>
								{navLinks.map(({ text, path }) => (
									<NavItem
										key={text}
										text={text}
										path={path}
									/>
								))}
							</motion.div>

							<motion.div
								initial={{ opacity: 0 }}
								animate={
									isOpen ? { opacity: 1 } : { opacity: 0 }
								}
								exit={{ opacity: 0 }}
								transition={{
									duration: 0.5,
									delay: 0.5,
								}}
								className="w-full flex flex-col"
							>
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

								<div className="flex items-center justify-end mt-7">
									<p className="text-base text-charcoal font-aeonik-regular">
										&copy; Alchemist 2024
									</p>
								</div>
							</motion.div>
						</motion.div>
					</>
				)}
			</motion.div>
			{/* <-- ==== Navbar Mobile Open End ==== --> */}

			{/* <-- ==== Navbar Desktop Open Start ==== --> */}
			<motion.div
				variants={navbarDesktopVariants}
				animate={isOpen ? "open" : "closed"}
				initial="closed"
				className="bg-floral-white z-[200] fixed overflow-hidden h-fit hidden lg:block"
			>
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
						exit={{ opacity: 0 }}
						transition={{
							duration: 0.5,
							delay: 0.5,
						}}
						className="flex items-center justify-between px-content-padding-lg py-7"
					>
						<motion.p
							initial={{ opacity: 0 }}
							animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
							exit={{ opacity: 0 }}
							transition={{
								duration: 0.5,
								ease: "easeInOut",
							}}
							className="text-base text-charcoal font-aeonik-regular"
						>
							Navigate
						</motion.p>

						<div
							onClick={toggleMenu}
							className="block w-fit cursor-pointer"
						>
							<motion.p
								initial={{ opacity: 0 }}
								animate={
									isOpen ? { opacity: 1 } : { opacity: 0 }
								}
								exit={{ opacity: 0 }}
								transition={{
									duration: 0.5,
									ease: "easeInOut",
								}}
								className="text-sm text-charcoal text-opacity-90 font-kode-mono"
							>
								[ CLOSE ]
							</motion.p>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
						exit={{ opacity: 0 }}
						className="flex flex-col items-start pt-14 px-content-padding-lg justify-between pb-28 h-full w-full"
					>
						<motion.div
							initial={{ opacity: 0 }}
							animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
							exit={{ opacity: 0 }}
							transition={{
								duration: 0.5,
								delay: 0.5,
							}}
							className="flex flex-col gap-1 w-full h-fit items-start  justify-center text-6xl font-aeonik-regular text-charcoal tracking-tight"
						>
							{navLinks.map(({ text, path }) => (
								<NavItem key={text} text={text} path={path} />
							))}
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="w-full flex flex-col"
						>
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

							<motion.div
								initial={{ opacity: 0 }}
								animate={
									isOpen ? { opacity: 1 } : { opacity: 0 }
								}
								exit={{ opacity: 0 }}
								transition={{
									duration: 0.5,
									ease: "easeInOut",
								}}
								className="flex items-center justify-end mt-7"
							>
								<p className="text-base text-charcoal font-aeonik-regular">
									&copy; Alchemist 2024
								</p>
							</motion.div>
						</motion.div>
					</motion.div>
				</>
			</motion.div>
			{/* <-- ==== Navbar Desktop Open End ==== --> */}
		</>
	);
}

export default Navbar;
