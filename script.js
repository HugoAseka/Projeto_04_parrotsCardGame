

let numCartas = prompt("Quantas Cartas?");
while ( numCartas%2 !== 0 || numCartas < 4 || numCartas > 14 ){
    numCartas = prompt ("Número inválido. Insira número par entre 4 e 14.")
}

let relogio = document.querySelector(".relogio");
let segundos = 0;
const idRelogio = setInterval(function() {
    segundos++;
    relogio.innerHTML = segundos + " s";
}, 1000)







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
    <ul class="card" onclick="turnCard(this)">
        <li class="front-face face ">
            <img src="midia/front.png">
        </li>
        <li class="back-face face ">
            <img src= "${midiaEscolhida[index]}" >
        </li>
    </ul>
    `
}
let jogadas = 0;
let matches = 0;
let marcadorCartas = 0;
function turnCard(elemento){
    let cartaViradaBack = document.querySelector(".clickedBack");
    let cartaViradaFront = document.querySelector(".clickedFront")
    elemento.querySelector(".front-face").classList.add("clickedFront");
    elemento.querySelector(".back-face").classList.add("clickedBack");
    marcadorCartas++;
    if(cartaViradaBack !== null){
        if (elemento.querySelector(".back-face").innerHTML === cartaViradaBack.innerHTML){
            elemento.querySelector(".front-face").classList.add("matchFront");
            elemento.querySelector(".back-face").classList.add("matchBack");
            cartaViradaFront.classList.add("matchFront");
            cartaViradaBack.classList.add("matchBack");
            matches++;
        }
        setTimeout( function(){
            elemento.querySelector(".front-face").classList.remove("clickedFront");
            elemento.querySelector(".clickedBack").classList.remove("clickedBack");
            document.querySelector(".clickedBack").classList.remove("clickedBack");
            document.querySelector(".clickedFront").classList.remove("clickedFront");
        }, 1000);
        
    }
    jogadas++;

    if ( matches === numCartas/2){
        setTimeout(function(){
            alert(`Você ganhou em ${jogadas} jogadas e ${segundos} segundos!!`);
            let recomecar = prompt("Gostaria de recomeçar sim ou não?");
            if (recomecar === "sim"){window.location.reload();} else{alert("obrigado por jogar")};
            
        },100)
    }

}






 