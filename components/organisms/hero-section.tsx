import Image from "next/image";

// Import Components //
import PrimaryButton from "../atoms/primary-button";

export default function HeroSection() {
	return (
		<section className="w-full h-fit flex items-center justify-center px-5">
			<div className="flex flex-col w-full h-fit border-x-[1px] border-dark-border">
				{/* <-- === Top Content Start === --> */}
				<div className="flex flex-col items-start justify-start w-full h-fit px-[30px] pt-[130px] pb-[60px] gap-10">
					<div className="flex flex-col items-center justify-start w-full h-fit gap-10">
						<div className="flex flex-col items-center justify-start w-full h-fit gap-5">
							<h1 className="text-[42px] text-floral-white font-aeonik-medium leading-none">
								Multi-disciplinary designer / from sketch to
								screen
							</h1>
							<p className="text-base text-smoke font-aeonik-regular leading-snug">
								As a multi-disciplinary designer, I bring ideas
								to life from concept to screen, combining
								exploration, clarity, and technical precision in
								every project.
							</p>
						</div>
					</div>

					<PrimaryButton
						text="Book a Discovery Call"
						bgColor="bg-floral-white"
						textColor="text-charcoal"
					/>
				</div>
				{/* <-- === Top Content End === --> */}
			</div>
		</section>
	);
}
