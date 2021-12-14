
document.getElementById('btn-inicio').addEventListener('click',iniciarSesion)
document.getElementById('btn-registro').addEventListener('click',registro)
document.getElementById('btn-close').addEventListener('click',iniciarSesion,registro)

window.addEventListener('resize',anchoPa);

var contenedor = document.querySelector('.contenedor-login-registro')
var form_log = document.querySelector('.formulario-login')
var form_reg = document.querySelector('.formulario-registro')

var caja_t_login = document.querySelector('.caja-trasera-login')
var caja_t_reg = document.querySelector('.caja-trasera-registro')

anchoPa();

function iniciarSesion() {
    if(window.innerWidth>850){
        form_reg.style.display = 'none'
        contenedor.style.left = '10px'
        form_log.style.display = 'block'

        caja_t_reg.style.opacity = '1'
        caja_t_login.style.opacity ='0'
    }else{
        form_reg.style.display = 'none'
        contenedor.style.left = '0px'
        form_log.style.display = 'block'

        caja_t_reg.style.display = 'block'
        caja_t_login.style.display='none'
    }
}


function registro() {
    if (window.innerWidth>850) {
        form_reg.style.display = 'block'
        contenedor.style.left = '410px'
        form_log.style.display = 'none'

        caja_t_reg.style.opacity = '0'
        caja_t_login.style.opacity ='1'
    }else{
        form_reg.style.display = 'block'
        contenedor.style.left = '0px'
        form_log.style.display = 'none'

        caja_t_reg.style.display = 'none'
        caja_t_login.style.display ='block'
        caja_t_login.style.opacity = '1'
    }
}

function anchoPa() {
    if (window.innerWidth > 850) {
        caja_t_login.style.display= 'block'
        caja_t_reg.style.display= 'block'
    }else{
        caja_t_reg.style.display = 'block'
        caja_t_reg.style.opacity = '1'
        caja_t_login.style.display = 'none'
        form_log.style.display = 'block'
        form_reg.style.display = 'none'
        contenedor.style.left = '0px'
    }
}