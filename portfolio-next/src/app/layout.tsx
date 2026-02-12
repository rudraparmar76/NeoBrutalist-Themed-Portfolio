import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
	variable: "--font-display",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
	weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
	title: "RUDRA | Full Stack Brutalist",
	description:
		"Rudra Parmar | Full Stack Developer specializing in scalable backend systems, secure API architectures, and responsive web interfaces.",
	keywords: [
		"Rudra Parmar",
		"Full Stack Developer",
		"NeoBrutalist",
		"Portfolio",
		"Web Development",
		"React",
		"Python",
		"Firebase",
		"System Design",
	],
	authors: [{ name: "Rudra Parmar" }],
	openGraph: {
		type: "website",
		title: "RUDRA | Full Stack Brutalist",
		description:
			"Full Stack Developer specializing in scalable backend systems, secure API architectures, and responsive web interfaces.",
	},
	icons: {
		icon: "/Assets/images/title_icon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-[family-name:var(--font-display)] text-neo-black antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
