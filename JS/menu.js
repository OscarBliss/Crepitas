class Carrito{
    comProducto(e){
        e.preventDefault();
        if (e.target.classList.contains('c1')) {
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto);
        }
    }
}

//const carrito = document.getElementById('carrito')