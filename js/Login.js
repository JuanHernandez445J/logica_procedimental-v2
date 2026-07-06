const botonGuardar = document.getElementById("buttonlogin");

botonGuardar.addEventListener("click", function(event){

let tipodocumento = document.getElementById("tipoDocumento").value;
let numerodocumento = document.getElementById("numeroDocumento").value;
let contraseña = document.getElementById("contraseña").value;

if(tipodocumento == "" || numerodocumento == "" || contraseña == ""){
    alert("Por favor, complete todos los campos.");
    console.log("Campos incompletos");
}
else{
    alert("Inicio de sesión exitoso." + "\n" + "Tipo de Documento: " + tipodocumento + "\n" + "Número de Documento: " + numerodocumento + "\n" + "Contraseña: " + contraseña);
    console.log("Inicio de sesión exitoso\n" + "Tipo de Documento: " + tipodocumento + "\n" + "Número de Documento: " + numerodocumento + "\n" + "Contraseña: " + contraseña);
}
});
// Presentado por Juan Jose Hernandez Vasquez
