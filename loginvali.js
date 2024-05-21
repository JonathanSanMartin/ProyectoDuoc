$(document).ready(function(){
    $("#loginForm").submit(function(event) {
        event.preventDefault(); 

        var correo = $("#correo").val();
        var contraseña = $("#contraseña").val();

        if (correo === "") {
            $("#correo-error").text("Por favor, introduce tu correo electrónico");
            alert("Por favor, introduce tu correo electrónico");
        } else if (!isValidEmailAddress(correo)) {
            $("#correo-error").text("Por favor, introduce un correo electrónico válido");
        }

        if (contraseña === "") {
            $("#contraseña-error").text("Por favor, introduce tu contraseña");
            alert("Por favor, introduce tu contraseña");
        } else if (contraseña.length < 8) {
            $("#contraseña-error").text("Tu contraseña debe tener al menos 8 caracteres");
        }
    });

    function isValidEmailAddress(emailAddress) {
        var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(emailAddress);
    }
});