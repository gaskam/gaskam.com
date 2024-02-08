import './style.css'
import './app.ts'
import { defaultMessage } from './commands.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="div">
    <div id="terminal" class="terminal">
    ${defaultMessage}
    </div>
    <span>gaskam.com $&nbsp;</span><span id="input" class="input selectable"></span><span id="cursor" class="cursor"></span>
  </div>
`
