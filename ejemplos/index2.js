const boton = document.getElementById('boton');
const nuevoColor = document.getElementById('cuerpo');
const titulo = document.getElementById('titulo');

boton.addEventListener('click', () => {  
alert('¡Botón clicado!');
titulo.textContent = 'Haz cambiado el dom';
nuevoColor.style.backgroundColor='#020809';
titulo.style.color='#ffff';
});