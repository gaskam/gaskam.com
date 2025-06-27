import { watch } from "fs";

let callback: Function | undefined = undefined;

const watcher = watch(
	import.meta.dir,
	{ recursive: true },
	(_event, _filename) => {
		if (typeof callback === "function") {
			console.log("Files changed, reloading...");
			/// @ts-ignore
			callback(new Response("Files updated" ));
		}
	},
);

process.on("SIGINT", () => {
	// close watcher when Ctrl-C is pressed
	console.log("Closing watcher...");
	watcher.close();

	process.exit(0);
});

Bun.serve({
	development: true,
	routes: {
		"/updatesubscribe": async (req, server) => {
			server.timeout(req, 0);
			let result: Promise<Response> =  new Promise((resolve, _) => {
				callback = resolve;
			});
			return result;
		},
	},
	fetch(req) {
		const url = new URL(req.url);
		return new Response(Bun.file(url.pathname.slice(1) || "index.html"));
	},
});
