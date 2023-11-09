let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    let input = document.querySelector(".input").value;

    if(input =="perro"){
        alert("Boton funciona")

    }else{
        alert("incorrecto")
    }
})



let imagenes = [
    "carrusel/img/11_20230619_160005_0010.png",
    "carrusel/img/24_20230619_160008_0023.png",
    "carrusel/img/2_20230619_160004_0001.png",
    "carrusel/img/32_20230619_160009_0031.png",
    "carrusel/img/41_20230619_160010_0040.png"
    ]
    document.imagen.src = imagenes[0]
    let contador = 0;

    function mmover(){
        contador++;
        if(contador > imagenes.length - 1){
            contador = 0;
        }
        document.imagen.src = imagenes[contador];
    }

    setInterval(mmover, 3000)



    let otro = [
        "galeri/1.jpg",
        "galeri/2.jpg",
        "galeri/3.jpg",
        "galeri/4.jpg"
        ]
        document.galeria.src = otro[0]
        let contadorDos = 0;
    
        function mmover2(){
            contadorDos++;
            if(contadorDos > otro.length - 1){
                contadorDos = 0;
            }
            document.galeria.src = otro[contadorDos];
        }
    
        setInterval(mmover2, 3000)