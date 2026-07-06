const botonGuardar = document.getElementById("buttonReserva");

botonGuardar.addEventListener("click", function(event){

let tipoMesa = document.getElementById("tipoMesa").value;
let nombreCompleto = document.getElementById("nombreCompleto").value;
let fechaReserva = document.getElementById("fechaReserva").value;
let cantidadPersonas = document.getElementById("cantidadPersonas").value;
if(tipoMesa == "" || nombreCompleto == "" || fechaReserva == "" || cantidadPersonas == ""){
    alert("Por favor, complete todos los campos.");
    console.log("Campos incompletos");
}
else{
    alert("Reserva realizada con exito." + "\n" + "Tipo de Mesa: " + tipoMesa + "\n" + "Nombre Completo: " + nombreCompleto + "\n" + "Fecha de Reserva: " + fechaReserva + "\n" + "Cantidad de Personas: " + cantidadPersonas);
    console.log("Reserva realizada con éxito\n" + "Tipo de Mesa: " + tipoMesa + "\n" + "Nombre Completo: " + nombreCompleto + "\n" + "Fecha de Reserva: " + fechaReserva + "\n" + "Cantidad de Personas: " + cantidadPersonas);
}});
// Presentado por Juan Jose Hernandez Vasquez