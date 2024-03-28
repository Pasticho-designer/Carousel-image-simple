var index = 0;

show = (direccion) => {

    index += direccion;

    var imagenes = document.getElementsByClassName('contenedordeimagen');
    var puntos = document.getElementsByClassName('punto')

    for (i = 0; i < imagenes.length; i++)
        imagenes[i].style.display = "none";

    for (i = 0; i < puntos.length; i++)
        puntos[i].className = puntos[i].className.replace('active', '');

    if (index > imagenes.length - 1)
    index = 0;

    if (index < 0)
    index = imagenes.length -1;

    imagenes[index].style.display = "block";
    puntos[index].className += ' active';
}
show(0);