/* <script type="text/javascript">
function validateEmail(email)
{
 var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
 if (reg.test(email)){
 return true; }
 else{
 return false;
 }
} 
</script>  */

var inUsuario = document.getElementById('inUsuario');
var inSenha = document.getElementById('inSenha');
var outResposta = document.getElementById('outResposta');
var resposta = document.createElement('h3');


function validaEmail(e){
    e.preventDefault();
    
    var senha = inSenha.value;
    
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    resposta.textContent = ""

    if(!reg.test(inUsuario.value)){

        console.log("Errado")
        outResposta.append(resposta);
        resposta.textContent += "Usuário Incorreto. " + "\n";
        resposta.style.color = "red";
    }
    if(senha.length < 6){

        console.log("Errado")
        outResposta.append(resposta);
        resposta.textContent += "Digite uma senha maior que 6 caracteres. " + "\n";
        resposta.style.color = "red";
        inSenha.focus();

    }else{
        if(reg.test(inUsuario.value)){
            console.log("correto");
            outResposta.append(resposta);
    
            resposta.textContent = "Cadastro realizado";
            resposta.style.fontSize = "20px";
            resposta.style.color = "green";
        
        }
    
    
    }
}
    


var btEntrar = document.getElementById('btEntrar');
btEntrar.addEventListener("click", validaEmail);


