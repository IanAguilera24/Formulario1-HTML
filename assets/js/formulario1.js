
//asignacion de un valor minimo y un maximo a los select
var diaMinMax = document.getElementById("dia");
var mesMinMax = document.getElementById("mes");
var anioMinMax = document.getElementById("anio");

for(var i = 1; i<=30; i++){
    var opcionDia = document.createElement("option");
    opcionDia.value = i;
    opcionDia.innerHTML = i;
    diaMinMax.appendChild(opcionDia);
}

for(var i = 1; i<=12; i++){
    var opcionMes = document.createElement("option");
    opcionMes.value = i;
    opcionMes.innerHTML = i;
    mesMinMax.appendChild(opcionMes);
}

for(var i = 2000; i<=2030; i++){
    var opcionAnio = document.createElement("option");
    opcionAnio.value = i;
    opcionAnio.innerHTML = i;
    anioMinMax.appendChild(opcionAnio);
}

//obtencion de los valores de cada elemento del formulario
document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault(); //previene el envio del formulario

    var nombre = document.getElementById("nombre").value.toUpperCase();
    var Apaterno = document.getElementById("Apaterno").value.toUpperCase();
    var Amaterno = document.getElementById("Amaterno").value.toUpperCase();
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var anio = document.getElementById("anio").value.substring(2,4);
    
    var datos = document.getElementById('datos');
    dia = dia.padStart(2, '0');
    mes = mes.padStart(2,'0');

    datos.innerHTML = "Tus datos Base Son: " + Apaterno.substring(0,2) + Amaterno.substring(0,1) + nombre.substring(0,1) + dia + mes + anio;

    console.log(nombre+"\n"+Apaterno+"\n"+Amaterno+"\n"+dia+"\n"+mes+"\n"+anio);

});