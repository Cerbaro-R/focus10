import '../css/style.css'
import { getCEPData} from "./fetchCep.js";

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Qual seu CEP?</h1>
    <div>
        <input type="text" name="cep" id="cep_field">
        <button type="submit" id="cep_get">GET</button>
    </div>
    <h2 id="cep">-</h2>
  </div>
`
document.getElementById('cep_get').addEventListener('click', function() {
  const cep = document.getElementById('cep_field').value;

  getCEPData(cep, document.querySelector('#cep'))
});


