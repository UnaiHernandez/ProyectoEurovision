$(document).ready(function(){

    $('.menu').click(function(){
        $('nav').toggle('.active');
    })
});


var listaPaises=["Albania","Armenia","Australia","Austria","Azerbaiyán",
                "Bielorrusia","Belgica","Bulgaria",
                "Croacia","Chipre","Republica Checa",
                "Dinamarca",
                "Estonia",
                "Finlandia","Francia",
                "Georgia","Alemania","Grecia",
                "Islandia","Irlanda","Israel","Italia",
                "Letonia","Lituania",
                "Malta","Moldavia",
                "Madedonia del norte", "Noruega", 
                "Polonia", "Portugal",
                "Rumania","Rusia",
                "San Marino", "Serbia", "Eslovenia","España","Suecia","Suiza",
                "Paises Bajos", 
                "Ucrania", "Reino Unido"];
var listaPaisesIngles=[
    'albania','armenia','australia','austria','azerbaijan',
    'belarus','belgium','bulgaria',
    'croatia','cyprus','czechRepublic',
    'denmark',
    'estonia',
    'finland','france',
    'georgia','germany','greece',
    'iceland','ireland','israel','italy',
    'latvia', 'lithuania',
    'malta', 'moldava',
    'northMacedonia', 'norway',
    'poland','portugal',
    'romania','russia',
    'sanMarino','serbia','slovenia','spain','sweeden','switzerland',
    'theNetherlands',
    'ukraine','unitedKingdom'
]
var infoParticipantes=[
    ["Sin seleccionar","Sin canción todavía"],
    ["Sin seleccionar","Sin canción todavía"],
    ["Montaigne","Zero Gravity"],
    ["Vincent Bueno","Sin canción todavía"],
    ["Efendi","Sin canción todavía"],//5
    ["Sin seleccionar","Sin canción todavía"],
    ["Hooverphonic","Rhythm Inside"],
    ["Victoria","Sin canción todavía"],//
    ["Sin seleccionar","Sin canción todavía"],
    ["Elena Tsagrinou","Fuego"],/*10 */
    ["Benny Cristo","Sin canción todavía"],
    ["Sin seleccionar","Sin canción todavía"],
    ["Sin seleccionar","Sin canción todavía"],
    ["Sin seleccionar","Sin canción todavía"],
    ["Sin seleccionar","Sin canción todavía"],/*15*/
    ["Tornike Kipiani","Sin canción todavía"],
    ["Sin seleccionar","Sin canción todavía"],
    ["Stefania","Sin canción todavía"],///
    ["Daoi og Gagnamagnio","Sin canción todavía"],
    ["Sin seleccionar","Sin canción todavía"],/*20 */
    ["Eden Alene","Toy boy"],
    ["Sin seleccionar","Sin canción todavía"],
    ["Samanta Tina","Sin canción todavía"],
    ["Sin seleccionar","Sin canción todavía"],
    ["Destiny","Sin canción todavía"],
    ["Sin seleccionar","Sin canción todavía"],
    ["Sin seleccionar","Sin canción todavía"],
    ["Keiino","Spirit in the sky"],
    ["Sin seleccionar","Sin canción todavía"],
    ["Sin seleccionar","Sin canción todavía"],/*30 */
    ["Roxen","Sin canción todavía"],
    ["Sin seleccionar","Sin canción todavía"],
    ["Senhit","Sin canción todavía"],
    ["Sin seleccionar","Sin canción todavía"],
    ["Ana Soklic","Sin canción todavía"],
    ["Blas Cantó","Universo"],
    ["Benjamin Ingrossso","Dance You Off "],
    ["Gjons's Tears","Sin canción todavía"],
    ["Jeangu Macrooy","Arcade"],
    ["Go_A","Sin canción todavía"],/*40 */
    ["Sin seleccionar","Sin canción todavía"]
]

var index=0;
var primeraVez=true;
function buscarParticipante(){
    
 let userInputPais=document.getElementById('seleccionaPais').value; 
 userInputPais=userInputPais[0].toUpperCase() + userInputPais.slice(1);
 if(!listaPaises.includes( userInputPais )){
    document.getElementById('seleccionaPais').value="País no encontrado";
 }else{
     index=listaPaises.indexOf(userInputPais);
     selectorPais(index)
     
 }

}


