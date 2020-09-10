function mas(obj) {
    let input = document.getElementById(obj);
    increment = 0.5;




}

function menos(obj) {


}

function setday() {
    var _lunes1 = document.getElementById('lunes1').value;
    var _lunes2 = document.getElementById('lunes2').value;
    var _totlun = _lunes2 - _lunes1;
    var _martes1 = document.getElementById('martes1').value;
    var _martes2 = document.getElementById('martes2').value;
    var _totmar = _martes2 - _martes1;
    var _miercoles1 = document.getElementById('miercoles1').value;
    var _miercoles2 = document.getElementById('miercoles2').value;
    var _totmier = _miercoles2 - _miercoles1;
    var _jueves1 = document.getElementById('jueves1').value;
    var _jueves2 = document.getElementById('jueves2').value;
    var _totjue = _jueves2 - _jueves1;
    
    var cadena = "check('lunes'," + _lunes1 + ", " + _lunes2 + ","  + _totlun +", 'martes', " +  _martes1 +","+ _martes2 +" , "+ _totmar+", 'miercoles', "+ _miercoles1+", "+ _miercoles2+", "+ _totmier+", 'jueves', 8, 16.5, 8.5, 'viernes', 12, 15, 3)";
    
    alert(cadena);
}
