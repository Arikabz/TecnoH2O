let popup1 =document.getElementById('popupEquipos')
let popup2 = document.getElementById('popupInsumos');
let popup3 = document.getElementById('popupEquipos2')

function openPopup1(){
    popup1.classList.add('open-popup')
}
function closePopup1(){
    popup1.classList.remove('open-popup')
}
function openPopup2(){
    popup2.classList.add('open-popup')
}
function closePopup2(){
    popup2.classList.remove('open-popup')
}
function openPopup3(){
    popup3.classList.add('open-popup')
}
function closePopup3(){
    popup3.classList.remove('open-popup')
}

let tienda = document.getElementById('tiendaButton');

function goToTienda(){
    window.open("https://mercadolibre.com.mx","_blank")
}
function goToEquipos(){
    location.href = "equipos.html";
}