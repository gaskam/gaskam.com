import './style.css'
import './app.ts'
import './commands.ts'
import { defaultMessage } from './commands.ts'

// console.log(process.env.SECRET) // Error: process is not defined but i don't know why

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="div">
    <div id="terminal" class="terminal">
    ${defaultMessage}
    </div>
    <br><span class="session">gaskam.com $&nbsp;</span><span id="input" class="input selectable"></span><span id="cursor" class="cursor"></span>
  </div>
`
