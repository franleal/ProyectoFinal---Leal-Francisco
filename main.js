
document.getElementById("boton").addEventListener("click",function(){

    document.getElementById("mostrar").innerHTML = "<p>Monitor - Gigabyte - 24 pulgadas <br>$60000</p> <p>Monitor - MSI - 24 pulgadas <br>$90000</p> <p >Monitor - Samsung - 49 pulgadas curvo <br>$300000</p>"

    mostrar.className = "mostrar";
})

document.getElementById("boton2").addEventListener("click",function(){

    document.getElementById("mostrar").innerHTML = "<p>Placa de video - Nvidia - Rtx 3060 <br>$85000</p> <p>Placa de video - Nvidia - Rtx 2060 <br>$70000</p> <p >Placa de video - Nvidia - Rtx 2060 Super <br>$80000</p>"

    mostrar.className = "mostrar";
})

document.getElementById("boton3").addEventListener("click",function(){

    document.getElementById("mostrar").innerHTML = "<p>Procesador - Ryzen 7 - 3700x <br>$150000</p> <p>Procesador - Intel I7 - 8700 <br>$160000</p> <p >Procesador - Ryzen 5 - 1600 <br>$30000</p>"

    mostrar.className = "mostrar";
})

document.getElementById("drop").addEventListener("change",function(){

    let metodosDePagos = document.getElementById("drop").value;
    
    if (metodosDePagos == "visa"){
        document.getElementById("mostrarPagos").innerHTML = "<p>metodos de pago: </p> <br> <p> -12 cuotas sin interes </p><br><p>-6 cuotas sin interes </p> <br> <p>-3 cuotas sin interes </p><br> <p>-un pago </p>" 
    }

    if (metodosDePagos == "efectivo"){
        document.getElementById("mostrarPagos").innerHTML = "<p> -un pago 20% de descuento </p>"
    }

    if (metodosDePagos == "mastercard"){
        document.getElementById("mostrarPagos").innerHTML = "<p>metodos de pago: </p> <br> <p> -12 cuotas 20% de interes </p> <br> <p>-6 cuotas sin interes </p> <br> <p>-3 cuotas sin interes </p><br> <p>-un pago </p>" 
    }
})

//--------------------INICIO DE SESION-------------------------------------
document.getElementById("registrar").addEventListener("click",function(){
    let clave = document.getElementById("clave").value;
    let mail = document.getElementById("mail").value;

    if (clave == "" || mail == "" ){
        document.getElementById("mensaje").innerText = "la clave o su Email estan vacios";
    }else{
        if(localStorage.getItem(mail)){
            document.getElementById("mensaje").innerText = "Usted ya esta registrado, inicie sesion";
        }else{
            localStorage.setItem(mail,clave)
            document.getElementById("mensaje").innerText = "Sus datos se registraron correctamente";
        }
        
    }
})

document.getElementById("ingresar").addEventListener("click",function(){
    let clave = document.getElementById("clave").value;
    let mail = document.getElementById("mail").value;

    if (clave == "" || mail == "" ){
        document.getElementById("mensaje").innerText = "la clave o su Email estan vacios";
    }else{
        if(localStorage.getItem(mail) ){
            document.getElementById("mensaje").innerText = "inicio de sesion correcto, Bienvenido";
            localStorage.setItem(mail,clave)
        }else{
            document.getElementById("mensaje").innerText = "Su Email es incorrecto, ingrese nuevamente";
        }

    }
})