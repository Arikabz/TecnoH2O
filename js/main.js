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

  //contact form
  (function () {
    "use strict";
  
    let forms = document.querySelectorAll('.php-email-form');
  
    forms.forEach( function(e) {
      e.addEventListener('submit', function(event) {
        event.preventDefault();
  
        let thisForm = this;
  
        let action = thisForm.getAttribute('action');
        let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
        
        if( ! action ) {
          displayError(thisForm, 'The form action property is not set!')
          return;
        }
        thisForm.querySelector('.loading').classList.add('d-block');
        thisForm.querySelector('.error-message').classList.remove('d-block');
        thisForm.querySelector('.sent-message').classList.remove('d-block');
  
        let formData = new FormData( thisForm );
  
        if ( recaptcha ) {
          if(typeof grecaptcha !== "undefined" ) {
            grecaptcha.ready(function() {
              try {
                grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
                .then(token => {
                  formData.set('recaptcha-response', token);
                  php_email_form_submit(thisForm, action, formData);
                })
              } catch(error) {
                displayError(thisForm, error)
              }
            });
          } else {
            displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
          }
        } else {
          php_email_form_submit(thisForm, action, formData);
        }
      });
    });
  
    function php_email_form_submit(thisForm, action, formData) {
      fetch(action, {
        method: 'POST',
        body: formData,
        headers: {'X-Requested-With': 'XMLHttpRequest'}
      })
      .then(response => {
        if( response.ok ) {
          return response.text()
        } else {
          throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
        }
      })
      .then(data => {
        thisForm.querySelector('.loading').classList.remove('d-block');
        if (data.trim() == 'OK') {
          thisForm.querySelector('.sent-message').classList.add('d-block');
          thisForm.reset(); 
        } else {
          throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
        }
      })
      .catch((error) => {
        thisForm.querySelector('.sent-message').classList.add('d-block');
          thisForm.reset(); 
      });
    }
  
    function displayError(thisForm, error) {
      thisForm.querySelector('.loading').classList.remove('d-block');
      thisForm.querySelector('.error-message').innerHTML = error;
      thisForm.querySelector('.error-message').classList.add('d-block');
    }
  
  })();