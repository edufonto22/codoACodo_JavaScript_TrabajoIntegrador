
function calcularPrecio(){
    let cantidad = document.getElementById('inputCantidad').value;
    cantidad = parseInt(cantidad);
    let categoria = document.getElementById('inputCategoria').value;
    
    let descuento = calcularDescuento(categoria);
    let precioFinal = cantidad * (200 - descuento);

    if (Number.isNaN(cantidad)) {
        alert('Ingrese una cantidad');
    } else {
        document.getElementById('total').style.display= 'block';
        document.getElementById('total').innerHTML = cantidad + ' entradas x $200 = $' + (cantidad * 200) + '<br>Descuento: $' + (descuento * cantidad) + '<br><br><b>TOTAL A PAGAR: $</b>' + '<b>' + precioFinal + '<b>';
    }
}

function calcularDescuento(categoria) {
    let descuento;

    if (categoria === 'Estudiante') {
        descuento = (200 * 80) / 100;
    } else if (categoria === 'Trainee') {
        descuento = (200 * 50) / 100;
    } else if (categoria === 'Junior') {
        descuento = (200 * 15) / 100;
    }

    return descuento;
}