// Import Components //
import GradientBacground from "@/components/organisms/gradient-background";

export default function Home() {
	return (
		<main>
			<section className="h-screen relative">
				<GradientBacground />

				<div className="flex pt-48 flex-col absolute inset-0 w-full px-content-padding-sm">
					<h1 className="text-[100px] font-aeonik-regular text-floral-white tracking-tighter">
						Bonjour
					</h1>
				</div>
			</section>
		</main>
	);
}
