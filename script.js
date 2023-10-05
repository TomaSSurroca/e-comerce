// Puedes agregar funcionalidades adicionales aquí si es necesario
const carrito = [];
const listaCarrito = document.getElementById('lista-carrito');
const totalCarrito = document.getElementById('total-carrito');

function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio };
    carrito.push(producto);
    mostrarCarrito();
}

function mostrarCarrito() {
    listaCarrito.innerHTML = '';

    carrito.forEach((producto, index) => {
        const itemCarrito = document.createElement('li');
        itemCarrito.innerHTML = `${producto.nombre} - $${producto.precio.toFixed(2)} <button onclick="eliminarProducto(${index})">Eliminar</button>`;
        listaCarrito.appendChild(itemCarrito);
    });

    const total = carrito.reduce((total, producto) => total + producto.precio, 0).toFixed(2);
    totalCarrito.innerText = total;
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    mostrarCarrito();
}

function vaciarCarrito() {
    carrito.length = 0;
    mostrarCarrito();
}

