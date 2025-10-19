// Espera a que todo el contenido del HTML se cargue
document.addEventListener('DOMContentLoaded', function() {

    // Seleccionamos los elementos del DOM que vamos a usar
    const form = document.getElementById('form-felicidad');
    const input = document.getElementById('momento-input');
    const lista = document.getElementById('lista-momentos');

    // Escuchamos el evento 'submit' del formulario
    form.addEventListener('submit', function(event) {
        // Prevenimos que la página se recargue, que es el comportamiento por defecto
        event.preventDefault();

        // Obtenemos el texto que el usuario escribió (y quitamos espacios en blanco)
        const nuevoMomentoTexto = input.value.trim();

        // Si el usuario escribió algo
        if (nuevoMomentoTexto !== '') {
            // Creamos un nuevo elemento de lista <li>
            const nuevoLi = document.createElement('li');
            
            // Le ponemos el texto del input a nuestro nuevo <li>
            nuevoLi.textContent = nuevoMomentoTexto;
            
            // Añadimos el nuevo <li> a nuestra lista <ul>
            lista.appendChild(nuevoLi);
            
            // Limpiamos el campo de texto para que el usuario pueda escribir otro momento
            input.value = '';
        }
    });
});