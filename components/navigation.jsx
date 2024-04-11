"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
	const path = usePathname();

	return (
		<nav>
			<ul>
				<li>
					<Link href={"/"}>Home {path === "/" && "👈"}</Link>
				</li>
				<li>
					<Link href={"/about-me"}>
						About Me {path === "/about-me" && "👈"}
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
