let hi = document.getElementById("horaInicial");
let mi = document.getElementById("minutoInicial");
let hf = document.getElementById("horaFinal");
let mf = document.getElementById("minutoFinal");
let resultado = document.getElementById("resultado");

function soma(){
    let somaHora = Number(hi.value) + Number(hf.value);
    let somaMin = Number(mi.value) + Number(mf.value);
    while(somaMin > 59){
        somaMin -= 60;
        somaHora ++;
    }

    resultado.innerHTML = somaHora + ":" + somaMin
}
function sub(){
    let subHora = Number(hi.value) - Number(hf.value);
    let subMin = Number(mi.value) - Number(mf.value);

    while(subMin > 59){
        subMin -= 60;
        subHora ++;
    }

    resultado.innerHTML = subHora + ":" + subMin

}