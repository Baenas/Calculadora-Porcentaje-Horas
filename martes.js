
function generate2(id, dia, horastart, horaend, minstart, minstop){
  //LUNES//
if (dia == "martes") {
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
añadir2( gentd, horastart, horaend, minstart, minstop,dia);
}}
  //LUNES//
var sumatotales = 0;
function añadir2(obj,hstart, hstop, mstart, mstop,dia1){





if (dia1 == "martes") {
  if (mstop  != 00) {
  var  stopmas = hstop ;
  //document.getElementById(dia + stopmas).className = 'medio';

   document.getElementById(dia1 + stopmas).style.background = ' linear-gradient(to right, green 50%, Gray 50%)';

  }

  var horaentrar = hstart + "." + mstart;

  var horasalir =  hstop + "." +  mstop;
  var totales = horasalir  - horaentrar ;
sumatotales  = totales;

document.getElementById('valormar').innerHTML = " martes" + sumatotales ;

}



    //document.getElementById("valorsem").innerHTML  =  parseFloat(localStorage.getItem('total1')) + sumatotales;

    
  //LUNES//
}
  //LUNES//
