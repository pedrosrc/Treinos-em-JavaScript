const inputActual = document.getElementById('valueCurrent')
const inputAfter = document.getElementById('valueAfter')


const valueUpdate = () => {
    const coinActual = document.getElementById('coinCurrent');
    const coinAfter = document.getElementById('coinAfter');

    price(coinActual.value, coinAfter.value);
};

const price = (coinAtual, coinThen) => {
    const url = `https://economia.awesomeapi.com.br/json/last/${coinThen}-${coinAtual}`;

    if (coinAtual == coinThen) {
        inputAfter.value = inputActual.value;
    }
    else {
        fetch(url)
            .then((dados) => dados.json())
            .then((resposta) => resposta[`${coinThen}${coinAtual}`])
            .then((detalhesApi) => detalhesApiPrice(detalhesApi))
            .then((price) => {
                const valueActual = parseFloat(inputActual.value);
                inputAfter.value =(!valueActual ? "0,00" : (valueActual / price.valorVenda).toFixed(2))
            })
            .catch((error) => console.log(error))
    }
};
const detalhesApiPrice = (api) => {
    const detalhes = new DetalhesCotacao();
    detalhes.codigo = api.code;
    detalhes.valorCompra = parseFloat(api.bid);
    detalhes.valorVenda = parseFloat(api.ask);
    detalhes.variacao = api.varBid;
    return detalhes;
};
class DetalhesCotacao {
}