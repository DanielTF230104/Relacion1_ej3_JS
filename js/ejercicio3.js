function determinarTipoTriangulo() {
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);

    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        alert('Por favor, ingrese valores válidos para todos los lados.');
        return;
    }

    let tipoTriangulo;

    if (lado1 === lado2 && lado2 === lado3) {
        tipoTriangulo = 'equilátero';
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        tipoTriangulo = 'isósceles';
    } else {
        tipoTriangulo = 'escaleno';
    }

    document.getElementById('resultado').textContent = `El triángulo es ${tipoTriangulo}.`;
}