var pesoInput = document.querySelector('input#peso')
var alturaInput = document.querySelector('input#altura')
var resp = document.querySelector('div#res')

function Calcular (){
    
    

    const peso = +pesoInput.value.replace(",", ".");
    const altura = +alturaInput.value.replace(",", ".");

    
    
    if(peso <= 0 && altura <=0){
        resp.innerHTML+=('Digite seus dados corretamente!')
    }else{
        const imc = (peso / (altura * altura)).toFixed(2)
        if (imc < 17) {
            resp.style.background = 'red'
            resp.style.borderRadius = '10px'
            resp.innerHTML = (`Seu IMC:  ${imc} Muito abaixo do peso`)
          } else if (imc >= 17 && imc <= 18.49) {
            resp.style.background = '#F57100'
            resp.style.borderRadius = '10px'
            resp.innerHTML = (`Seu IMC:  ${imc} Abaixo do peso"`)
          } else if (imc >= 18.5 && imc <= 24.99) {
            resp.style.background = 'green'
            resp.style.borderRadius = '10px'
            resp.innerHTML = (`Seu IMC:  ${imc} Peso normal`)
          } else if (imc >= 25 && imc <= 29.99) {
            resp.style.background = '#F57100'
            resp.style.borderRadius = '10px'
            resp.innerHTML = (`Seu IMC:  ${imc} Acima do peso`)
          } else if (imc >= 30 && imc <= 34.99) {
            resp.style.background = 'red'
            resp.style.borderRadius = '10px'
            resp.innerHTML = (`Seu IMC:  ${imc} Obesidade I`)
          } else if (imc >= 35 && imc <= 39.99) {
            resp.style.background = 'red'
            resp.style.borderRadius = '10px'
            resp.innerHTML = (`Seu IMC: ${imc} Obesidade II (severa)`)
          } else if (imc > 40) {
            resp.style.background = 'red'
            resp.style.borderRadius = '10px'
            resp.innerHTML = (`Seu IMC: ${imc} Obesidade III (mórbida)`)
          } 
    }
    
}

function Limpar(){
    pesoInput.value= '';
    alturaInput.value = '';
    resp.innerHTML=''
}