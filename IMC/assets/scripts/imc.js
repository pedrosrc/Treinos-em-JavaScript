

function Calcular (){
    const pesoInput = document.querySelector('input#peso')
    const alturaInput = document.querySelector('input#altura')
    const resp = document.querySelector('div#res')
    
    
    const peso = +pesoInput.value.replace(",", ".");
    const altura = +alturaInput.value.replace(",", ".");
    
    if(peso <= 0 && altura <=0){
        resp.innerHTML+=('Digite seus dados corretamente!')
    }else{
        const imc = (peso / (altura * altura)).toFixed(2)
        resp.innerHTML=(`Seu imc ${imc}`)
    }
}

function Limpar (){
    if(Calcular){
    resp.innerHTML=""
    return
    }
}