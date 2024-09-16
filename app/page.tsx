import Image from "next/image";

export default function Home() {
	return (
		<main>
			<section className="relative h-screen w-full object-cover object-center">
				<video
					controls={false}
					loop={true}
					autoPlay={true}
					muted={true}
					playsInline
					className="h-full w-full object-cover object-center"
				>
					<source src="./background.webm" type="video/webm"></source>
				</video>
				<div className="absolute inset-0 flex h-full w-full">
					<div className="lg:px-content-padding-lg">
						<h1 className="text-4xl text-white">Crafting</h1>
					</div>
				</div>
			</section>
		</main>
	);
}
