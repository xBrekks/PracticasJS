const titulo = document.getElementById('titulo');
titulo.textContent = 'Título nuevo';

const boton = document.getElementById('boton');
boton.addEventListener('click', () => {  
alert('¡Botón clicado!');
});

const lista = document.getElementById('lista');
const nuevoElemento = document.createElement('li');
nuevoElemento.textContent ='Nuevoelemento';
lista.appendChild(nuevoElemento);

const parrafo =document.getElementById('parrafo');
parrafo.style.color = 'red';
parrafo.style.fontSize = '24px';

