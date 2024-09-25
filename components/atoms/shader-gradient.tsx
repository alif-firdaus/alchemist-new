"use client";

import React from "react";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
// import { Environment } from "@react-three/drei";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

export default function ShaderGradientComponent() {
	return (
		<ShaderGradientCanvas
			importedfiber={{
				...fiber,
				...drei,
				...reactSpring,
			}}
			style={{
				position: "absolute",
				top: 0,
				width: "100%",
				height: "100%",
				zIndex: -1, // Ensures it's behind other content
				overflow: "hidden", // Prevents zoom or scroll affecting the canvas
			}}
		>
			{/* Add ShaderGradient with your parameters */}
			<ShaderGradient
				type="waterPlane"
				uStrength={1.5}
				uDensity={1.5}
				color1="#5012BB"
				color2="#4023FF"
				color3="#212121"
				reflection={10}
				grain="off"
				brightness={1}
				animate="on"
				uSpeed={0.2}
				rangeStart={0}
				rangeEnd={40}
				cDistance={2.5}
				cAzimuthAngle={180}
				cPolarAngle={80}
				positionX={0}
				positionY={0}
				positionZ={0}
				rotationX={50}
				rotationY={0}
				rotationZ={-60}
				zoomOut={false}
				enableTransition={false}
			/>

			{/* You can add OrbitControls, Environment, or any drei components here */}
		</ShaderGradientCanvas>
	);
}
