"use client";

import Image from "next/image";

// Import Components //
import { useNavbar } from "./navbar-context";
import GradientBackground from "../molecules/gradient-background";
import GreetingAnimation from "../molecules/greeting-animation";

// Import Assets //
import sparkle from "@/assets/images/img-sparkle.svg";

export default function HeroSection() {
	const { isOpen } = useNavbar();

	return (
		<section
			className={`h-screen sticky top-0 w-full transition-all z-0 duration-500 ${
				isOpen ? "lg:bg-black lg:bg-opacity-30" : ""
			}`}
		>
			<GradientBackground />

			<div
				className={`flex pt-28 lg:pt-36 pb-10 flex-col absolute inset-0 w-full px-content-padding-sm lg:px-content-padding-lg 2xl:px-content-padding-2xl place-content-between transition-all duration-500
          ${isOpen ? "lg:blur-md" : ""}
          `}
			>
				<GreetingAnimation />

				<div className="w-full flex flex-col gap-14 lg:hidden">
					<div className="flex flex-col gap-6">
						<Image
							src={sparkle}
							alt="Sparkle"
							className="w-8 h-8"
						/>
						<p className="text-[26px] text-floral-white font-aeonik-regular tracking-[0.01] leading-[1.1]">
							A passionate multidisciplinary designer who cares
							about crafting captivating interfaces that keep
							people coming back.
						</p>
					</div>

					<button className="w-full h-fit flex items-center justify-center pt-[10px] pb-[14px] bg-[#A9FDBF] text-[17px] text-charcoal font-aeonik-regular">
						Schedule a call
					</button>
				</div>

				<div className="hidden lg:flex w-full items-end justify-between">
					<div className="flex items-end justify-between w-1/2 pr-28">
						<p className="text-xs text-floral-white font-kode-mono leading-[1.55]">
							UI/UX <br />
							DESIGN
						</p>
						<p className="text-xs text-floral-white font-kode-mono leading-[1.55]">
							FRONT-END <br />
							DEVELOPMENT
						</p>
						<p className="text-xs text-floral-white font-kode-mono leading-[1.55]">
							NO-CODE <br />
							DEVELOPMENT
						</p>
					</div>
					<div className="flex flex-col items-start justify-end w-[40%] gap-14">
						<div className="flex flex-col gap-7">
							<Image
								src={sparkle}
								alt="Sparkle"
								className="w-6 h-6"
							/>
							<p className="text-[26px] text-floral-white font-aeonik-regular tracking-[0.01] leading-[1.1]">
								A passionate multidisciplinary designer who
								cares about crafting captivating interfaces that
								keep people coming back.
							</p>
						</div>

						<button className="w-fit h-fit flex items-center justify-center px-24 pt-3 pb-4 bg-[#A9FDBF] text-[17px] text-charcoal font-aeonik-regular hover:bg-floral-white duration-300 ease-in-out">
							Schedule a call
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
