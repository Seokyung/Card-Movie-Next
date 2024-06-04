"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.scss";

const Navigation = () => {
	const path = usePathname();

	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				<li>
					<Link href={"/"}>{path === "/" && "🎬"} Home</Link>
				</li>
				<li>
					<Link href={"/about-me"}>
						{path === "/about-me" && "🎬"} About Me
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
