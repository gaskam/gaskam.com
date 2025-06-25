Bun.serve({
	development: true,
	fetch(req) {
		const url = new URL(req.url);
		return new Response(Bun.file(url.pathname.slice(1) || "index.html"));
	},
});
