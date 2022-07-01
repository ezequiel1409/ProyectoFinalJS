productos = [];
class Producto{
    idProducto;
    nombreProducto;
    cantidadProducto;
    costoProducto;
    imagen;
    
    Producto(idProducto, nombreProducto, cantidadProducto, costoProducto,imagen){
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto.toUpperCase();
        this.cantidadProducto = cantidadProducto;
        this.costoProducto = costoProducto.parseFloat(costoProducto);
        this.imagen = imagen;
    }
    cargarProducto(idProducto, nombreProducto, cantidadProducto, costoProducto, imagen){
        let stockProductos = document.getElementById("stockProductos");
        productos.push({"idProducto": idProducto, "nombreProducto": nombreProducto, "cantidadProducto":cantidadProducto, "costoProducto":costoProducto, "imagen": imagen});
      
        for (let index = 0; index < productos.length; index++) {
            console.log(productos)
            stockProductos.innerHTML =  '<div class="col-4 col-md-4 card">'
            +   '<h1>'+  ${productos[index].nombreProducto}+ '</h1>'
        +   '</div>';
       }
        
            // console.log(productos[index]);
            // stockProductos.innerHTML =  '<div class="col-4 col-md-4 card">'
            //                 +   '<h1>'+ productos[index].nombreProducto+ '</h1>'
            //             +   '</div>';
                    // stockProductos.append(html);
        //  }
    }
    getIva(){
        return this.costoProducto = this.costoProducto * 1.21;
    }

    listarProductos(productos){
        let stockProductos = document.getElementById("stockProductos");
        let html = "";
       
      for (let index = 0; index < productos; index++) {
            console.log(productos);
            // stockProductos.innerHTML =  '<div class="col-4 col-md-4 card"><h1>' + $productos.nombreProducto + '</h1></div>';
            // html =   '<div class="col-4 col-md-4 card"><h1>' + $productos.nombreProducto + '</h1></div>';          
         }
        
    //     //     console.log(productos[index]);
    //     //     stockProductos.innerHTML =  '<div class="col-4 col-md-4 card">'
    //     //             +   '<h1>'+ productos[index].nombreProducto+ '</h1>'
    //     //         +   '</div>';
    //     //     // stockProductos.append(html);
       
       
    // // }
    }
}

let producto = new Producto();
producto.cargarProducto(000, "RASCADOR CIRCULAR CON RATON MOVIBLE Y PELOTA", 3, 1500, "\images\rascadorCircular.jpeg");
producto.cargarProducto(001, "BOZAL de SILICONA", 2, 1300, "\images\bozalDeSilicona.jpeg");
producto.cargarProducto(002, "Dispenser Lavanda", 10, 500, "\images\dispenserLavanda.jpeg");

producto.listarProductos(producto);


cursor = document.getElementById("carritoCompras");
cursor.addEventListener('mouseenter', function(){
    // parent.style.background = 'blue';
    console.log(cursor)
    cursor.className += "fa-beat";

});


// while(confirm("Desea cargar un producto?")){
//     prueba.añadirProducto();
//     console.log(prueba.getIva());
//     prueba.listarProductos();
// }