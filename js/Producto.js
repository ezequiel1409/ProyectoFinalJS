class Producto{
     nombreProducto;
     cantidadProducto;
     costoProducto;
    Productos = [];
    Producto(nombreProducto, cantidadProducto, costoProducto, iva){
        this.nombreProducto = nombreProducto.toUpperCase();
        this.cantidadProducto = cantidadProducto;
        this.costoProducto = costoProducto.parseFloat(costoProducto);
    }
    getIva(){
        return this.costoProducto = this.precio * 1.21;
    }
    añadirProducto(no)

}