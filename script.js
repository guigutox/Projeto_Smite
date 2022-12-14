var vida = 1000;
var dano = 100;
var minTick = 100;
var maxTick = 300;
var minTime = 400;
var maxTime = 400;
var timeRate =  getTime();
const timerSpan = document.getElementById("timer");
const resultadoSpan= document.getElementById("resultado");
var smite = document.getElementById("smite");

smite.addEventListener("click", function(){

    if(dano >= vida){
        resultadoSpan.textContent = "VOCE ACERTOU O SMITE";
        smite.disabled = true;
        clearInterval(idInterval);
    }else{
        resultadoSpan.textContent = "VOCE ERROU O SMITE";
        smite.disabled = true;
        clearInterval(idInterval);
    }
})
    

var idInterval = setInterval(function(){

        var tickRate = getTick();
        if(tickRate > vida || vida < 0){
            clearInterval(idInterval);
            vida = 0;
            console.log(vida);
            timerSpan.textContent = vida;
            smite.disabled = true;
            resultadoSpan.textContent = "VOCE ERROU O SMITE";

        }else{
            vida = vida - tickRate;
            console.log(vida);
            timerSpan.textContent = vida;
        }

},timeRate);




function getTime(){
    return Math.round(Math.random() * (maxTime - minTime)+minTime);
}

function getTick(){
    return Math.round(Math.random() * (maxTick-minTick)+minTick);
}