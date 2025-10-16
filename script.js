/**
 * Función reutilizable para calcular el factorial de un número.
 * @param {number} num El número del cual se calculará el factorial.
 * @returns {number} El resultado del factorial.
 */
function factorial(num) {
    if (num < 0) return -1;
    if (num === 0) return 1;

    let resultado = 1;
    for (let i = 2; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}

/**
 * Calcula las permutaciones ordinarias (n!) y muestra el resultado con el procedimiento.
 */
function calcularPermutacion() {
    const n = parseInt(document.getElementById('permN').value);
    const resultadoDiv = document.getElementById('resultadoPerm');

    if (isNaN(n) || n < 0) {
        resultadoDiv.innerHTML = "Por favor, introduce un número válido.";
        return;
    }

    // --- INICIO DE LA MODIFICACIÓN ---
    let procedimiento = `P<sub>${n}</sub> = ${n}! <br>`; // Muestra la fórmula inicial

    // Construir la cadena del procedimiento
    if (n === 0 || n === 1) {
        procedimiento += `${n}! = 1`;
    } else {
        let expansion = [];
        for (let i = n; i >= 1; i--) {
            expansion.push(i);
        }
        procedimiento += `${n}! = ${expansion.join(' × ')}`;
    }

    const resultado = factorial(n);
    // Mostramos el procedimiento completo y el resultado final
    resultadoDiv.innerHTML = `${procedimiento} <br><strong>Resultado: ${resultado.toLocaleString('es')}</strong>`;
    // --- FIN DE LA MODIFICACIÓN ---
}

/**
 * Calcula las combinaciones ordinarias y muestra el resultado con el procedimiento.
 */
function calcularCombinacion() {
    const n = parseInt(document.getElementById('combN').value);
    const k = parseInt(document.getElementById('combK').value);
    const resultadoDiv = document.getElementById('resultadoComb');

    if (isNaN(n) || isNaN(k) || n < 0 || k < 0) {
        resultadoDiv.innerHTML = "Por favor, introduce números válidos.";
        return;
    }
    if (k > n) {
        resultadoDiv.innerHTML = "Error: (k) no puede ser mayor que (n).";
        return;
    }

    // --- INICIO DE LA MODIFICACIÓN ---
    let procedimiento = `C(${n},${k}) = <sup>${n}!</sup> / <sub>(${k}! * (${n}-${k})!)</sub> <br>`;
    procedimiento += `C(${n},${k}) = <sup>${n}!</sup> / <sub>(${k}! * ${n - k}!)</sub> <br>`;

    // Calculamos los factoriales
    const factN = factorial(n);
    const factK = factorial(k);
    const factNK = factorial(n - k);

    // Mostramos el valor de cada factorial
    procedimiento += `C(${n},${k}) = <sup>${factN.toLocaleString('es')}</sup> / <sub>(${factK.toLocaleString('es')} × ${factNK.toLocaleString('es')})</sub> <br>`;
    procedimiento += `C(${n},${k}) = <sup>${factN.toLocaleString('es')}</sup> / <sub>${(factK * factNK).toLocaleString('es')}</sub> <br>`;

    const resultado = factN / (factK * factNK);

    // Mostramos el procedimiento completo y el resultado final
    resultadoDiv.innerHTML = `${procedimiento} <strong>Resultado: ${resultado.toLocaleString('es')}</strong>`;
    // --- FIN DE LA MODIFICACIÓN ---
}