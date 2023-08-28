// for reapting bubble:
function MakeBubble() {
    var Clutter = "";
    for (var i = 1; i <= 168; i++) {
        var randi = Math.floor(Math.random()*10)
        Clutter += `<div class="bubble">${randi}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = Clutter;   
}


var Timezone = 60;
function runTimer() {
    var Timer = setInterval(function () {
        if (Timezone > 0) {
            Timezone--;
            document.querySelector("#timervalue").textContent = Timezone;
        }
        else {
            clearInterval(Timer);
            document.querySelector("#pbtm").innerHTML = `<h1> Game over..🤣</h1>`;

        }
    }, 1000);
}

var hitrn;
function getNewhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn
}

var Score = 0;
function increaseScore() {
    Score += 10;
    document.querySelector("#Scoreval").textContent = Score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets){
     var clickednum = Number(dets.target.textContent) ;
     if (clickednum === hitrn) {
         increaseScore();
         MakeBubble();
         getNewhit();
        }
    });
 

MakeBubble();
runTimer();
getNewhit();
increaseScore();
