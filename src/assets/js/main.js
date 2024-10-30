import '../css/style.css'
import javascriptLogo from '../img/javascript.svg'
import viteLogo from '../img/vite.svg'
import { setupCounter } from './counter.js'
import { getCEPData } from './fetchCep.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <h2 id="cep">-</h2>
    
  </div>
`

setupCounter(document.querySelector('#counter'))

getCEPData(document.querySelector('#cep'))
