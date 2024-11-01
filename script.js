document.getElementById('calcular').addEventListener('click', function() {
    const cantidades = document.querySelectorAll('.cantidad');
    let total = 0;

    cantidades.forEach(function(cantidad) {
        const value = parseInt(cantidad.value) || 0; // Si no es un número, toma 0
        const precio = parseInt(cantidad.getAttribute('data-precio')); // Obtener el precio del producto
        total += value * precio; // Sumar el costo total
    });

    document.getElementById('resultado').innerText = 'Total en Pesos: $' + total;
});
