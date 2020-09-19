function Relogio() {
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    
    if(horas < 10){
        horas = "0"+horas;
    }
    if(minutos < 10){
        minutos = "0"+minutos;
    }
    
    var relogio = document.querySelector('.relogio');
    relogio.textContent = horas + ":" + minutos;
    
    var timer = setInterval(Relogio, 1000);
    
}
Relogio();

    function Calendario() {
   var moment = new Date();
   var dia = moment.getDay();
   var mes = moment.getUTCMonth();
   var ano = moment.getYear();
    
    if(dia < 10){
        dia = "0" + dia;
    }
    if(mes < 10){
        mes = "0" + mes;
    }
    
    var cld = document.querySelector('.Days');
    cld.textContent = dia + "/" + mes + "/" + "20";
}
Calendario();