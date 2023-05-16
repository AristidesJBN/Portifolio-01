
var button = document.getElementById("idbutton")

button.addEventListener("click", function(){

    var campo = document.getElementById("idcampo")
    if(campo.style.display === "none"){
        campo.style.display = "block"
    }else{
        campo.style.display = "none"
    }
})


console.log(campo);
console.log(button);