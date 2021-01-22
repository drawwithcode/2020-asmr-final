let socket = io();

var w = 0;
var i = 1;

function preload(){
  document.getElementById("welcome").style.display = "none";
  // put preload code here
}

function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
}

function watch() {
  if (w == 0) {
    console.log('click')
    document.getElementById("overlay").style.opacity = "0";
    document.getElementById("bt2").style.backgroundImage = "url(/assets/images/lp/occhio-barrato.png)";
    w = 1
  } else if (w == 1) {
    document.getElementById("overlay").style.opacity = "1";
    document.getElementById("bt2").style.backgroundImage = "url(/assets/images/lp/occhio.png)";
    w = 0
  }
}

function gioca_1() {

}

function gioca_2() {

}

function gioca_3() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("elementiDx").style.display = "none";
  socket.emit("join", {id: socket.id});
}

function home() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("elementiDx").style.display = "flex";
  socket.emit("leave", {id: socket.id});
}

socket.on("closeWelcome", benvenuto);

function benvenuto(data) {
  if (data.wf == true) {
    document.getElementById("welcome").style.display = "none";
    i = 1;
  } else if (data.wf == false) {
    document.getElementById("welcome").style.display = "block";
    i = 0;
  }
}

function info(){
  if (i == 0) {
    document.getElementById("welcome").style.display = "none";
    i = 1
  } else if (i == 1) {
    document.getElementById("welcome").style.display = "block";
    document.getElementById("welcome").style.opacity = "100";
    i = 0
  }
}

socket.on("playersNumber", displayPlayers);