function selectorPais(index){
    let articulo=document.getElementById('articuloParticipante');
    let imagenCor=document.getElementById('imagenCor');
    let nombre=document.getElementById('nombreArista');
    let titulo=document.getElementById('titulaCancion');
    let audio=document.getElementById('audioCancion');
    let rutaCorazones="./recursos/img/paises/corazones/";
    let rutaCanciones="./recursos/songs/";

    document.getElementById('cantantesInicio').style.display = 'none';
    articulo.style.display='block';

    articulo.className="cantante-"+listaPaisesIngles[index];
    imagenCor.setAttribute("src", rutaCorazones+listaPaisesIngles[index]+".svg");
    nombre.innerHTML=infoParticipantes[index][0];
    titulo.innerHTML=infoParticipantes[index][1];
    if(infoParticipantes[index][1]!="Sin canción todavía"){
        audio.style.display = 'block';
        audio.setAttribute("src", rutaCanciones+listaPaisesIngles[index]+".mp3");
    }else{
        audio.style.display = 'none';
    }
    
    
}

function volverArticuloInicio(){
    location.reload();
    //document.getElementById('articuloParticipante').style.display = 'none';
    //document.getElementById('cantantesInicio').style.display = 'block';
}

function pararAudio(){
    if(document.getElementById('audioCancion')){
        let audio=document.getElementById('audioCancion');
        audio.pause();
    }
    if(document.getElementById('audioCanciondesktop')){
        let audio=document.getElementById('audioCanciondesktop');
        audio.pause();
    }
    
}

function haciaAtras(){
    pararAudio();
    if(primeraVez){
        primeraVez=false;
        selectorPais(index);
    }else{
        if(index==0){
            index=40;
            selectorPais(index);
        } else {
            index--;
            selectorPais(index);
        }
    }
    

}



function haciaDelante(){
    pararAudio();
    if(primeraVez){
        primeraVez=false;
        selectorPais(index);
    }else{
        if (index==40) {
            index=0;
            selectorPais(index);
        } else {
            index++;
            selectorPais(index);
        }
    }

}

function activarArticulo(id_elemento){
    
    if(document.getElementById(id_elemento).style.display!='block'){
        document.getElementById(id_elemento).style.display='block';
    }else if(document.getElementById(id_elemento).style.display=='block'){
        document.getElementById(id_elemento).style.display='none';
    }
}


function clickBandera(indice){
    pararAudio();
    let rutaCorazones="./recursos/img/paises/corazones/";
    let rutaCanciones="./recursos/songs/";
    document.getElementById('articuloParticipante').style.display='none';
    let articulo=document.getElementById('cantantesInicioDesktop');
    let nombre=document.getElementById('nombreAristaDesktop');
    let cancion=document.getElementById('titulaCancionDesktop');
    let logo=document.getElementById('logoParticipantesDesktop').style.display='none';
    let audio=document.getElementById('audioCanciondesktop');
    let video=document.getElementById('video');
    let corazon=document.getElementById('corazonDesktop');

    let clases=articulo.classList;
    if(clases.length>1){
       let ultimaClase=clases[clases.length-1];
       articulo.classList.remove(ultimaClase)
    }
    articulo.className="cantanteDesktop-"+listaPaisesIngles[indice];
    //articulo.classList.add("cantanteDesktop-"+listaPaisesIngles[indice]);
    nombre.innerHTML=infoParticipantes[indice][0];
    cancion.innerHTML=infoParticipantes[indice][1];
    corazon.setAttribute("src", rutaCorazones+listaPaisesIngles[indice]+".svg");

    if(infoParticipantes[indice][1]!="Sin canción todavía"){
        audio.style.display = 'block';
        audio.setAttribute("src", rutaCanciones+listaPaisesIngles[indice]+".mp3");
        video.style.display ="block";
        video.innerHTML='<iframe width="392" height="220" src="https://www.youtube.com/embed/U2UmYBkszOA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }else{
        audio.style.display = 'none';
        video.innerHTML=""
        video.style.display ="none";
    }
}

$(window).resize(function () 
{
    let video=document.getElementById('video');
    video.innerHTML="";
});


function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

