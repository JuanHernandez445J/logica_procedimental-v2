const botonGuardar = document.getElementById("buttoninventory");

botonGuardar.addEventListener("click", function(event){
let categoria = document.getElementById("categoria").value;
let codigo = document.getElementById("codigo").value;
let nombre = document.getElementById("nombre").value;
let descripcion = document.getElementById("descripcion").value;
let cantidad = document.getElementById("cantidad").value;
let precio = document.getElementById("precio").value;
let proveedor = document.getElementById("proveedor").value;

if(categoria == "" || codigo == "" || nombre == "" || descripcion == "" || cantidad == "" || precio == "" || proveedor == ""){
    alert("Por favor, complete todos los campos.");
    console.log("Campos incompletos");
}
else{
    alert("Producto agregado al inventario." + "\n" + "Categoria: " + categoria + "\n" + "Código: " + codigo + "\n" + "Nombre: " + nombre + "\n" + "Descripción: " + descripcion + "\n" + "Cantidad: " + cantidad + "\n" + "Precio: " + precio + "\n" + "Proveedor: " + proveedor );
    console.log("Producto agregado\n" + "Categoria: " + categoria + "\n" + "Código: " + codigo + "\n" + "Nombre: " + nombre + "\n" + "Descripción: " + descripcion + "\n" + "Cantidad: " + cantidad + "\n" + "Precio: " + precio + "\n" + "Proveedor: " + proveedor);
}
});
// Presentado por Juan Jose Hernandez Vasquez