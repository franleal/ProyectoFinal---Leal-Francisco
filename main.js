//-------------------PAGINA PRINCIPAL-------------------------------------

//.===========================productos===========================
let Productos = [{id: 1,tipo: "Placa de video" , nombre: "Nvidia - Rtx 3060",cantidad: 1,precio: 85000,img: './imagenes/3060.jpg'},
{id: 2,tipo: "Placa de video" , nombre: "Nvidia - Rtx 2060 ",cantidad: 1,precio: 70000, img: './imagenes/2060.jpg'},
{id: 3,tipo: "Placa de video" , nombre: "Nvidia - Rtx 2060 Super",cantidad: 1,precio: 80000,img: './imagenes/2060super.png'},
{id: 4,tipo: "Monitor" , nombre: "Gigabyte - 24 pulgadas",cantidad: 1,precio: 60000,img: './imagenes/gb24.jpeg'},
{id: 5,tipo: "Monitor" , nombre: "MSI - 24 pulgadas",cantidad: 1,precio: 90000,img: './imagenes/msi24.jpg'},
{id: 6,tipo: "Monitor" , nombre: "Samsung - 49 pulgadas curvo",cantidad: 1,precio: 300000,img: './imagenes/smscurvo.jpeg'},
{id: 7,tipo: "Procesador" , nombre: "Ryzen 7 - 3700x",cantidad: 1,precio: 150000,img: './imagenes/r73700.jpg'},
{id: 8,tipo: "Procesador" , nombre: "Intel I7 - 8700",cantidad: 1,precio: 160000,img: './imagenes/intel7.jpg'},
{id: 9,tipo: "Procesador" , nombre: "Ryzen 5 - 1600",cantidad: 1,precio: 30000,img: './imagenes/1600amd.jpg'}];

const mostrar = document.getElementById("mostrar");

let carrito = []

//.===========================LocalStorage al carrito ===============================
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'));
        ActualizarCarrito();
    }
})

Productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("mostrar");
    div.innerHTML= `
    <h2>${producto.tipo}</h2>
    <h2>${producto.nombre}</h2>
    <p class"precioProducto"> Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="botonCarrito">Agregar al carrito</button>
    <img src=${producto.img} alt= "" class= "img">
    `
    mostrar.appendChild(div);
    

    const boton = document.getElementById(`agregar${producto.id}`);

    boton.addEventListener ("click", () => {
        agregarCarrito(producto.id);
    })
})

//.===========================Agregar al carrito ==================================
const agregarCarrito = (prodId) => {

    const yaExiste = carrito.some(prod => prod.id === prodId)

    if(yaExiste){
        const prod = carrito.map(prod =>{
            if(prod.id === prodId){
                prod.cantidad++
            }
        })
    }else{
        const item = Productos.find((prod) => prod.id === prodId);
        carrito.push(item);
    }
    
    ActualizarCarrito();
}

//.===========================Mostrar carrito===============================
const botonMostrarCarrito = document.getElementById("botonMostrarCarrito");

botonMostrarCarrito.addEventListener ("click", () => {
    document.getElementById("MostrarCarritoContenedor").style.display = "block";
})

const botonCerrarCarrito = document.getElementById("botonCerrarCarrito");

botonCerrarCarrito.addEventListener ("click", () => {
    document.getElementById("MostrarCarritoContenedor").style.display = "none";
})

const MostrarCarritoInfo = document.getElementById("MostrarCarritoInfo");

const ActualizarCarrito = () => {
    MostrarCarritoInfo.innerHTML = ""

    carrito.forEach((prod) => {
        const div1 = document.createElement("div");
        div1.classList.add("MostrarCarritoInfo");
        div1.innerHTML= `
        <p>${prod.tipo}</p>
        <p>${prod.nombre}</p>
        <p> Precio:$ ${prod.precio}</p>
        <p> Cantidad: <span id"cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarCarrito(${prod.id})"class="botonEliminar"><i class="fa-solid fa-trash"></i></button>
        `
        MostrarCarritoInfo.appendChild(div1);

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })

    contadorCarrito.innerText = carrito.length;
    precioTotal.innerText = carrito.reduce((acc, prod)=> acc + prod.precio,0);
}
//.==========================Eliminar carrito===============================
const eliminarCarrito = (prodId) => {
    const item1 = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(item1);
    carrito.splice(indice, 1);

    ActualizarCarrito();
}
//.==========================Contador carrito===============================
const contadorCarrito = document.getElementById("contadorCarrito");

