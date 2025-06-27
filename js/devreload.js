function subscribe() {
	fetch("/updatesubscribe").then(() => window.location.reload()).catch(() => window.location.reload());
}
subscribe();
console.info("Page reloaded: ", crypto.randomUUID());
