//-------------------PAGINA PRINCIPAL-------------------------------------

//.===========================productos===========================
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

//.===========================pagos================================================
document.getElementById("boton4").addEventListener("click",function(){
    document.getElementById("pagos").style.display = "flex";
    document.getElementById("drop").addEventListener("change",function(){

        let metodosDePagos = document.getElementById("drop").value;
        
        if (metodosDePagos == "visa"){
            document.getElementById("mostrarPagos")
            document.getElementById("visa").style.display = "flex"
            document.getElementById("mastercard").style.display = "none"
            document.getElementById("efectivo").style.display = "none"

        }
    
        if (metodosDePagos == "efectivo"){
            document.getElementById("mostrarPagos")
            document.getElementById("visa").style.display = "none"
            document.getElementById("mastercard").style.display = "none"
            document.getElementById("efectivo").style.display = "flex"
        }
    
        if (metodosDePagos == "mastercard"){
            document.getElementById("mostrarPagos") 
            document.getElementById("visa").style.display = "none"
            document.getElementById("mastercard").style.display = "flex"
            document.getElementById("efectivo").style.display = "none"
        }
    })

})

//.===========================pagos Visa==============================================

let boton12V = document.getElementById("boton12V")

boton12V.onclick = () => {
    
    Toastify({
        text: "Pago realizado",
        duration: 1500,
        style: {
            background: 'rgb(66, 161, 28)'
        }
    }).showToast();
    
    Swal.fire({
        title: 'Pago realizado',
        text: 'su pago fue realizado en 12 cuotas sin interes',
        icon: 'success',
        confirmButtonText: 'OK'
    })
}

let boton6V = document.getElementById("boton6V")

boton6V.onclick = () => {
    
    Toastify({
        text: "Pago realizado",
        duration: 1500,
        style: {
            background: 'rgb(66, 161, 28)'
        }
    }).showToast();
    
    Swal.fire({
        title: 'Pago realizado',
        text: 'su pago fue realizado en 6 cuotas sin interes',
        icon: 'success',
        confirmButtonText: 'OK'
    })
}

let boton3V = document.getElementById("boton3V")

boton3V.onclick = () => {
    
    Toastify({
        text: "Pago realizado",
        duration: 1500,
        style: {
            background: 'rgb(66, 161, 28)'
        }
    }).showToast();
    
    Swal.fire({
        title: 'Pago realizado',
        text: 'su pago fue realizado en 3 cuotas sin interes',
        icon: 'success',
        confirmButtonText: 'OK'
    })
}

let botonEv = document.getElementById("botonEv")

botonEv.onclick = () => {
    
    Toastify({
        text: "Pago realizado",
        duration: 1500,
        style: {
            background: 'rgb(66, 161, 28)'
        }
    }).showToast();
    
    Swal.fire({
        title: 'Pago realizado',
        text: 'Su pago fue realizado en un pago',
        icon: 'success',
        confirmButtonText: 'OK'
    })
}

//===========================pagos master=============================================

let boton12M = document.getElementById("boton12M")

boton12M.onclick = () => {
    
    Toastify({
        text: "Pago realizado",
        duration: 1500,
        style: {
            background: 'rgb(66, 161, 28)'
        }
    }).showToast();
    
    Swal.fire({
        title: 'Pago realizado',
        text: 'su pago fue realizado en 12 cuotas con 20% de interes',
        icon: 'success',
        confirmButtonText: 'OK'
    })
}

let boton6M = document.getElementById("boton6M")

boton6M.onclick = () => {
    
    Toastify({
        text: "Pago realizado",
        duration: 1500,
        style: {
            background: 'rgb(66, 161, 28)'
        }
    }).showToast();
    
    Swal.fire({
        title: 'Pago realizado',
        text: 'su pago fue realizado en 6 cuotas sin interes',
        icon: 'success',
        confirmButtonText: 'OK'
    })
}

let boton3M = document.getElementById("boton3M")

boton3M.onclick = () => {
    
    Toastify({
        text: "Pago realizado",
        duration: 1500,
        style: {
            background: 'rgb(66, 161, 28)'
        }
    }).showToast();
    
    Swal.fire({
        title: 'Pago realizado',
        text: 'su pago fue realizado en 3 cuotas sin interes',
        icon: 'success',
        confirmButtonText: 'OK'
    })
}

let botonEm = document.getElementById("botonEm")

botonEm.onclick = () => {
    
    Toastify({
        text: "Pago realizado",
        duration: 1500,
        style: {
            background: 'rgb(66, 161, 28)'
        }
    }).showToast();
    
    Swal.fire({
        title: 'Pago realizado',
        text: 'Su pago fue realizado en un pago',
        icon: 'success',
        confirmButtonText: 'OK'
    })
}

//===========================pago en efectivo=======================================

let botonEfectivo = document.getElementById("botonEfectivo")

botonEfectivo.onclick = () => {
    
    Toastify({
        text: "Pago realizado",
        duration: 1500,
        style: {
            background: 'rgb(66, 161, 28)'
        }
    }).showToast();
    
    Swal.fire({
        title: 'Pago realizado',
        text: 'Su pago fue realizado en un pago con un 20% de descuento',
        icon: 'success',
        confirmButtonText: 'OK'
    })
}



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