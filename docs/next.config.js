import nextra from "nextra";

const withNextra = nextra({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.jsx",
});

export default withNextra({
	images: {
		unoptimized: true,
	},
	transpilePackages: ["geist"],
});

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
