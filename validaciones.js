$(document).ready(function(){
    $("#registroForm").submit(function(event){
        event.preventDefault();

        var rut = $("#rut").val();
        var nombre = $("#nombre").val();
        var apellidoPaterno = $("#apellidoPaterno").val();
        var apellidoMaterno = $("#apellidoMaterno").val();
        var edad = $("#edad").val();
        var genero = $("#genero").val();
        var celular = $("#celular").val();

        if (rut.length < 9 || rut.length > 10) {
            alert("El Rut debe tener entre 9 y 10 caracteres.");
            return;
        } else if (rut.length === 9 || rut.length === 10) {
            var guionIndex = rut.indexOf('-');
            if (guionIndex === -1 || guionIndex !== rut.length - 2) {
                alert("El Rut debe estar en este formato 11111111-1");
                return;
            }
        }

        if(nombre.length < 3 || nombre.length > 20 ||
            apellidoPaterno.length < 3 || apellidoPaterno.length > 20 ||
            apellidoMaterno.length < 3 || apellidoMaterno.length > 20){
            alert("El Nombre y los Apellidos deben tener entre 3 y 20 caracteres.");
            return;
        }

        if(edad === ""){
            alert("Por favor, indique su edad.");
            return;
        }
        if(edad < 12 || edad > 80){
            alert("La edad debe estar entre 12 y 80 años");
            return;
        }

        if(genero === ""){
            alert("Por favor, seleccione un Género.");
            return;
        }

        if(celular.length < 8 || celular.length > 12){
            alert("El Celular debe tener entre 8 y 12 caracteres.");
            return;
        }

        alert("¡Registro exitoso!");

    });
});
