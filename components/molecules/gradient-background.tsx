import React from "react";
import dynamic from "next/dynamic";

const NoSSRShaderGradient = dynamic(
	() => import("@/components/atoms/shader-gradient"),
	{ ssr: false }
);

export default function GradientBackground() {
	return (
		<main style={{ height: "100vh", position: "relative" }}>
			<NoSSRShaderGradient />
		</main>
	);
}
