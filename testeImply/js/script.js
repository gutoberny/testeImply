
function validaCPF() {
    let cpf = document.getElementById("CPF").value;
    
    
    if (typeof cpf != "string") 
        return false
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (cpf.length != 11 || !Array.from(cpf).filter(e => e != cpf[0]).length) {
        
        return false
    }
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
        resto = (soma * 10) % 11
    
    if ((resto == 10) || (resto == 11))  
        resto = 0
    if (resto != parseInt(cpf.substring(9, 10)) ){ 
            
        return false
    }
    soma = 0
    for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
        resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))
      resto = 0
    if (resto != parseInt(cpf.substring(10, 11) ) )
    
    return false
    return true
    
}

function mascaraCEP(evt){
    const grupos = evt.target.value.replace(/\D/g, '').match(/(\d{0,5})(\d{0,3})/);
    evt.target.value = !grupos[2] ? grupos[1] : grupos[1]+ "-" + grupos[2];
}

function mascaraPhone(evt){
    const grupos = evt.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    evt.target.value = !grupos[2] ? grupos[1] : '(' + grupos[1] + ') ' + grupos[2] + (grupos[3] ? '-' + grupos[3] : '');
}

function mascaraCPF(evt){
    const grupos = evt.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
    let val = grupos[1]
    if (grupos[2])
        val += '.' + grupos[2]
        if (grupos[3])
            val += '.' + grupos[3]
            if (grupos[4])
                val += '-' + grupos[4]
    evt.target.value = val;
}

function isNumero(evt){
    const tecla = (evt.which) ? evt.which : evt.keyCode
    if (tecla > 31 && (tecla < 48 || tecla > 57)){
        alert ( "Este campo aceita apenas números.");
        return false;
    }
    return true
}
function buscaCEP(){
    const numCEP = document.getElementById("CEP")
    const url = "https://viacep.com.br/ws/" + numCEP.value +"/json/"
    const localidade = document.getElementById("localidade")
    const bairro = document.getElementById("bairro")
    const logradouro = document.getElementById("logradouro")
    
    
    
    function limpaCampos(){
        numCEP.value = ""
        logradouro.value = ""
        bairro.value = ""
        localidade.value = ""
        alert("CEP não encontrado.")
        numCEP.focus()
    }
      
    function trataRetorno(data){
        if(data.erro){
            limpaCampos()
            return
        }
          
        logradouro.value = data.logradouro
        bairro.value = data.bairro
        localidade.value = data.localidade
    }
    
    const regexCep = /\d{5}-\d{3}/
    
    if(regexCep.test(numCEP.value)){  
        fetch(url, {method: 'GET'})
        .then(response => {
            response.json().then(trataRetorno)
        })
        .catch(limpaCampos)
    }
}
function validarFormCadastro(){
    var nome = formCadastro.nome.value
    var email = formCadastro.email.value
    var telefone = formCadastro.telefone.value
    var CPF = formCadastro.CPF.value
    var CEP = formCadastro.CEP.value


    if(nome == ""){
        alert("Campo nome é Obrigatorio.")
        formCadastro.nome.focus();
        return false
    }
    if(email == ""){
        alert("Campo email é Obrigatorio.")
        formCadastro.email.focus();
        return false
    }
    if(telefone == ""){
        alert("Campo telefone é Obrigatorio.")
        console.log(telefone)
        return false
    }
    if(CPF == ""){
        alert("Campo CPF é Obrigatorio.")
        formCadastro.CPF.focus();
        return false
    }
    if(CEP == ""){
        alert("Campo CEP é Obrigatorio.")
        formCadastro.CEP.focus();
        return false
    }if (true){

    }
}

