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
        productos.push({"idProducto": idProducto, "nombreProducto": nombreProducto, "cantidadProducto":cantidadProducto, "costoProducto":costoProducto, "imagen": imagen});

            return productos;
        }
   

    insertarProductosEnElDom(productos ){
        let filaProductos =  document.getElementById('stockProductos');
           for (const elemento of productos) {

                let col = document.createElement('div');
                col.classList.add('col-4');
                
                let card = document.createElement('div');
                card.classList.add('card');

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

                boton.addEventListener("click", () => {
                    console.log(boton)
                    cargarProductoAlCarrito(); // Agregar producto y precio al carrito
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
        cargarProductoAlCarrito(datos){
            console.log(productos)
        }
}    
Toastify({
    text: "This is a toast",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();




