function check(dia, start, end, total, dia2, start2, end2, total2, dia3, start3, end3, total3, dia4, start4, end4, total4, dia5, start5, end5, total5, dia6, start6, end6, total6, dia7, start7, end7, total7) {
    var realtotal;

    var last;
    realtotal = total + total2 + total3 + total4 + total5 + total6 + total7;
    document.getElementById('valor1').innerHTML = realtotal;

    var diasparadiv = 7;
    var fixed = 8;
    for (var i = 0; i <= total; i++) {
        if (total == 0) {
             
        }else{
        var gentd = document.createElement('div');
        gentd.id = dia + i;
        //  gentd.className = 'dos' + i ;
        gentd.style.backgroundColor = "white";
        gentd.style.fontWeight = "900";
        gentd.style.width = "100%";
        gentd.innerHTML = parseInt(total) + i + ":00";
        gentd.className = "clase1";
        //     semana(1);
        
        document.getElementById('cont').appendChild(gentd);
        var totalcount = i * 100 / realtotal;
        var n = totalcount.toFixed(fixed);
        document.getElementById(dia + i).innerHTML = "<span id='" + (start + i) + "'>" + (start + i) + ":00" + "</span>" + "</br>" + n + "%";
        //sumar(dia, i, start, n,realtotal);
        semana(1, i, dia, n, start);
        clickme(gentd, i, n, realtotal);
    }
}
    for (var i = 0; i <= total2; i++) {
        if (total2 == 0) {
             
        }else{
        var gentd = document.createElement('div');
        gentd.id = dia2 + i;
        //  gentd.className = 'dos' + i ;
        gentd.style.backgroundColor = "white";
        gentd.style.fontWeight = "900";
        gentd.innerHTML = parseInt(total2) + i + ":00";
        gentd.className = "clase1";
        gentd.style.width = "100%";
        document.getElementById('cont2').appendChild(gentd);
        //    semana(2);
        var totalcount = total * 100 / realtotal + i * 100 / realtotal;
        var n2 = totalcount.toFixed(fixed);
        document.getElementById(dia2 + i).innerHTML = "<span id='" + (start2 + i) + "'>" + (start2 + i) + ":00" + "</span>" + "</br>" + n2 + "%";
        //sumar(dia2, i, start2, n2,realtotal);

        clickme(gentd, i, n2, realtotal);
        semana(2, i, dia2, n2, start2);
    }
}
    for (var i = 0; i <= total3; i++) {
        if (total3 == 0) {
             
        }else{
        var gentd = document.createElement('div');
        gentd.id = dia3 + i;
        var asd = total + total2;
        //  gentd.className = 'dos' + i ;
        gentd.style.backgroundColor = "white";
        gentd.style.fontWeight = "900";
        gentd.innerHTML = parseInt(total3) + i + ":00";
        gentd.className = "clase1";
        gentd.style.width = "100%";
        document.getElementById('cont3').appendChild(gentd);
        //   semana(3);
        var totalcount = asd * 100 / realtotal + i * 100 / realtotal;
        var n3 = totalcount.toFixed(fixed);
        document.getElementById(dia3 + i).innerHTML = "<span id='" + (start3 + i) + "'>" + (start3 + i) + ":00" + "</span>" + "</br>" + n3 + "%";
        //sumar(dia2, i, start2, n2,realtotal);
        clickme(gentd, i, n3, realtotal);
        semana(3, i, dia3, n3, start3);
    }
    }
    for (var i = 0; i <= total4; i++) {
        if (total4 == 0) {
             
        }else{
        var asd = total + total2 + total3;
        var gentd = document.createElement('div');
        gentd.id = dia4 + i;
        //  gentd.className = 'dos' + i ;
        gentd.style.backgroundColor = "white";
        gentd.style.fontWeight = "900";
        gentd.innerHTML = parseInt(total4) + i + ":00";
        gentd.className = "clase1";
        gentd.style.width = "100%";
        document.getElementById('cont4').appendChild(gentd);

        var totalcount = asd * 100 / realtotal + i * 100 / realtotal;
        var n4 = totalcount.toFixed(fixed);
        document.getElementById(dia4 + i).innerHTML = "<span id='" + (start4 + i) + "'>" + (start4 + i) + ":00" + "</span>" + "</br>" + n4 + "%";

        //sumar(dia2, i, start2, n2,realtotal);
        clickme(gentd, i, n4, realtotal);
        semana(4, i, dia4, n4, start4);
        }
    }
    for (var i = 0; i <= total5; i++) {
        if (total5 == 0) {
             
        }else{
        var asd = total + total2 + total3 + total4;
        var gentd = document.createElement('div');
        gentd.id = dia5 + i;
        //  gentd.className = 'dos' + i ;
        gentd.style.backgroundColor = "white";
        gentd.style.fontWeight = "900";
        gentd.innerHTML = parseInt(total5) + i + ":00";
        gentd.className = "clase1";
        gentd.style.width = "100%";
        document.getElementById('cont5').appendChild(gentd);

        var totalcount = asd * 100 / realtotal + i * 100 / realtotal;
        var n5 = totalcount.toFixed(fixed);
        document.getElementById(dia5 + i).innerHTML = "<span id='" + (start5 + i) + "'>" + (start5 + i) + ":00" + "</span>" + "</br>" + n5 + "%";
        clickme(gentd, i, n5, realtotal);
        //sumar(dia2, i, start2, n2,realtotal);
        semana(5, i, dia5, n5, start5);
        }
    }  
     for (var i = 0; i <= total6; i++) {
         if (total6 == 0) {
             
         }else{
        var asd = total + total2 + total3 + total4 + total5;
        var gentd = document.createElement('div');
        gentd.id = dia6 + i;
        //  gentd.className = 'dos' + i ;
        gentd.style.backgroundColor = "white";
        gentd.style.fontWeight = "900";
        gentd.innerHTML = parseInt(total6) + i + ":00";
        gentd.className = "clase1";
        gentd.style.width = "100%";
        document.getElementById('cont6').appendChild(gentd);

        var totalcount = asd * 100 / realtotal + i * 100 / realtotal;
        var n6 = totalcount.toFixed(fixed);
        document.getElementById(dia6 + i).innerHTML = "<span id='" + (start6 + i) + "'>" + (start6 + i) + ":00" + "</span>" + "</br>" + "<span id='" + (n6 + i) + "'>" + (n6) + "%" + "</span>";     
          clickme(gentd, i, n6, realtotal);
        //sumar(dia2, i, start2, n2,realtotal);
        semana(6, i, dia6, n6, start6);
    }
}
    for (var i = 0; i <= total7; i++) {
        if (total7 == 0) {
             
        }else{
        var asd = total + total2 + total3 + total4 + total5 + total6;
        var gentd = document.createElement('div');
        gentd.id = dia7 + i;
        //  gentd.className = 'dos' + i ;
        gentd.style.backgroundColor = "white";
        gentd.style.fontWeight = "900";
        gentd.innerHTML = parseInt(total7) + i + ":00";
        gentd.className = "clase1";
        gentd.style.width = "100%";
        document.getElementById('cont7').appendChild(gentd);

        var totalcount = asd * 100 / realtotal + i * 100 / realtotal;
        var n7= totalcount.toFixed(fixed);
        document.getElementById(dia7 + i).innerHTML ="<span id='" + (start7 + i) + "'>" + (start7 + i) + ":00" + "</span>" + "</br>" + n7 + "%";
        clickme(gentd, i, n7, realtotal);
        //sumar(dia2, i, start2, n2,realtotal);
        semana(0, i, dia7, n7, start7);
    }
    }
   timer();

}
function clicked(id, en, real) {

    var hora = 1 * 100 / real;
   




}

