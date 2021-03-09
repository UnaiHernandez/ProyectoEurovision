var hh = document.getElementById("segmentoHH");
var h = document.getElementById("segmentoH");
    
var mm = document.getElementById("segmentoMM");
var m = document.getElementById("segmentoM");

var ss = document.getElementById("segmentoSS");
var s = document.getElementById("segmentoS");

var blanco= "rgb(214, 234, 248)";
var gris="rgb(93, 109, 126)";


let segmentosPintarHH=['A','B','C','D','E','F','G'];
let segmentosPintarH=['A','B','C','D','E','F','G'];
let segmentosPintarMM=['A','B','C','D','E','F','G'];
let segmentosPintarM=['A','B','C','D','E','F','G'];
let segmentosPintarSS=['A','B','C','D','E','F','G'];
let segmentosPintarS=['A','B','C','D','E','F','G'];

function pintarPuntos(){
    var puntos1 = document.getElementById("puntos1");
    var puntos2 = document.getElementById("puntos2");
    var ctx = puntos1.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle=gris;
    ctx.arc(30, 80, 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.arc(30, 200, 20, 0, 2 * Math.PI);
    ctx.fill();
    var ctx = puntos2.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle=gris;
    ctx.arc(30, 80, 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.arc(30, 200, 20, 0, 2 * Math.PI);
    ctx.fill();
}

setInterval(obtenerHora, 1000);

function obtenerHora(){
    
    let momentoActual=new Date();
    let hora = momentoActual.getHours() 
    let minuto = momentoActual.getMinutes() 
    let segundo = momentoActual.getSeconds() 

    let valorSS;
    let valorS
    if(segundo<=9){
         valorSS = '0'
         valorS = segundo.toString()[0];
    }else{
         valorSS = segundo.toString()[0];
         valorS = segundo.toString()[1];
    }
    
    let valorM;
    let valorMM;
    if(minuto<10){
        valorMM = '0'
        valorM = minuto.toString()[0];
    }else{
        valorMM = minuto.toString()[0];
        valorM = minuto.toString()[1];
    }

    let valorH ;
    let valorHH;
    if(hora<10){
         valorHH = '0'
         valorH = hora.toString()[0];
    }else{
         valorHH = hora.toString()[0];
         valorH = hora.toString()[1];
    }
   
    pintar(hh,segmentosPintarHH,blanco);
    pintar(h,segmentosPintarH,blanco);
    pintar(mm,segmentosPintarMM,blanco);
    pintar(m,segmentosPintarM,blanco);
    pintar(ss,segmentosPintarSS,blanco);
    pintar(s,segmentosPintarS,blanco);

    segmentosPintarHH=obtenerSegmentos(valorHH);
    segmentosPintarH=obtenerSegmentos(valorH);
    segmentosPintarMM=obtenerSegmentos(valorMM);
    segmentosPintarM=obtenerSegmentos(valorM);
    segmentosPintarSS=obtenerSegmentos(valorSS);
    segmentosPintarS=obtenerSegmentos(valorS);

    pintarPuntos();

    pintar(hh,segmentosPintarHH,gris);
    pintar(h,segmentosPintarH,gris);
    pintar(mm,segmentosPintarMM,gris);
    pintar(m,segmentosPintarM,gris);
    pintar(ss,segmentosPintarSS,gris);
    pintar(s,segmentosPintarS,gris);
}


function obtenerSegmentos(valor){
     let listaSegmentos=[]
     switch(valor){
        case '0':
             listaSegmentos=['A','B','C','D','E','F'];
             break;
        case '1':
            listaSegmentos=['B','C'];
            break;
        case '2':
            listaSegmentos=['A','B','G','E','D'];
            break;
        case '3':
            listaSegmentos=['A','B','G','C','D'];
            break;
        case '4':
            listaSegmentos=['F','B','G','C'];
            break;
        case '5':
            listaSegmentos=['A','F','G','C','D'];
            break;
        case '6':
            listaSegmentos=['A','F','G','E','C','D'];
            break;
        case '7':
            listaSegmentos=['A','B','C'];
            break;
        case '8':
            listaSegmentos=['A','B','C','D','E','F','G'];
            break;
        case '9':
            listaSegmentos=['A','B','C','D','F','G'];
            break; 
     }
     return listaSegmentos;
}

function pintar(contexto,segmentosPintar,color){
    for(let i=0; i<segmentosPintar.length;i++){
        if(segmentosPintar[i]=='A'){
            segA(contexto,color);
        }else if(segmentosPintar[i]=='B'){
            segB(contexto,color);
        }else if(segmentosPintar[i]=='C'){
            segC(contexto,color);
        }else if(segmentosPintar[i]=='D'){
            segD(contexto,color);
        }else if(segmentosPintar[i]=='E'){
            segE(contexto,color);
        }else if(segmentosPintar[i]=='F'){
            segF(contexto,color);
        }else if(segmentosPintar[i]=='G'){
            segG(contexto,color);
        }
    }
    

}

function segA(canvas,color){
    //A
    let cntxA = canvas.getContext("2d");
    cntxA.fillStyle=color;
    cntxA.beginPath();
    cntxA.moveTo(40,0);
    cntxA.lineTo(120,0);
    cntxA.lineTo(140,20);
    cntxA.lineTo(120,40);
    cntxA.lineTo(40,40);
    cntxA.lineTo(20,20);
    cntxA.lineTo(40,0);
    cntxA.fill();
}


function segB(canvas,color){
    //B
    let cntxB = canvas.getContext("2d");
    cntxB.fillStyle=color;
    cntxB.beginPath();
    cntxB.moveTo(140,20);
    cntxB.lineTo(160,40);
    cntxB.lineTo(160,120);
    cntxB.lineTo(140,140);
    cntxB.lineTo(120,120);
    cntxB.lineTo(120,40);
    cntxB.lineTo(140,20);
    cntxB.fill();
}

function segC(canvas,color){
    //C
    let cntxC = canvas.getContext("2d");
    cntxC.fillStyle=color;
    cntxC.beginPath();
    cntxC.moveTo(140,140);
    cntxC.lineTo(160,160);
    cntxC.lineTo(160,240);
    cntxC.lineTo(140,260);
    cntxC.lineTo(120,240);
    cntxC.lineTo(120,160);
    cntxC.lineTo(140,140);
    cntxC.fill();
}

function segD(canvas,color){
    //D
    let cntxD = canvas.getContext("2d");
    cntxD.fillStyle=color;
    cntxD.beginPath();
    cntxD.moveTo(140,260);
    cntxD.lineTo(120,280);
    cntxD.lineTo(40,280);
    cntxD.lineTo(20,260);
    cntxD.lineTo(40,240);
    cntxD.lineTo(120,240);
    cntxD.lineTo(140,260);
    cntxD.fill();
}

function segE(canvas,color){
    //E
    let cntxE = canvas.getContext("2d");
    cntxE.fillStyle=color;
    cntxE.beginPath();
    cntxE.moveTo(20,260);
    cntxE.lineTo(0,240);
    cntxE.lineTo(0,160);
    cntxE.lineTo(20,140);
    cntxE.lineTo(40,160);
    cntxE.lineTo(40,240);
    cntxE.lineTo(20,260);
    cntxE.fill();
}

function segF(canvas,color){
    //F
    let cntxF = canvas.getContext("2d");
    cntxF.fillStyle=color;
    cntxF.beginPath();
    cntxF.moveTo(20,140);
    cntxF.lineTo(0,120);
    cntxF.lineTo(0,40);
    cntxF.lineTo(20,20);
    cntxF.lineTo(40,40);
    cntxF.lineTo(40,120);
    cntxF.lineTo(20,140);
    cntxF.fill();
}

function segG(canvas,color){
    //G
    let cntxG = canvas.getContext("2d");
    cntxG.fillStyle=color;
    cntxG.beginPath();
    cntxG.moveTo(20,140);
    cntxG.lineTo(40,120);
    cntxG.lineTo(120,120);
    cntxG.lineTo(140,140);
    cntxG.lineTo(120,160);
    cntxG.lineTo(40,160);
    cntxG.lineTo(20,140);
    cntxG.fill();
}



