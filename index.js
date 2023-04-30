
function mPago(precio){
    let tPago = parseInt(prompt(`Ingrese el metodo de pago
[1]  efectivo
[2] credito 20% o 30% de incremento`))
    if(tPago === 1){
        alert (`El precio en efectivo es de ${precio}`)
    }
    else if (tPago === 2){
        let cuotas = parseInt(prompt(
`En cuantas cotas deseas pagar
20% de 1 a 6 cuotas
30% de 7 a 12 cuotas`))
        if(cuotas > 0 && cuotas < 7){
            let interes20 = precio * 1.2
            alert(`El precio en ${cuotas} cuotas es de ${interes20}`)
        }
        else if(cuotas > 6 && cuotas < 13){
            let interes30 = precio * 1.3
            alert(`El precio en ${cuotas} cuotas es de ${interes30}`)
        }
        else{
            alert(`El numero no es correcto`)
        }
    }
    else{
        alert(`El numero no es correcto`)
    }
}
let nombreUsuario = prompt(`Ingrese nombre de usuario [admin]`);
let contraseña =prompt(`Ingrese contraseña [password]`.toLowerCase());
while (nombreUsuario == "admin" && contraseña == "password"){
    alert(`Bienvenido a la tienda de prosesadores`)
    let tipoProsesador = parseInt(prompt(`
    Ingrese la opcion que desea comprar
    [1] intel i3 100usd
    [2] intel i5 200usd
    [3] intel i7 300usd   
    [4] intel i9 400usd
    `))
    switch(tipoProsesador){
        case 1 :
            mPago(100)
            break;
        case 2 :
            mPago(200)
            break;
        case 3 :
            mPago(300)
            break;
        case 4 :
            mPago(400)
            break;
        default :
            alert(`El numero ingresado no es correcto`)   
            break;     
    }
    let salida = parseInt(prompt(`   
    1 - Volver a comprar
    2 - Salir`))
    if(salida === 1){
        true
    }
    else{
        break;
    }
}