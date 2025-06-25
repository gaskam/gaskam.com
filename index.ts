Bun.serve({
	development: true,
	fetch(req) {
		console.log(req.url);
		return new Response(file(req.
	},
});
