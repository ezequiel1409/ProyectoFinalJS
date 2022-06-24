let productos = [];
class Producto{
    idProducto;
    nombreProducto;
    cantidadProducto;
    costoProducto;
    
    Producto(nombreProducto, cantidadProducto, costoProducto, productos){
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto.toUpperCase();
        this.cantidadProducto = cantidadProducto;
        this.costoProducto = costoProducto.parseFloat(costoProducto);
        this.productos = this.productos;
    }
    getIva(){
        return this.costoProducto = this.costoProducto * 1.21;
    }
    añadirProducto(){
        let productosACargar =  {idProducto: 0, nombreProducto: "", cantidadProducto: 0, costoProducto: 0.00};
        productosACargar.idProducto++; 
        productosACargar.nombreProducto = prompt("Ingrese nombre del producto que desea cargar");
        productosACargar.cantidadProducto = prompt("Ingrese la cantidad del producto que desea cargar");
        productosACargar.costoProducto = parseFloat(prompt("Ingrese el costo unitario del producto, sin iva"));

        productos.push(productosACargar);
        let confirmacion = confirm("Desea seguir cargando?");
        if(confirmacion){
            this.añadirProducto();
        }
      
    }
    listarProductos(){
        for (let elemento of productos)
        console.log(productos);
    }
    
}
// let prueba = new Producto();
// while(confirm("Desea cargar un producto?")){
//     prueba.añadirProducto();
//     console.log(prueba.getIva());
//     prueba.listarProductos();
// }
let cursor = document.getElementById("carritoCompras");
cursor.addEventListener('mouseenter', function(){
    // parent.style.background = 'blue';
    console.log(cursor)
    cursor.className += "fa-beat";

});
