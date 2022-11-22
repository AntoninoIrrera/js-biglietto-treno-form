
const invioDati = document.querySelector("a.btn-outline-success");
const age = document.getElementById("age");
const numeroKm = document.getElementById("numeroKm");


invioDati.addEventListener("click", function(){
    
    let prezzoBigliettoBase;
    let prezzoBigliettoUnder;
    let prezzoBigliettoOver;

    prezzoBigliettoBase = 0.2762 * numeroKm.value;

    if(age.value < 18){
        prezzoBigliettoUnder = prezzoBigliettoBase * 0.825;
        document.getElementById("output").innerHTML ="Il prezzo del tuo biglietto sarà: " + prezzoBigliettoUnder.toFixed("2") + " euro";
    }
    else if (age.value >= 65){
        prezzoBigliettoOver = prezzoBigliettoBase * 0.667;
        document.getElementById("output").innerHTML ="Il prezzo del tuo biglietto sarà: " + prezzoBigliettoOver.toFixed("2") + " euro";
    }
    else{
        document.getElementById("output").innerHTML ="Il prezzo del tuo biglietto sarà: " + prezzoBigliettoBase.toFixed("2") + " euro";
    }


});
