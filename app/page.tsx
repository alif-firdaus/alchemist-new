import React from "react";
import dynamic from "next/dynamic";

const NoSSRShaderGradient = dynamic(
	() => import("@/components/organisms/shader-gradient"),
	{ ssr: false }
);

export default function Home() {
	return (
		<main>
			<main style={{ height: "100vh", position: "relative" }}>
				<NoSSRShaderGradient />
			</main>
		</main>
	);
}
