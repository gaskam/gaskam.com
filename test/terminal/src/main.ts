import "./style.css";
import "./app.ts";
import "./commands.ts";
import { defaultMessage } from "./commands.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="div">
    <div id="terminal" class="terminal">
    ${defaultMessage}
    </div>
    <br><span id="session" class="session">gaskam.com $&nbsp;</span><span id="input" class="input selectable"></span><span id="cursor" class="cursor"></span>
  </div>
`;
