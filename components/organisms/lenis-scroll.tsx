"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface LenisScrollProps {
	children: ReactNode;
}

const LenisScroll: React.FC<LenisScrollProps> = ({ children }) => {
	return (
		<ReactLenis root options={{ lerp: 0.1 }}>
			{children}
		</ReactLenis>
	);
};

export default LenisScroll;
