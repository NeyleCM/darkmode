const darkMode1 = document.getElementById('dark-mode1');
const darkMode2 = document.getElementById('dark-mode2');
const imgSol = document.getElementById('imgSol');
const wrapper = document.getElementById('wrapper');
const bangkok = document.getElementById('bangkok')
const titulo = document.getElementById('titulo')
const parrafos = document.getElementById('parrafos')
const darkModeBoton = document.getElementById('darkMode')

//const template = `<img src="./assets/img/luna.png" alt="Luna"/>`


//console.log(darkMode1)

// FUNCIÓN

const darkMode = () => {
    wrapper.classList.toggle('wrapper2')
    wrapper.classList.toggle('wrapper')
    bangkok.classList.toggle('yellow')
    bangkok.classList.toggle('bangkok')
    darkMode1.classList.toggle('back-clic');
    darkMode1.classList.toggle('dark-mode1');
    darkMode2.classList.toggle('back-azul');
    darkMode2.classList.toggle('dark-mode2');
    if (imgSol.classList.contains('imgSol')) {
        imgSol.src = './assets/img/luna.png';
        imgSol.classList.remove('imgSol');
        imgSol.classList.add('imgLuna');
    } else {
        imgSol.src = './assets/img/sol.png';
        imgSol.classList.remove('imgLuna');
        imgSol.classList.add('imgSol');
    }
    darkModeBoton.classList.toggle('whiteBoton')
    darkModeBoton.classList.toggle('darkModeBoton')
    titulo.classList.toggle('yellowtitulo')
    titulo.classList.toggle('titulo')
    parrafos.classList.toggle('parrafos-white')
    parrafos.classList.toggle('parrafos')
}

//Evento

darkMode1.addEventListener('click', darkMode)

