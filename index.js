
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);

       //No pude aplicar el operador ternario en la siguiente linea, porque sera?
       //puede ser que el mismo no te deje declarar una constante y tenga qu ser si o si una instruccion?
    if (localStorage.getItem('carrito')) {
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito);
        actualizarTotalesCarrito(carrito);
    };
});