//.==========================Precio Total del carrito===============================
const precioTotal = document.getElementById("precioTotal");

//.===========================pagos================================================

document.getElementById("botonComprar").addEventListener("click",function(){
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
const compra = document.getElementById("compra");

let boton12V = document.getElementById("boton12V")

boton12V.addEventListener("click",function(){
    const total = carrito.reduce((acc, prod)=> acc + prod.precio,0);
    console.log(total)
    const precio12 = document.getElementById("precioTotal")
    MostrarCarritoInfo.innerHTML=`<p>12 cuotas sin interes de:</p>`
    precio12.innerText=total /12
    
    
    
    let Pagar = document.getElementById("Pagar")

    Pagar.addEventListener ("click", () => {
        document.getElementById("MostrarCarritoContenedor").style.display = "none";
        document.getElementById("pagos").style.display = "none";
        carrito.length = 0;
        localStorage.clear();
        ActualizarCarrito();

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
    })

    
    
})

let boton6V = document.getElementById("boton6V")

boton6V.addEventListener("click",function(){

    const total = carrito.reduce((acc, prod)=> acc + prod.precio,0);
    console.log(total)
    const precio12 = document.getElementById("precioTotal")
    MostrarCarritoInfo.innerHTML=`<p>6 cuotas sin interes de:</p>`
    precio12.innerText=total /6
    
    
    
    let Pagar = document.getElementById("Pagar")

    Pagar.addEventListener ("click", () => {
        document.getElementById("MostrarCarritoContenedor").style.display = "none";
        document.getElementById("pagos").style.display = "none";
        carrito.length = 0;
        localStorage.clear();
        ActualizarCarrito();

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
    })
    
  
})

let boton3V = document.getElementById("boton3V")

boton3V.onclick = () => {

    const total = carrito.reduce((acc, prod)=> acc + prod.precio,0);
    console.log(total)
    const precio12 = document.getElementById("precioTotal")
    MostrarCarritoInfo.innerHTML=`<p>3 cuotas sin interes de:</p>`
    precio12.innerText=total /3;
    
    
    
    let Pagar = document.getElementById("Pagar")

    Pagar.addEventListener ("click", () => {
        document.getElementById("MostrarCarritoContenedor").style.display = "none";
        document.getElementById("pagos").style.display = "none";
        carrito.length = 0;
        localStorage.clear();
        ActualizarCarrito();

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
    })
    
}

let botonEv = document.getElementById("botonEv")

botonEv.onclick = () => {

    const total = carrito.reduce((acc, prod)=> acc + prod.precio,0);
    console.log(total)
    const precio12 = document.getElementById("precioTotal")
    MostrarCarritoInfo.innerHTML=`<p> Un pago de:</p>`
    precio12.innerText=total 
    
    
    
    let Pagar = document.getElementById("Pagar")

    Pagar.addEventListener ("click", () => {
        document.getElementById("MostrarCarritoContenedor").style.display = "none";
        document.getElementById("pagos").style.display = "none";
        carrito.length = 0;
        localStorage.clear();
        ActualizarCarrito();

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
    })
    
}

//===========================pagos master=============================================

let boton12M = document.getElementById("boton12M")

boton12M.onclick = () => {
    const total = carrito.reduce((acc, prod)=> acc + prod.precio,0);
    const precio12 = document.getElementById("precioTotal")
    MostrarCarritoInfo.innerHTML=`<p>12 cuotas sin interes de:</p>`
    const porciento = (total * 20)/100
    precio12.innerText=(total + porciento)/12
    
    
    
    let Pagar = document.getElementById("Pagar")

    Pagar.addEventListener ("click", () => {
        document.getElementById("MostrarCarritoContenedor").style.display = "none";
        document.getElementById("pagos").style.display = "none";
        carrito.length = 0;
        localStorage.clear();
        ActualizarCarrito();

        Toastify({
            text: "Pago realizado",
            duration: 1500,
            style: {
                background: 'rgb(66, 161, 28)'
            }
        }).showToast();
        
        Swal.fire({
            title: 'Pago realizado',
            text: 'su pago fue realizado en 12 cuotas con un 20% de interes',
            icon: 'success',
            confirmButtonText: 'OK'
        })
    })
    
}

let boton6M = document.getElementById("boton6M")

boton6M.onclick = () => {

    const total = carrito.reduce((acc, prod)=> acc + prod.precio,0);
    console.log(total)
    const precio12 = document.getElementById("precioTotal")
    MostrarCarritoInfo.innerHTML=`<p>6 cuotas sin interes de:</p>`
    precio12.innerText=total /6
    
    
    
    let Pagar = document.getElementById("Pagar")

    Pagar.addEventListener ("click", () => {
        document.getElementById("MostrarCarritoContenedor").style.display = "none";
        document.getElementById("pagos").style.display = "none";
        carrito.length = 0;
        localStorage.clear();
        ActualizarCarrito();

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
    })
}

let boton3M = document.getElementById("boton3M")

boton3M.onclick = () => {
    
    const total = carrito.reduce((acc, prod)=> acc + prod.precio,0);
    console.log(total)
    const precio12 = document.getElementById("precioTotal")
    MostrarCarritoInfo.innerHTML=`<p>3 cuotas sin interes de:</p>`
    precio12.innerText=total /3;
    
    
    
    let Pagar = document.getElementById("Pagar")

    Pagar.addEventListener ("click", () => {
        document.getElementById("MostrarCarritoContenedor").style.display = "none";
        document.getElementById("pagos").style.display = "none";
        carrito.length = 0;
        localStorage.clear();
        ActualizarCarrito();
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
    })
}

let botonEm = document.getElementById("botonEm")

botonEm.onclick = () => {
    
    const total = carrito.reduce((acc, prod)=> acc + prod.precio,0);
    console.log(total)
    const precio12 = document.getElementById("precioTotal")
    MostrarCarritoInfo.innerHTML=`<p> Un pago de:</p>`
    precio12.innerText=total 
    
    
    
    let Pagar = document.getElementById("Pagar")

    Pagar.addEventListener ("click", () => {
        document.getElementById("MostrarCarritoContenedor").style.display = "none";
        document.getElementById("pagos").style.display = "none";
        carrito.length = 0;
        localStorage.clear();
        ActualizarCarrito();

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
    })   
}

//===========================pago en efectivo=======================================

let botonEfectivo = document.getElementById("botonEfectivo")

botonEfectivo.onclick = () => {
    
    const total = carrito.reduce((acc, prod)=> acc + prod.precio,0);
    console.log(total)
    const precio12 = document.getElementById("precioTotal")
    MostrarCarritoInfo.innerHTML=`<p> Pago en efectivo con un descuento del 20%:</p>`
    const porcientoMenos = (total * 20)/100;
    precio12.innerText=(total - porcientoMenos);
    
    
    
    let Pagar = document.getElementById("Pagar")

    Pagar.addEventListener ("click", () => {
        document.getElementById("MostrarCarritoContenedor").style.display = "none";
        document.getElementById("pagos").style.display = "none";
        carrito.length = 0;
        localStorage.clear();
        ActualizarCarrito();

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
    })
}



// //--------------------INICIO DE SESION-------------------------------------
// document.getElementById("registrar").addEventListener("click",function(){
//     let clave = document.getElementById("clave").value;
//     let mail = document.getElementById("mail").value;

//     if (clave == "" || mail == "" ){
//         document.getElementById("mensaje").innerText = "la clave o su Email estan vacios";
//     }else{
//         if(localStorage.getItem(mail)){
//             document.getElementById("mensaje").innerText = "Usted ya esta registrado, inicie sesion";
//         }else{
//             localStorage.setItem(mail,clave)
//             document.getElementById("mensaje").innerText = "Sus datos se registraron correctamente";
//         }
        
//     }
// })

// document.getElementById("ingresar").addEventListener("click",function(){
//     let clave = document.getElementById("clave").value;
//     let mail = document.getElementById("mail").value;

//     if (clave == "" || mail == "" ){
//         document.getElementById("mensaje").innerText = "la clave o su Email estan vacios";
//     }else{
//         if(localStorage.getItem(mail) ){
//             document.getElementById("mensaje").innerText = "inicio de sesion correcto, Bienvenido";
//             localStorage.setItem(mail,clave)
//         }else{
//             document.getElementById("mensaje").innerText = "Su Email es incorrecto, ingrese nuevamente";
//         }

//     }
// })

//--------------------TODOS LOS PRODUCTOS-------------------------------------

document.getElementById("boton5").addEventListener("click",function(){
    const lista = document.querySelector('#listado')

    fetch('/data.json')
        .then( (res) => res.json())
        .then( (data) => {

            data.forEach((producto) => {
                const li = document.createElement('li')
                li.innerHTML = `
                    <h4>${producto.nombre}</h4>
                    <p>${producto.precio}</p>
                    <p>Código: ${producto.id}</p>
                    <hr/>
                `
   
            lista.append(li)
        })
    })

    
})