function displayPlayers(data) {
  // qui ci va la gestione degli omini
  // questo sketch riceve dal server il pacchetto di dati "playersData"
  // all'interno c'è:
  // data.pl = numoro di giocatori;
  // data.room = stanza da cui arrivano i dati (data.room è una stringa, non un numero);

if(data.pl == 0 && data.room == '1'){
  document.getElementById("u1r1").style.display = "none";
  document.getElementById("u2r1").style.display = "none";
  document.getElementById("u3r1").style.display = "none";
  document.getElementById("u4r1").style.display = "none";
  document.getElementById("u5r1").style.display = "none";
  document.getElementById("plusR1").style.display = "none";
  document.getElementById("noneR1").style.display = "block";
} else if(data.pl == 1 && data.room == '1'){
  document.getElementById("u1r1").style.display = "block";
  document.getElementById("u2r1").style.display = "none";
  document.getElementById("u3r1").style.display = "none";
  document.getElementById("u4r1").style.display = "none";
  document.getElementById("u5r1").style.display = "none";
  document.getElementById("plusR1").style.display = "none";
  document.getElementById("noneR1").style.display = "none";
} else if(data.pl == 2 && data.room == '1'){
  document.getElementById("u1r1").style.display = "block";
  document.getElementById("u2r1").style.display = "block";
  document.getElementById("u3r1").style.display = "none";
  document.getElementById("u4r1").style.display = "none";
  document.getElementById("u5r1").style.display = "none";
  document.getElementById("plusR1").style.display = "none";
  document.getElementById("noneR1").style.display = "none";
} else if(data.pl == 3 && data.room == '1'){
  document.getElementById("u1r1").style.display = "block";
  document.getElementById("u2r1").style.display = "block";
  document.getElementById("u3r1").style.display = "block";
  document.getElementById("u4r1").style.display = "none";
  document.getElementById("u5r1").style.display = "none";
  document.getElementById("plusR1").style.display = "none";
  document.getElementById("noneR1").style.display = "none";
} else if(data.pl == 4 && data.room == '1'){
  document.getElementById("u1r1").style.display = "block";
  document.getElementById("u2r1").style.display = "block";
  document.getElementById("u3r1").style.display = "block";
  document.getElementById("u4r1").style.display = "block";
  document.getElementById("u5r1").style.display = "none";
  document.getElementById("plusR1").style.display = "none";
  document.getElementById("noneR1").style.display = "none";
}else if(data.pl == 5 && data.room == '1'){
  document.getElementById("u1r1").style.display = "block";
  document.getElementById("u2r1").style.display = "block";
  document.getElementById("u3r1").style.display = "block";
  document.getElementById("u4r1").style.display = "block";
  document.getElementById("u5r1").style.display = "block";
  document.getElementById("plusR1").style.display = "none";
  document.getElementById("noneR1").style.display = "none";
} else if(data.pl > 5 && data.room == '1'){
  document.getElementById("u1r1").style.display = "block";
  document.getElementById("u2r1").style.display = "block";
  document.getElementById("u3r1").style.display = "block";
  document.getElementById("u4r1").style.display = "block";
  document.getElementById("u5r1").style.display = "block";
  document.getElementById("plusR1").style.display = "block";
  document.getElementById("noneR1").style.display = "none";
}

else if(data.pl == 0 && data.room == '2'){
  document.getElementById("u1r2").style.display = "none";
  document.getElementById("u2r2").style.display = "none";
  document.getElementById("u3r2").style.display = "none";
  document.getElementById("u4r2").style.display = "none";
  document.getElementById("u5r2").style.display = "none";
  document.getElementById("plusR2").style.display = "none";
  document.getElementById("noneR2").style.display = "block";
} else if(data.pl == 1 && data.room == '2'){
  document.getElementById("u1r2").style.display = "block";
  document.getElementById("u2r2").style.display = "none";
  document.getElementById("u3r2").style.display = "none";
  document.getElementById("u4r2").style.display = "none";
  document.getElementById("u5r2").style.display = "none";
  document.getElementById("plusR2").style.display = "none";
  document.getElementById("noneR2").style.display = "none";
} else if(data.pl == 2 && data.room == '2'){
  document.getElementById("u1r2").style.display = "block";
  document.getElementById("u2r2").style.display = "block";
  document.getElementById("u3r2").style.display = "none";
  document.getElementById("u4r2").style.display = "none";
  document.getElementById("u5r2").style.display = "none";
  document.getElementById("plusR2").style.display = "none";
  document.getElementById("noneR2").style.display = "none";
} else if(data.pl == 3 && data.room == '2'){
  document.getElementById("u1r2").style.display = "block";
  document.getElementById("u2r2").style.display = "block";
  document.getElementById("u3r2").style.display = "block";
  document.getElementById("u4r2").style.display = "none";
  document.getElementById("u5r2").style.display = "none";
  document.getElementById("plusR2").style.display = "none";
  document.getElementById("noneR2").style.display = "none";
} else if(data.pl == 4 && data.room == '2'){
  document.getElementById("u1r2").style.display = "block";
  document.getElementById("u2r2").style.display = "block";
  document.getElementById("u3r2").style.display = "block";
  document.getElementById("u4r2").style.display = "block";
  document.getElementById("u5r2").style.display = "none";
  document.getElementById("plusR2").style.display = "none";
  document.getElementById("noneR2").style.display = "none";
}else if(data.pl == 5 && data.room == '2'){
  document.getElementById("u1r2").style.display = "block";
  document.getElementById("u2r2").style.display = "block";
  document.getElementById("u3r2").style.display = "block";
  document.getElementById("u4r2").style.display = "block";
  document.getElementById("u5r2").style.display = "block";
  document.getElementById("plusR2").style.display = "none";
  document.getElementById("noneR2").style.display = "none";
} else if(data.pl > 5 && data.room == '2'){
  document.getElementById("u1r2").style.display = "block";
  document.getElementById("u2r2").style.display = "block";
  document.getElementById("u3r2").style.display = "block";
  document.getElementById("u4r2").style.display = "block";
  document.getElementById("u5r2").style.display = "block";
  document.getElementById("plusR2").style.display = "block";
  document.getElementById("noneR2").style.display = "none";
}
}