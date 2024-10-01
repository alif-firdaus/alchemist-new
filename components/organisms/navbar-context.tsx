"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context
interface NavbarContextProps {
	isOpen: boolean;
	toggleMenu: () => void;
}

// Create the context with default values
const NavbarContext = createContext<NavbarContextProps | undefined>(undefined);

// Provide the context to the rest of the application
export const NavbarProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setOpen] = useState(false);

	const toggleMenu = () => {
		setOpen((prev) => !prev);
	};

	return (
		<NavbarContext.Provider value={{ isOpen, toggleMenu }}>
			{children}
		</NavbarContext.Provider>
	);
};

// Custom hook to use the Navbar context
export const useNavbar = () => {
	const context = useContext(NavbarContext);
	if (!context) {
		throw new Error("useNavbar must be used within a NavbarProvider");
	}
	return context;
};
