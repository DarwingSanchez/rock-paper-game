var btnPiedra = document.getElementById('btn-piedra'); //1 es piedra
var btnPapel = document.getElementById('btn-papel');//2 es Papel
var btnTijera = document.getElementById('btn-tijera'); //3 Tijera

btnPiedra.addEventListener('click',piedra,true);
btnPapel.addEventListener('click',papel, true);
btnTijera.addEventListener('click', tijera, true);



function piedra(){
    var x = calculo();
    var contador;
    switch(x){
        case 1:
            alert("Empate");
            break;
        case 2:
            contador = parseInt(document.getElementById("ct-cpu").innerHTML);
            contador++;
            document.getElementById("ct-cpu").innerHTML = String(contador)
            alert("CPU: Papel \nUsuario: Piedra \nPerdiste")
            break;
        case 3:
            contador = parseInt(document.getElementById("ct-user").innerHTML);
            contador++;
            document.getElementById("ct-user").innerHTML = String(contador)
            alert("CPU: Tijera \nUsuario: Piedra, Ganaste")
            break;
        default: alert("No se pudo jugar");
    }
}
function papel(){
    var x = calculo();
    var contador;
    switch(x){
        case 1:
            contador = parseInt(document.getElementById("ct-user").innerHTML);
            contador++;
            document.getElementById("ct-user").innerHTML = String(contador)
            alert("CPU: Piedra \nUsuario: Papel \nGanaste")
            break;
        case 2:
            alert("Empate");
            break;
        case 3:
            contador = parseInt(document.getElementById("ct-cpu").innerHTML);
            contador++;
            document.getElementById("ct-cpu").innerHTML = String(contador)
            alert("CPU: Tijera \nUsuario: papel \nPerdiste")
            break;
        default: alert("No se pudo jugar");
    }
}
function tijera(){
    var x = calculo();
    var contador;
    switch(x){
        case 1:
            contador = parseInt(document.getElementById("ct-cpu").innerHTML);
            contador++;
            document.getElementById("ct-cpu").innerHTML = String(contador)
            alert("CPU: Piedra \nUsuario: Tijera \nPerdiste")
            break;
        case 2:
            contador = parseInt(document.getElementById("ct-user").innerHTML);
            contador++;
            document.getElementById("ct-user").innerHTML = String(contador)
            alert("CPU: Papel \nUsuario: tijera \nGanaste")
            break;
        case 3:
            alert("Empate");
            break;
        default: alert("No se pudo jugar");
    }
}
function calculo(){
    var num = Math.floor(Math.random() * (4 - 1 )) + 1;
    return num;
}