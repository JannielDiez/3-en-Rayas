var map = [0, 0, 0, 0, 0, 0, 0, 0, 0,];
var player = 1;


function design() {
    for (let i = 0; i < map.length; i++) {

        if (map[i] == 0){
            document.getElementById("c" + i).style.backgroundColor = 'transparent';
        }
        if (map[i] == 1) {
            document.getElementById("c" + i).src='img/o.png';
        }
        if (map[i] == 2) {
            document.getElementById("c" + i).src='img/x.png';
        }
    }
}

function cell(num) {
    let element = document.getElementById("winner");
    if (map[num] == 0) {
        if (player == 1) {
            map[num] = 1
            player = 2
        } else {
            map[num] = 2
            player = 1
        }
    }else {
        console.log("celda ya coloreada");
    }
    design();
    let result = ganador();
    switch (result) {
        case 0:
            break;
        case 1:
            element.innerHTML="The winner is O"
            console.log("Gana rojo");
            clearEvent();
            break;
        case 2:
            element.innerHTML="The winner is X"
            console.log("Gana azul");
            clearEvent();
            break;
        case 3:
            element.innerHTML="Tie"
            console.log("empate");
            clerEvent();
            break;
    }
}
function ganador(){
    var numEspacios=0;
    for(i=0; i<9; i++){
        if(map[i] == 0) numEspacios++;
    }
// Las líneas horizontales
    if(map[0] == map[1] && map[1] == map[2] && map[0] !=0) return map[0];
    if(map[3] == map[4] && map[4] == map[5] && map[3] !=0) return map[3];
    if(map[6] == map[7] && map[7] == map[8] && map[6] !=0) return map[6];
//Las líneas verticales
    if(map[0] == map[3] && map[3] == map[6] && map[0] !=0) return map[0];
    if(map[1] == map[4] && map[4] == map[7] && map[1] !=0) return map[1];
    if(map[2] == map[5] && map[5] == map[8] && map[2] !=0) return map[2];
//Las diagonales
    if(map[0] == map[4] && map[4] == map[8] && map[0] !=0) return map[0];
    if(map[2] == map[4] && map[4] == map[6] && map[2] !=0) return map[2];

    if (numEspacios > 0){
        return 0;
    } else {
        return 3;
    }
}

function clearEvent() {
    let frame = document.getElementById("frame");
    frame.style.pointerEvents="none";
}