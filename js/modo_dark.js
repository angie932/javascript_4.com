const button_switch = document.querySelector('#switch input[type="checkbox"]');

button_switch.addEventListener('change', cambiar_tema);//El evento change se activa cuando el elemento finaliza un cambio. Para ingreso de texto significa que el evento ocurre cuando se pierde foco en el elemento.

function cambiar_tema(ev) {
    if (ev.target.checked) {
        document.documentElement.setAttribute('tema', 'blanco'); //setAttribute: Establece el valor de un atributo en el elemento indicado. Si el atributo ya existe, el valor es actualizado, en caso contrario, el nuevo atributo es añadido con el nombre y valor indicado.
        
    } else {
        document.documentElement.setAttribute('tema', 'negro');
    }
}