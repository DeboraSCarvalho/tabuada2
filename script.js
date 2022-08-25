/* Receber um valor inteiro 
(aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.*/

let valor = document.querySelector("div.container input");
let tabuada = document.querySelector("div.container div.tabuada");

const calcular = document.querySelector("div.container button");

calcular.addEventListener("click", () => {

    if(Number(valor.value) < 1 || Number(valor.value) > 10){
        tabuada.innerHTML = "Insira um valor no intervalo de 1 a 10"
    }else{
        for(i = 1; i <= 10; i++){
            let calc = String(i) + "  x  " + valor.value + " = " + i * Number(valor.value);
            
            let resultado = document.createElement("p")

            resultado.innerText = calc


            tabuada.appendChild(resultado);
        }
    }

})