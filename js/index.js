let x=300, y=500;
let xmala=300, ymala=20;
let xo1=100, yo1=125;
let xo2=450, yo2=125;

function dibujar(){
  var c = document.getElementById("miCanvas");
  var ctx = c.getContext("2d");
  x1=c.width;
  y1=c.height;
  
  ctx.clearRect(0,0,x1,y1)
  
  /* cambio el color del fondo */
  ctx.fillStyle="#A9CCE3"
  ctx.fillRect(0, 0, x1, y1);

  /* acomodo al personaje */
  var nave = new Image();
    nave.src="imagen/personajes/naveBuena.png"
    ctx.drawImage(nave, x, y);
  
/* nave enemigo */
    var naveMala = new Image();
    naveMala.src="imagen/personajes/naveMala.png"
    ctx.drawImage(naveMala, xmala, ymala);

    /* obstaculo 1 */
    var ob1 = new Image();
    ob1.src="imagen/personajes/asteroide1.png"
    ctx.drawImage(ob1, xo1, yo1)

    /* obstaculo 2 */
    var ob2 = new Image();
    ob2.src="imagen/personajes/asteroide2.png"
    ctx.drawImage(ob2, xo2, yo2);


}

function apretarBoton(event){
  if(event.keyCode == '39'){ //derecha
    x = ( (x + 10)> 550)?550:x+10;
    xmala = ( (xmala + Math.random()*100)> 550)?550:xmala+Math.random()*100;
    xo1 = ( (xo1 + Math.random()*20)> 550)?20:xo1+Math.random()*20;
    yo1 = ( (yo1 + Math.random()*20)> 650)?125:yo1+Math.random()*20;
    xo2 = ( (xo2 + Math.random()*25)> 550)?20:xo2+Math.random()*25;
    yo2 = ( (yo2 + Math.random()*25)> 650)?125:yo2+Math.random()*25;
    dibujar();
  }
  if(event.keyCode == '37'){ //izquierda
    x = ( (x - 10)< 10)?10:x-10;
    xmala = ( (xmala - Math.random()*100)<10)?10:xmala-Math.random()*100;
    xo1 = ( (xo1 + Math.random()*20)< 10)?550:xo1-Math.random()*20;
    yo1 = ( (yo1 + Math.random()*20)< 10)?125:yo1-Math.random()*20;
    xo2 = ( (xo2 + Math.random()*25)< 10)?550:xo2-Math.random()*25;
    yo2 = ( (yo2 + Math.random()*25)< 10)?125:yo2-Math.random()*25;
    dibujar();
  }
}
