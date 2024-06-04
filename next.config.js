const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "image.tmdb.org",
				port: "",
			},
		],
	},
	reactStrictMode: true,
	swcMinify: true,
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
	openAnalyzer: false,
});

module.exports = withBundleAnalyzer(nextConfig);
