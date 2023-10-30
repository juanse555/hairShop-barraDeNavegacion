let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    let input = document.querySelector(".input").value;

    if(input =="perro"){
        alert("Boton funciona")

    }else{
        alert("incorrecto")
    }
})