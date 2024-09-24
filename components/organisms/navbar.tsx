"use client";

import Link from "next/link";
import Image from "next/image";

// Import Assets //
import logo from "@/assets/images/img-alchemist-logo.svg";

function Navbar() {
	return (
		<>
			{/* <-- ==== Navbar Mobile Start ==== --> */}
			<nav className="fixed top-0 left-0 right-0 w-full z-[100] block">
				<div className="flex items-center justify-between px-content-padding-sm py-7 z-[90]">
					<Link href="/">
						<Image
							src={logo}
							alt="Alchemist"
							priority={true}
							className="h-[18px] w-auto"
						/>
					</Link>

					<div className="block w-fit">
						<p className="text-sm text-floral-white text-opacity-90 font-kode-mono">
							[ MENU ]
						</p>
					</div>
				</div>
			</nav>
			{/* <-- ==== Navbar Mobile End ==== --> */}

			{/* <-- ==== Navbar Desktop Start ==== --> */}
			{/* <-- ==== Navbar Desktop End ==== --> */}
		</>
	);
}

export default Navbar;
