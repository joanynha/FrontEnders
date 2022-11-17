//  var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

var inUsuario = document.getElementById('inUsuario');
var inSenha = document.getElementById('inSenha');
var inSenha2 = document.getElementById('inSenha2');
var outResposta = document.getElementById('outResposta');
var resposta = document.createElement('h3');


function senhaNova(e) {
    var senha1 = inSenha.value;
    var senha2 = inSenha2.value;

    e.preventDefault();
    resposta.textContent = "";

    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    if (!reg.test(inUsuario.value)) {
        outResposta.append(resposta);
        resposta.textContent += "Usuário Incorreto. " + "\n";
        resposta.style.color = "red";
        resposta.style.fontSize = "10px";
    }
    if (senha1.length < 6 || senha2.length < 6) {
        outResposta.append(resposta);
        resposta.textContent += "Nova senha deve conter no mínimo 6 caracteres e campo não pode estar em branco" + "\n";
        resposta.style.color = "red";
        resposta.style.fontSize = "10px";
    }if(inSenha.value != inSenha2.value && inSenha2.value != inSenha.value){
        outResposta.append(resposta);
        resposta.textContent += "Confirme as senhas digitadas" + "\n";
        resposta.style.color = "red";
        resposta.style.fontSize = "10px";
    }
    
    else{
        if(reg.test(inUsuario.value) && (inSenha.value == inSenha2.value)){

            outResposta.append(resposta);
            resposta.textContent = "Nova Senha Cadastrada!";
            resposta.style.color = "green";
            resposta.style.fontSize = "15px";
        }
        
    }



    // inUsuario.value = "";

}

var btRecuperar = document.getElementById('btRecuperar');
btRecuperar.addEventListener("click", senhaNova);