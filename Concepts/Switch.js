document.write('</br><h1>Switch</h1></br>')
document.write(' </br><h2>Escolha seu pedido:</h2> ')
document.write(' </br><p> 0 - IceCream / 1- Juice</p> ')
document.write(' <p>2 - CocaCola/ 3 - Water </p> </br>')
document.write('<button onClick="active()">Ativar Switch</button>')
function active(){
    z= prompt("Digit Value:");
    switch(z){
        case "0":
            alert("Voce escolheu um IceCream!");
            break;
        case "1":
            alert("Voce escolheu um Juice!")
            break;
        case "2": 
            alert("Voce escolheu uma CocaCola!")
            break;
        case "3":
            alert("Voce escolheu uma Water!")
            break;
        default:
            alert("Ops nao temos essa opcao")
            break;
    }
}

