const KEYS = {
	BACKSPACE: 8,
	ENTER: 13,
	END: 35,
	HOME: 36,
	LEFT_ARROW: 37,
	UP_ARROW: 38,
	RIGHT_ARROW: 39,
	DOWN_ARROW: 40,
	DELETE: 46,
};

const NBSP = "\xa0"; // Non-breaking space

function parseCommand(text) {
	return [].concat(...text.split('"').map((el,idx) => (idx % 2 == 0) ? el.split(' ').filter(i => i): el));
}

function runCommand(text) {
	const command = parseCommand(text);
	return "Command output...";
}
$(() => {
	let pre_input = $("#pre-input").get(0);
	let blinker = $("#blinker").get(0);
	let post_input = $("#post-input").get(0);

	function shift_characters(count) {
		if (count < 0) {
			const pre_text = pre_input.innerText;
			let end = pre_text.slice(pre_text.length + count);
			pre_input.innerText = pre_text.slice(0, pre_text.length + count);
			end += blinker.innerText;
			blinker.innerText = end.slice(0, 1);
			post_input.innerText = end.slice(1) + post_input.innerText;
		} else {
			const post_text = post_input.innerText;
			let start = post_text.slice(0, count);
			post_input.innerText = post_text.slice(count);
			start = blinker.innerText + start;
			blinker.innerText = start.slice(start.length - 1);
			pre_input.innerText += start.slice(0, start.length - 1);
		}
	}

	function update_carret() {
		if (post_input.innerText.length === 0) {
			blinker.classList.add("active");
		} else {
			blinker.classList.remove("active");
		}
	}

	$(document).keydown((event) => {
		let key = (event.keyCode ? 
				   event.keyCode : 
				   event.which);
		console.log(key);
		let text;
		switch (key) {
			case KEYS.BACKSPACE:
				text = pre_input.innerText;
				pre_input.innerText = text.slice(0, text.length - 1);
				break;
			case KEYS.ENTER:
				text = pre_input.innerText + blinker.innerText + post_input.innerText;
				text = text.trim();
				pre_input.insertAdjacentHTML("beforebegin", `<span class"command">${text}</span><br><span class="response">${runCommand(text)}</span><br><span id="prompt" class="prompt">[gaskam.com] $ </span>`);

				pre_input.innerText = "";
				blinker.innerText = NBSP;
				post_input.innerText = "";
				break;
			case KEYS.END:
				text = pre_input.innerText + blinker.innerText + post_input.innerText;
				pre_input.innerText = text.slice(0, text.length - 1);
				blinker.innerText = text.slice(text.length - 1);
				post_input.innerText = "";
				break;
			case KEYS.HOME:
				text = pre_input.innerText + blinker.innerText + post_input.innerText;
				pre_input.innerText = "";
				blinker.innerText = text.slice(0, 1);
				post_input.innerText = text.slice(1);;
				break;
			case KEYS.LEFT_ARROW:
				shift_characters(-1);
				break;
			case KEYS.UP_ARROW:
				break;
			case KEYS.RIGHT_ARROW:
				shift_characters(1);
				break;
			case KEYS.DOWN_ARROW:
				break;
			case KEYS.DELETE:
				text = post_input.innerText || NBSP;
				blinker.innerText = text.slice(0, 1);
				post_input.innerText = text.slice(1);
				break;
		}
		update_carret();
	});

	$(document).keypress((event) => {
		let key = (event.keyCode ? 
			   event.keyCode : 
			   event.which);

		// Check if character is visible
		if (key > 32) {
			let character = String.fromCharCode(key);
			pre_input.innerText += character;
		} else if (key == 32) { // key is space
			pre_input.innerText += NBSP;
		}
	});
});
