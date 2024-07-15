let abrir = () => {
    let logar = document.getElementById("logar")
    if(logar.className == "logar"){
        logar.className = "logar_ativo"
    }
}

let fechar = () => {
    let logar = document.getElementById("logar")
    if(logar.className == "logar_ativo"){
        logar.className = "logar"
    }
}

let calcular = () => {
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let textoresultado = document.getElementById('resultado')    
    let imc = document.getElementById('imc')
    imc.innerHTML = peso / (altura * altura)
    if(peso == '' && altura > 0){
        imc.innerHTML = ''
        textoresultado.innerHTML = ''
    }
    else if(altura == '' && peso > 0){
        imc.innerHTML = ''
        textoresultado.innerHTML = ''
    }
    else if(imc.innerHTML < 19){
        textoresultado.innerHTML = 'Abaixo Do Peso!!!'
    }
    else if(imc.innerHTML <= 25){
        textoresultado.innerHTML = 'Peso Normal!!!'
    }
    else if(imc.innerHTML <= 30){
        textoresultado.innerHTML = 'Acima Do Peso!!!'
    }
    else if(imc.innerHTML <= 35){
        textoresultado.innerHTML = 'Obesidade Grau I !!!'
    }
    else if(imc.innerHTML <= 40){
        textoresultado.innerHTML = 'Obesidade Grau II !!!'
    }
    else if(imc.innerHTML > 40){
        textoresultado.innerHTML = 'Obesidade Grau III !!!'
    }
    else{
        imc.innerHTML = ''
        textoresultado.innerHTML = ''
        alert('Digite o seu Peso e a sua Altura!!!')
    }
}

let remove = () => {
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')
    let textoresultado = document.getElementById('resultado')
    let imc = document.getElementById('imc')
    imc.innerHTML = ''
    textoresultado.innerHTML = ''
    peso.value = ''
    altura.value = ''
}