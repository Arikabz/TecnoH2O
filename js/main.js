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
    window.open("https://tecnoh2o.mercadoshops.com.mx/","_blank")
}
function goToEquipos(){
    location.href = "equipos.html";
}

//whatsapp button

const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

let whastapp = select('.wa-always-on')
  if (whastapp) {
    const toggleWhatsapp = () => {
      if (window.scrollY > 100) {
        whastapp.classList.add('active')
      } else {
        whastapp.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleWhatsapp)
    onscroll(document, toggleWhatsapp)
  } 