productos = [];
carritoDeProductos = [];
class Producto{
    idProducto;
    nombreProducto;
    cantidadProductoAComprar;
    stockProducto;
    costoProducto;
    imagen;
    
    Producto(idProducto, nombreProducto, cantidadProducto, costoProducto,imagen){
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto.toUpperCase();
        this.cantidadProductoAComprar = cantidadProductoAComprar;
        this.stockProducto = stockProducto;
        this.costoProducto = costoProducto.parseFloat(costoProducto);
        this.imagen = imagen;
        }
    cargarProducto(idProducto, nombreProducto, cantidadProductoAComprar, stockProducto, costoProducto, imagen){
        productos.push({"idProducto": idProducto, "nombreProducto": nombreProducto, "cantidadProductoAComprar":cantidadProductoAComprar,"stockProducto":stockProducto,  "costoProducto":costoProducto, "imagen": imagen});

            return productos;
        }
   

    insertarProductosEnElDom(productos ){
        let filaProductos =  document.getElementById('stockProductos');
        let continuarCompra =  document.getElementsByClassName('continuarCompra');
      

        let cantidadDeProductosEnElCarrito = document.getElementById('cantidadDeProductosEnElCarrito');
           for (const elemento of productos) {

                let col = document.createElement('div');
                col.classList.add('col-12', 'col-sm-12', 'col-md-4','mb-3');
                
                let card = document.createElement('div');
                card.classList.add('card', 'p-2' );

                let divIMG = document.createElement('div');
                divIMG.classList.add('cardIMGTop');

                let cardBody = document.createElement('div');
                cardBody.classList.add('card-body');
        
                let cardTitle = document.createElement('h4');
                cardTitle.classList.add('card-title');
                cardTitle.innerText = elemento.nombreProducto;
                
                let cardIMG = document.createElement('img');
                cardIMG.classList.add('img-thumbnail');
                cardIMG.setAttribute('src', elemento.imagen);

                let cardPrecio = document.createElement('p');
                cardPrecio.innerText = elemento.costoProducto;

                let boton = document.createElement('button');
                boton.classList.add('btn', 'btn-primary', 'botonAgregar');

                let iconoBoton = document.createElement('i');
                iconoBoton.classList.add('fa-solid', 'fa-plus');
                boton.textContent = ' AÑADIR AL CARRITO ';
                console.log(elemento.stockProducto);
                boton.addEventListener("click", () => {
                    // continuarCompra.classList.replace("btn btn_disabled", "btn btn_primary");
                    console.log("soy producto ciclando: " + elemento.cantidadProductoAComprar)
                    if(!(elemento.cantidadProductoAComprar > elemento.stockProducto)){
                    elemento.cantidadProductoAComprar++;
                    cantidadDeProductosEnElCarrito.innerHTML =  elemento.cantidadProductoAComprar;
                        Toastify({
                            
                                text: "¡Producto agregado con exito al carrito!",
                                autoClose: 2000,
                                gravity: "top", 
                                close: "true",
                                position: "right",
                                style: {
                                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                                  },
                            onClick: function(){} // Callback after click
                        }).showToast();
                        cargarProductoAlCarrito(`${cardIMG.src} ${cardTitle.innerText} $${cardPrecio.innerText}`); 
                    }else{
                        Toastify({
                            text: "No se puede agregar el producto, debido a que el stock que deseas adquirir, es superior al que actualmente tenemos!. Disculpa por las molestias!",
                            autoClose: 1000,
                            gravity: "bottom", 
                            close: "true",
                            position: "right",
                            style: {
                              background: "#dc3545",
                            },
                            onClick: function(){} // Callback after click
                          }).showToast();
    
                    }   
                   
                });
        
                filaProductos.appendChild(col);
                col.appendChild(card);
                
                card.appendChild(divIMG);
                
                divIMG.appendChild(cardIMG);
                
                card.appendChild(cardBody);
                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardPrecio);
        
                card.appendChild(boton);
                boton.appendChild(iconoBoton);
        
            } 
        }
       
}  
function cargarProductoAlCarrito(producto){
    let listadoDeProductosEnElCarro = document.getElementById('carritoDeProductos');
    let nuevoProd = document.createElement("li");
    let cardIMG = document.createElement('div');
    let divIMG = document.createElement('img');
    let botonBorrar = document.createElement('button');
        
        carritoDeProductos.push(producto);
    // console.log(producto)
    divIMG.classList.add('cardIMGTop');
    cardIMG.classList.add('img-thumbnail');
    cardIMG.setAttribute('src', producto.src);

    nuevoProd.classList.add("list-group-item", "text-right", "mx-2");
    nuevoProd.textContent = producto;
    nuevoProd.id = producto + "EnCarrito";

    botonBorrar.classList.add('btn', 'btn-danger', 'mx-5');
    botonBorrar.textContent = 'x';
    botonBorrar.addEventListener("click", () => {
        eliminarProductoCarro(carritoDeProductos)
    });
    
    nuevoProd.appendChild(divIMG);
    cardIMG.appendChild(divIMG);
    nuevoProd.appendChild(botonBorrar);

    listadoDeProductosEnElCarro.appendChild(nuevoProd);

    cargarProductoAlCarritoEnLocalStorage(carritoDeProductos)
}  

function cargarProductoAlCarritoEnLocalStorage(productos){
    if(productos.length > 0){
        localStorage.setItem("productos", JSON.stringify(productos));
    }
}
function eliminarProductoCarro(producto){
    producto = producto.filter(productos => productos.id !== producto);
}



