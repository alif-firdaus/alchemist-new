// Import Sections //
import HeroSection from "@/components/organisms/hero-section";

export default function Home() {
	return (
		<main className="h-[200vh]">
			<HeroSection />

			<div className="w-full bg-floral-white h-screen relative z-10">
				{/* Your content here */}
				<div className="p-10 text-charcoal">
					This section will cover the hero section as you scroll down.
				</div>
			</div>
		</main>
	);
}
