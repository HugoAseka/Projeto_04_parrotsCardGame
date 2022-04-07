

const numCartas = prompt("Quantas Cartas?");
while ( numCartas%2 !== 0 || numCartas < 2 || numCartas > 14 ){
    numCartas = prompt ("Número inválido. Insira num par entre 2 e 14.")
}
const midiaCartas = [
    "midia/bobrossparrot.gif",
    "midia/explodyparrot.gif",
    "midia/fiestaparrot.gif",
    "midia/metalparrot.gif",
    "midia/revertitparrot.gif",
    "midia/tripletsparrot.gif",
    "midia/unicornparrot.gif"
];
const midiaEscolhida = [];



for (let i = 0 ; i < numCartas/2 ; i++){
    midiaEscolhida.push(midiaCartas[i]);
    midiaEscolhida.push(midiaCartas[i]);
}
midiaEscolhida.sort(comparador);
function comparador(){
    return Math.random() - 0.5;
}

for ( index = 0 ; index < numCartas ; index++ ){
    document.querySelector("ul").innerHTML += `
    <ul class="card">
    <li class="front-face face"><img src="midia/front.png"></li>
    <li class="back-face face"><img src= "${midiaEscolhida[index]}" ></li>
    </ul>
    `
    
}





 