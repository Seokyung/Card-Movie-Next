import Navigation from "../components/navigation/navigation";
import { Inter } from "next/font/google";
import "../styles/global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: {
		template: "%s | Next Movies",
		default: "Next Movies",
	},
	description: "The best movies in the best framework!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navigation />
				{children}
			</body>
		</html>
	);
}
