function generate5(id, dia, horastart, horaend, minstart, minstop){
  //LUNES//
if (dia == "viernes") {
  var horastart =horastart;
  var minutostart = minstart;
  var horastop =horaend;
  var minutosstop = minstop;
var total = 0;
    for (var i = 0; i  <= 24 ; i++) {
      var gentr = document.createElement('tr');
  var gentd = document.createElement('td');
    gentd.innerHTML = i + ":00  "  ;
gentd.id =  dia  +i;
gentd.className = 'dos';
gentd.style.backgroundColor = "gray";

          if ( i >= horastart && i <= horastop ) {
gentd.style.backgroundColor = "green";
gentd.style.color = "white";
          }
          document.getElementById(id).appendChild(gentd);
    document.getElementById(id).appendChild(gentr);
//document.getElementById('totalhoras').innerHTML =  "total horas " + total;
    }
añadir5( gentd, horastart, horaend, minstart, minstop,dia);
}}
  //LUNES//
var sumatotales = 0;
function añadir5(obj,hstart, hstop, mstart, mstop,dia1){





if (dia1 == "viernes") {
  if (mstop  != 00) {
  var  stopmas = hstop ;
  //document.getElementById(dia + stopmas).className = 'medio';

   document.getElementById(dia1 + stopmas).style.background = ' linear-gradient(to right, green 50%, Gray 50%)';

  }

  var horaentrar = hstart + "." + mstart;

  var horasalir =  hstop + "." +  mstop;
  var totales = horasalir  - horaentrar ;
sumatotales  = totales;

document.getElementById('valorvie').innerHTML = " viernes" + sumatotales ;
}
}
  //LUNES//
