const inputCEP = document.querySelector('#cep');
const inputEstado = document.querySelector('#estado');
const inputCidade = document.querySelector('#cidade');
const inputBairro = document.querySelector('#bairro');
const inputRua = document.querySelector('#rua');
let dados;


inputCEP.addEventListener("keypress", (e) => {
    const onlyNumbers = /[0-9]|\./;
    const key = String.fromCharCode(e.keyCode);
    
    console.log(key);
    console.log(onlyNumbers.test(key));
  
    if (!onlyNumbers.test(key)) {
      e.preventDefault();
      return;
    }
  });


async function getInfo(event) {
  const cep = event.target.value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const response = await fetch(url);
  dados = await response.json();
}

async function setInfo() {
  await getInfo(event);
  inputEstado.value = dados.uf;
  inputCidade.value = dados.localidade;
  inputBairro.value = dados.bairro;
  inputRua.value = dados.logradouro;
}

inputCEP.addEventListener('change', setInfo);



(function() {
  'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
         if (form.checkValidity() === false) {
           event.preventDefault();
           event.stopPropagation();
         }
        form.classList.add('was-validated');
      }, false);
     });
  }, false);
})();