function clickme(o, x, ene, re) {
    o.onclick = function() { clicked(x, ene, re); }
}

function semana(dia, _i, _dia, _n, _start) {
    var d = new Date();
     var daynum = d.getDay();
    var cushr = "10";
    var custmn = "00"
    var hr = d.getHours();
    var min = d.getMinutes();
var sec = d.getSeconds();
    var realhour =  hr + ":" + min +":" + sec;
    var custom = cushr + ":" + custmn;
    var minutosreales =  min;
    var todashoras = document.getElementById('valor1').innerHTML;
    
    // lo que hace por minutos
    var hora = 1 * 100 / todashoras / 60;
    // lo que hace por segundo
    var segundo = 1 * 100 / todashoras / 60 / 60 ;
    //aqui calculo lo que  lleva de esta hora que esta pasando , en minuto
    var minutospico = 1 * 100 / todashoras / 60 * min ;
    var valorsec = document.getElementById('valor3').innerHTML = minutospico .toFixed(8);
    var secpico = 1 * 100 / todashoras / 60 / 60 *sec ;

    // document.getElementById('horasim').innerHTML = d.getHours() + ":" + d.getMinutes();
 //   document.getElementById('horasim').innerHTML = custom;
    document.getElementById('horanow').innerHTML = realhour;
    document.getElementById('info').innerHTML =   minutospico.toFixed(8) ;
    if (dia == d.getDay()) {
        document.getElementById(_dia + _i).style.backgroundColor = "gray";
        document.getElementById(_dia + _i).style.border = "solid black 1px";
        if (document.getElementById(_start + _i).innerHTML == hr + ":00") {
            document.getElementById(_dia + _i).style.backgroundColor = "red";
            document.getElementById(_dia + _i).style.border = "solid black 1px";
            document.getElementById('horasim').innerHTML = _n ;
         
            var porsec = parseFloat(secpico).toFixed(8);
            document.getElementById('valor4').innerHTML = porsec;
            var por2 = document.getElementById('info');
            var por =   document.getElementById('horasim');
            var val4 = document.getElementById('valor4');
            let valorelemento = parseFloat(por.innerHTML);
            let valorinfo = parseFloat(por2.innerHTML);
            let valorsegundo1 = parseFloat(val4.innerHTML);
         por.innerHTML = parseFloat(valorelemento  + valorinfo+ valorsegundo1).toFixed(8);
        
        }
     
    }
//timer();

}
var timervar;   

function timer() {
    timervar = setInterval(dotimer, 1000)
}

function dotimer() {
   
}