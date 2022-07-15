let producto = new Producto();
// producto.cargarProducto(000, "RASCADOR CIRCULAR CON RATON MOVIBLE Y PELOTA", 0, 3, 1500, "./images/rascadorCircular.jpeg");
// producto.cargarProducto(001, "BOZAL de SILICONA", 0, 2, 1300, "./images/bozalDeSilicona.png");
// producto.cargarProducto(002, "Dispenser Lavanda", 0, 10, 500, "./images/dispenserLavanda.jpeg");
// producto.insertarProductosEnElDom(productos);
let options = {
    method: 'GET',
    "mode": 'no-cors'
};
let headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}
fetch("./js/data.json", options, headers)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        producto.insertarProductosEnElDom(data);
    });
   