//------------------------------- Productos a comprar en un array ---------------------------------------------------
const productos = [
    {marca:"intel"  , modelo:"core i3"  , precio:100000},
    {marca:"intel"  , modelo:"core i5"  , precio:150000},
    {marca:"intel"  , modelo:"core i7"  , precio:200000},
    {marca:"amd"    , modelo:"ryzen 3"  , precio:100000},
    {marca:"amd"    , modelo:"ryzen 5"  , precio:150000},
    {marca:"amd"    , modelo:"ryzen 7"  , precio:200000},
    {marca:"nvidia" , modelo:"rtx 3060" , precio:100000},
    {marca:"nvidia" , modelo:"rtx 3070" , precio:150000},
    {marca:"nvidia" , modelo:"rtx 3080" , precio:200000}
    ]
    const carrito = []
    let comprar = parseInt(prompt(`
    Marque [1] si desea ingresar a la tienda
    Marque [2] si desea salir de la tienda
    `))
    if(comprar === 1){
        let todosLosProductos =  productos.map((producto)  => `MODELO:${producto.modelo} PRECIO: ${producto.precio}
        `)
        alert(todosLosProductos.join(" - "))
    }else{
        alert(`Gracias x su visita`)
    }
    //------------------------------- Seleccionar Producto ---------------------------------------------------
    while(comprar != 2){
        let item = prompt(`Agregar producto al carrito`)
        let precio = 0
        if(item =="core i3" || item =="core i5" || item =="core i7" || item =="ryzen 3" || item =="ryzen 5" || item  =="ryzen 7" || item == "rtx 3060" || item == "rtx 3070" || item == "rtx 3080"){
            switch(item){
                case "core i3":
                    precio=100000 ;
                break;
                case "core i5":
                    precio=150000 ;
                break;
                case "core i7":
                    precio=200000 ;
                break;
                case "ryzen 3":
                    precio=100000 ;
                break;
                case "ryzen 5":
                    precio=150000 ;
                break;
                case "ryzen 7":
                    precio=200000 ;
                break;
                case "rtx 3060":
                    precio=100000 ;
                break;
                case "rtx 3070":
                    precio=150000 ;
                break;
                case "rtx 3080":
                    precio=200000 ;
                break;
                default:
                    break;
            }
    //------------------------------- Cantidad de un mismo producto ---------------------------------------------------
        let cantidad = parseInt(prompt(`Cuantos deseas comprar`))
        carrito.push({item,cantidad,precio})
        console.log(carrito)
        }else{
            alert(`Producto no encontrado`)
        }
        comprar = prompt(`Desea seguir comprando si o no`)
    //------------------------------- Suma de la cantidad de productos ---------------------------------------------------
        while(comprar == "no"){
            alert(`Gracias por la compra`)
            carrito.map((itemFinal) =>{
                alert(
                `
                Producto:${itemFinal.item} 
                Cantidad: ${itemFinal.cantidad} 
                Precio :${itemFinal.precio * itemFinal.cantidad}
                `)
            })
            break;
        }
    }