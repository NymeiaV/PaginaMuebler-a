/* Animación de la sección Inicio y Vendidos */

$(document).ready(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        $('section').css({
            'background-position-x': - scroll + 'px'
        })
    })
})

/* Fin Animación */

/* Menu desplegable Nav */

function showmenu() {
    document.getElementById("toggle").classList.toggle("show");
  }

/* Fin Menu desplegable */

/* Validación formulario */

const nombre = document.getElementById("name");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const alertas = document.getElementById("alertas")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warn = ""
    const alert = ""
    const regexNom = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let submit = true
    alertas.innerHTML = ""
    console.log(regex.test(email.value));
    if (!regex.test(email.value)) {
        warn += `E-Mail ingresado inválido <br>`
        submit = false
    }
    if (!regexNom.test(nombre.value)) {
        warn += `Nombre ingresado inválido <br>`
        submit = false
    }
    if(!submit){
        alertas.innerHTML = warn
    }
})

/* Fin validación */