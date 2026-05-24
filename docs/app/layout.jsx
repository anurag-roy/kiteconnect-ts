import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "../styles.css";
import "nextra-theme-docs/style.css";

export const metadata = {
	title: {
		default: "kiteconnect-ts",
		template: "%s – kiteconnect-ts",
	},
	description:
		"Unofficial library for the Kite Connect trading APIs, written in TypeScript",
	openGraph: {
		title: "kiteconnect-ts",
		description:
			"Unofficial library for the Kite Connect trading APIs, written in TypeScript",
	},
};

const navbar = <Navbar logo={<b>kiteconnect-ts</b>} />;
const footer = (
	<Footer>
		MIT {new Date().getFullYear()} ©{" "}
		<a href="https://twitter.com/anurag__roy" target="_blank">
			Anurag Roy
		</a>
	</Footer>
);

export default async function RootLayout({ children }) {
	const pageMap = await getPageMap();
	return (
		<html
			lang="en"
			dir="ltr"
			className={`${GeistSans.className} ${GeistMono.variable}`}
			suppressHydrationWarning
		>
			<Head />
			<body>
				<Layout
					navbar={navbar}
					pageMap={pageMap}
					docsRepositoryBase="https://github.com/anurag-roy/kiteconnect-ts/blob/main/docs/content"
					footer={footer}
				>
					{children}
				</Layout>
			</body>
		</html>
	);
}
