

const mostrarProductos = (productos) => {
  const contenedorProductos = document.getElementById("producto-contenedor");

  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-image">
                        <img src=${producto.img}>
                        <span class="card-title">${producto.nombre}</span>
                        <a class="btn-floating halfway-fab wabes-effect waves-light red" id=boton${producto.id}><i class="material-icons">add_shopping_cart</i></a>
                      </div>
                      <div class="card-content">
                          <p>${producto.desc}</p>
                          <p>Precio: $${producto.precio}</p>
                      </div>
                      `
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      validarProductoRepetido(producto.id);
    })
  });
};


//Aplique la libreria SweetAlert, probe con varias clases y me toma el doom en general,
//Donde haga click, me toma el evento en todo el doom en general. como podria hacer para ubicar el boton agregar?

let btn = document.getElementById('producto-contenedor');

btn = addEventListener("click", () => {
  Swal.fire({
    icon: "success",
    title: "Se agrego al carrito",
    text: "esperamos tu compra",
    showConfirmButton: false,
    timer: 1300
  })
})
