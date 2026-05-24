import nextra from "nextra";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const withNextra = nextra({});
const root = dirname(fileURLToPath(import.meta.url));

export default withNextra({
	async redirects() {
		return [
			{
				source: "/enums/:path*",
				destination: "/enumerations/:path*",
				permanent: true,
			},
		];
	},
	images: {
		unoptimized: true,
	},
	transpilePackages: ["geist"],
	turbopack: {
		root,
	},
});
