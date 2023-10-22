// funciones del carrito
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


// funciones del carrito (mantenlas como están)

// Nueva función para cargar productos desde JSON
function cargarProductosDesdeJSON() {
    // Realizar una solicitud para cargar el archivo JSON
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "productos.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var productos = JSON.parse(xhr.responseText).productos;

            // Aquí puedes agregar los productos al carrito si lo deseas
            // Por ejemplo, puedes agregar todos los productos automáticamente al cargar la página
            productos.forEach(function (producto) {
                agregarAlCarrito(producto.nombre, producto.precio);
            });
        }
    };
    xhr.send();
}

// Ejecuta la función de carga cuando la página se cargue
document.addEventListener("DOMContentLoaded", function () {
    // Carga los productos desde el JSON
    cargarProductosDesdeJSON();
});

