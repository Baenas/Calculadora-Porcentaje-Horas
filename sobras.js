

function dos(dia , horastart, horaend, minstart, minstop){
  var horastart =horastart;
  var minutostart = minstart;
  var horastop =horaend;
  var minutosstop = minstop;
var diaria = 0;
      for (var i = 0; i  <= 24 ; i++) {


//
    //    if (minutosstop  != 00) {
    //    var  stopmas = horastop ;
        //document.getElementById(dia + stopmas).className = 'medio';
    //    document.getElementById(dia + stopmas).style.background = ' linear-gradient(to right, green 50%, Gray 50%)';


      //  }


      }
var horaentrar = horastart + "." + minstart;

var horasalir =  horaend + "." +  minstop;
//document.getElementById('totalhoras').innerHTML = horaentrar + horasalir;
var totales = horaentrar  - horasalir;
//document.getElementById('totalhoras2').innerHTML =totales;



return totales;

}
mostrar(dos('lunes',8,16,00,50) );


function mostrar(dia){
//  document.getElementById('totalhoras2').innerHTML =   dia ;//+   dos('martes',8,16,00,50) +  dos('miercoles',8,16,00,50) +  dos('jueves',8,16,00,50) +    dos('viernes',8,15,00,00) ;



}

function porcen(){

  for (var i = 0; i  <= 24 ; i++) {



}


}

function check(numero, dia){
if (dia ==  0) {
numero = numero;
}else if (dia ==  1) {
numero = numero + 8;
}else if (dia ==  2) {
numero = numero + 8 + 8;
}else if (dia ==  3) {
numero = numero + 8 + 8 + 8;
}else if (dia ==  4) {
numero = numero + 8 + 8 + 8 +8;
}
var total = numero   *100/41;
var n = total.toFixed(2);
return n;

//document.getElementById('gettime').onclick=funcion1;
//
}
function funcion1(digit,numero,dia){

  if (dia ==  0) {
  numero = numero;
  }else if (dia ==  1) {
  numero = numero + 8;
  }else if (dia ==  2) {
  numero = numero + 8 + 8;
  }else if (dia ==  3) {
  numero = numero + 8 + 8 + 8;
  }else if (dia ==  4) {
  numero = numero + 8 + 8 + 8 +8;
  }

  var minuto = 1 * 100 / 41 /60 ;
  var total = numero   *100/41 ;


var cuarto = 1   *100/41 / 15 ;
cuarto = cuarto + total;
var doscuarto = 1   *100/41 / 2 ;
doscuarto = doscuarto + total;
var trescuarto = 1   *100/41 / 45 ;
trescuarto = trescuarto + total;
var ncuarto = cuarto.toFixed(2);
var ndoscuarto = doscuarto.toFixed(2);
var ntrescuarto = trescuarto.toFixed(2);
var ntotal = total.toFixed(2);
var nmin = minuto.toFixed(2);
document.getElementById('minuto').innerHTML = nmin;
document.getElementById('valor1').innerHTML = "A las  " + digit +  " en punto llevamos  " + ntotal + "%";
document.getElementById('valor2').innerHTML = "A las  " + digit +  " y cuarto llevamos  " + ncuarto + "%";
document.getElementById('valor3').innerHTML = "A las  " + digit +  " y media llevamos  " + ndoscuarto + "%";
document.getElementById('valor4').innerHTML = "A las  " + digit +  " y tres cuartos llevamos  " + ntrescuarto + "%";
}
function funcion1(digit,numero,dia){

  if (dia ==  0) {
  numero = numero;
  }else if (dia ==  1) {
  numero = numero + 8;
  }else if (dia ==  2) {
  numero = numero + 8 + 8;
  }else if (dia ==  3) {
  numero = numero + 8 + 8 + 8;
  }else if (dia ==  4) {
  numero = numero + 8 + 8 + 8 +8;
  }
var cantidad = 48;
  var minuto = 1 * 100 / cantidad /60 ;
  var total = numero   *100/cantidad ;


var cuarto = 1   *100/cantidad / 15 ;
cuarto = cuarto + total;
var doscuarto = 1   *100/cantidad / 2 ;
doscuarto = doscuarto + total;
var trescuarto = 1   *100/cantidad / 3;
trescuarto = trescuarto + total;
var ncuarto = cuarto.toFixed(2);
var ndoscuarto = doscuarto.toFixed(2);
var ntrescuarto = trescuarto.toFixed(2);
var ntotal = total.toFixed(2);
var nmin = minuto.toFixed(2);
document.getElementById('minuto').innerHTML = nmin;
//document.getElementById('valor1').innerHTML = "A las  " + digit +  " en punto llevamos  " + ntotal + "%";
document.getElementById('valor2').innerHTML = "A las  " + digit +  " y cuarto llevamos  " + ncuarto + "%";
document.getElementById('valor3').innerHTML = "A las  " + digit +  " y media llevamos  " + ndoscuarto + "%";
document.getElementById('valor4').innerHTML = "A las  " + digit +  " y tres cuartos llevamos  " + ntrescuarto + "%";
}


function add1(im){
var arraytot  = [];
arraytot.push(im);
return im;

document.write(im);
}

function gen(dia,obj, horastart, horaend ,minutostart, minutosstop){
//var start = horastart + ":" + minutostart;
//var stop = horaend + ":" + minutosstop;
  var dos = horaend - horastart;
  for (var i = 0; i <= 24 ; i++) {
    var gentr = document.createElement('tr');
  var gentd = document.createElement('td');
  gentd.id = 'uno'  +  dia+  i ;
  //  gentd.className = 'dos' + i ;
  gentd.style.backgroundColor = "gray";
  gentd.innerHTML = i + ":00 ";
  document.getElementById(obj).appendChild(gentd);
document.getElementById(obj).appendChild(gentr);

if (i >= horastart & i <= horaend) {




//  document.getElementById('valor' + obj).innerHTML =   horaend   - horastart ;

  document.getElementById('uno' + dia + i).style.backgroundColor = 'green';

    var total =  1   *100/  dos  ;
    var n = total.toFixed(2) ;

  document.getElementById('uno' + dia + i).innerHTML = n;

    if (dia == 0 ) {
    //   document.getElementById('uno' + dia + i).innerHTML = parseFloat(document.getElementById('uno' + dia + i).innerHTML) ;

var mar =  [];

mar.push(n);


  document.getElementById('uno' + dia + i ).innerHTML =     parseFloat(mar[0]) +parseFloat(mar[0]) ;

 //parseFloat(document.getElementById('uno' + dia + i).innerHTML) +

  //      document.getElementById( ).innerHTML =     ;
    }





}

}


}
