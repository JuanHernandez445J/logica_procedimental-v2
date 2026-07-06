const botonGuardar = document.getElementById("buttonPedido");

botonGuardar.addEventListener("click", function(event){
    
let nombreProducto = document.getElementById("nombreProducto").value;
let direccion = document.getElementById("direccion").value;
let nombreUsuario = document.getElementById("nombreUsuario").value;
let cantidad = document.getElementById("cantidad").value;
let metodoPago = document.getElementById("metodoPago").value;
let telefono = document.getElementById("telefono").value;

if(nombreProducto == "" || direccion == "" || nombreUsuario == "" || cantidad == "" || metodoPago == "" || telefono == ""){
    alert("Por favor, complete todos los campos.");
    console.log("Campos incompletos");
}
else{
    alert("Pedido realizado con éxito." + "\n" + "Nombre del Producto: " + nombreProducto + "\n" + "Dirección: " + direccion + "\n" + "Nombre del Usuario: " + nombreUsuario + "\n" + "Cantidad: " + cantidad + "\n" + "Método de Pago: " + metodoPago + "\n" + "Teléfono: " + telefono);
    console.log("Pedido realizado con éxito\n" + "Nombre del Producto: " + nombreProducto + "\n" + "Dirección: " + direccion + "\n" + "Nombre del Usuario: " + nombreUsuario + "\n" + "Cantidad: " + cantidad + "\n" + "Método de Pago: " + metodoPago + "\n" + "Teléfono: " + telefono);
}});
// Presentado por Juan Jose Hernandez Vasquez