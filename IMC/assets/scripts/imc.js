function Calcular(){
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let resp = document.getElementById('res')
    let imc = ''
    if(peso.length.value <= 0 || altura.length.value <=0 ){
        resp.innerHTML("Digite seu peso ou altura corretamente!")
    }else{
       
        imc = peso/(altura * altura)
        resp.innerHTML=(imc)
        //return imc
    }
}