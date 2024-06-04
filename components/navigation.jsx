"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.scss";

const Navigation = () => {
	const path = usePathname();

	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
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
