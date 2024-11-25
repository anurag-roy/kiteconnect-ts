import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../styles.css";

export default function MyApp({ Component, pageProps }) {
	return (
		<main className={`${GeistSans.className} ${GeistMono.variable}`}>
			<Component {...pageProps} />
		</main>
	);
}
