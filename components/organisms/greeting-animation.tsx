"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const greetings = ["Hello!", "Ciao!", "Bonjour!", "Olá!"];

const GreetingAnimation = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<main>
			<AnimatePresence mode="wait">
				<motion.h1
					key={greetings[index]}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.8 }}
					className="text-[100px] font-aeonik-regular text-floral-white tracking-tighter"
				>
					{greetings[index]}
				</motion.h1>
			</AnimatePresence>
		</main>
	);
};

export default GreetingAnimation;
