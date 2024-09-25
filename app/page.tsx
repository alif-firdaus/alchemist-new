import Image from "next/image";

// Import Components //
import GradientBacground from "@/components/organisms/gradient-background";
import GreetingAnimation from "@/components/organisms/greeting-animation";

// Import Assets //
import sparkle from "@/assets/images/img-sparkle.svg";

export default function Home() {
	return (
		<main>
			<section className="h-screen relative">
				<GradientBacground />

				<div className="flex pt-32 pb-10 flex-col absolute inset-0 w-full px-content-padding-sm place-content-between">
					<GreetingAnimation />

					<div className="w-full flex flex-col gap-14">
						<div className="flex flex-col gap-6">
							<Image
								src={sparkle}
								alt="Sparkle"
								className="w-8 h-8"
							/>
							<p className="text-[26px] text-floral-white font-aeonik-light tracking-[0.01] leading-[1.1]">
								A passionate multidisciplinary designer who
								cares about crafting captivating interfaces that
								keep people coming back.
							</p>
						</div>

						<button className="w-full h-fit flex items-center justify-center pt-[12px] pb-[17px] rounded bg-floral-white text-lg text-charcoal font-aeonik-regular">
							Schedule a call
						</button>
					</div>
				</div>
			</section>
		</main>
	);
}
