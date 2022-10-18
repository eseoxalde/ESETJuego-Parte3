//variables globales usadas para posicionar los personajes al comenzar el juego
let x=300, y=500;
let xmala=300, ymala=20;
let xo1=100, yo1=125;
let xo2=450, yo2=125;


//La función dibujar() conecta el canvas, lo borra y lo vuelve a dibujar, dibujando también todos los personajes
function dibujar(){
  var c = document.getElementById("miCanvas");
  var ctx = c.getContext("2d");
  //x1 e y1 tienen el ancho y largo total del canvas
  x1=c.width;
  y1=c.height;

  //borro el canvas completo.
  ctx.clearRect(0,0,x1,y1)
  
  /* cambio el color del fondo */
  ctx.fillStyle="#A9CCE3"
  ctx.fillRect(0, 0, x1, y1);

  /* acomodo al personaje */
  var nave = new Image();                       //creo el objeto
    nave.src="imagen/personajes/naveBuena.png"  //le asigno una imagen. OJO con el path!
    ctx.drawImage(nave, x, y);                  //dibuja el personaje
  
  /* acomodo la nave enemigo */
    var naveMala = new Image();
    naveMala.src="imagen/personajes/naveMala.png"
    ctx.drawImage(naveMala, xmala, ymala);

    /* acomodo el obstaculo 1 */
    var ob1 = new Image();
    ob1.src="imagen/personajes/asteroide1.png"
    ctx.drawImage(ob1, xo1, yo1)

    /* acomodo el obstaculo 2 */
    var ob2 = new Image();
    ob2.src="imagen/personajes/asteroide2.png"
    ctx.drawImage(ob2, xo2, yo2);
}//fin de la función dibujar


/* La función apretarBoton(event) acomoda el valor de las "x" y las "y" de cada personaje dependiendo la tecla apretada
  luego llama a la función dibujar para que dibuje a los personajes con esas nuevas x e y.
  */
function apretarBoton(event){
  if(event.keyCode == '39'){ //derecha
          // cmabio la x de la nave, solo se mueve de forma horizontal
    x = ( (x + 10)> 550)?550:x+10;
          // cmabio la x (xmala) de la nave enemiga, solo se mueve de forma horizontal
    xmala = ( (xmala + Math.random()*100)> 550)?550:xmala+Math.random()*100;
          // cmabio la x e y (xo1 e yo1) del objeto 1, se mueve de forma horizontal y vertical
          //utilizo Math.random para tener valores aleatorios
    xo1 = ( (xo1 + Math.random()*20)> 550)?20:xo1+Math.random()*20;
            // la linea anterior es equivalente a utilizar un if
             // if( (xo1 + Math.random()*20)> 550) { xo1 = 20 } else {xo1=xo1+Math.random()*20}
    yo1 = ( (yo1 + Math.random()*20)> 650)?125:yo1+Math.random()*20;
            // cmabio la x e y (xo2 e yo2) del objeto 2, se mueve de forma horizontal y vertical
    xo2 = ( (xo2 + Math.random()*25)> 550)?20:xo2+Math.random()*25;
    yo2 = ( (yo2 + Math.random()*25)> 650)?125:yo2+Math.random()*25;
            //llamo a la función dibujar
    dibujar();
  } //fin del if derecha
  if(event.keyCode == '37'){ //izquierda
          // cmabio la x de la nave, solo se mueve de forma horizontal
    x = ( (x - 10)< 10)?10:x-10;
          // cmabio la x (xmala) de la nave enemiga, solo se mueve de forma horizontal
    xmala = ( (xmala - Math.random()*100)<10)?10:xmala-Math.random()*100;
          // cmabio la x e y (xo1 e yo1) del objeto 1, se mueve de forma horizontal y vertical
    xo1 = ( (xo1 + Math.random()*20)< 10)?550:xo1-Math.random()*20;
    yo1 = ( (yo1 + Math.random()*20)< 10)?125:yo1-Math.random()*20;
            // cmabio la x e y (xo2 e yo2) del objeto 2, se mueve de forma horizontal y vertical
    xo2 = ( (xo2 + Math.random()*25)< 10)?550:xo2-Math.random()*25;
    yo2 = ( (yo2 + Math.random()*25)< 10)?125:yo2-Math.random()*25;
                //llamo a la función dibujar
    dibujar();
  } //fin del if izquierda
} //fin de la función apretarBoton(event)
