 function factorial(num) {
    if (num < 0) return -1;
    if (num === 0) return 1;
     let resultado = 1;
    for (let i = 2; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}
 
function calcularPermutacion() {
    const n = parseInt(document.getElementById('permN').value);
    const resultadoDiv = document.getElementById('resultadoPerm');
    const btnMostrar = document.getElementById('mostrarPermBtn');
    const listaDiv = document.getElementById('listaPermutaciones');

    btnMostrar.style.display = 'none';
    listaDiv.style.display = 'none';
    listaDiv.innerHTML = '';

    if (isNaN(n) || n < 0) {
        resultadoDiv.innerHTML = "Por favor, introduce un número válido.";
        return;
    }
    let procedimiento = `P<sub>${n}</sub> = ${n}! <br>`;
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
    resultadoDiv.innerHTML = `${procedimiento} <br><strong>Resultado: ${resultado.toLocaleString('es')}</strong>`;

    if (resultado > 0 && n <= 7) {
        btnMostrar.style.display = 'block';
    }
}
 
function calcularCombinacion() {
    const n = parseInt(document.getElementById('combN').value);
    const k = parseInt(document.getElementById('combK').value);
    const resultadoDiv = document.getElementById('resultadoComb');
    const btnMostrar = document.getElementById('mostrarCombBtn');
    const listaDiv = document.getElementById('listaCombinaciones');

    btnMostrar.style.display = 'none';
    listaDiv.style.display = 'none';
    listaDiv.innerHTML = '';

    if (isNaN(n) || isNaN(k) || n < 0 || k < 0) {
        resultadoDiv.innerHTML = "Por favor, introduce números válidos.";
        return;
    }
    if (k > n) {
        resultadoDiv.innerHTML = "Error: (k) no puede ser mayor que (n).";
        return;
    }
 
    let procedimiento = `C(${n},${k}) = <sup>${n}!</sup> / <sub>(${k}! * (${n}-${k})!)</sub> <br>`;
     procedimiento += `C(${n},${k}) = <sup>${n}!</sup> / <sub>(${k}! * ${n - k}!)</sub> <br>`;
    const factN = factorial(n);
    const factK = factorial(k);
     const factNK = factorial(n - k);
    procedimiento += `C(${n},${k}) = <sup>${factN.toLocaleString('es')}</sup> / <sub>(${factK.toLocaleString('es')} × ${factNK.toLocaleString('es')})</sub> <br>`;
    procedimiento += `C(${n},${k}) = <sup>${factN.toLocaleString('es')}</sup> / <sub>${(factK * factNK).toLocaleString('es')}</sub> <br>`;
     const resultado = factN / (factK * factNK);
    resultadoDiv.innerHTML = `${procedimiento} <strong>Resultado: ${resultado.toLocaleString('es')}</strong>`;

    if (resultado > 0) {
        btnMostrar.style.display = 'block';
    }
}

function mostrarPermutaciones() {
    const n = parseInt(document.getElementById('permN').value);
    const listaDiv = document.getElementById('listaPermutaciones');

    if (n > 7) {
        listaDiv.innerHTML = "<span>Hay demasiadas permutaciones (&gt;5,040) para mostrar.</span>";
        listaDiv.style.display = 'block';
        return;
    }

    const elementos = Array.from({ length: n }, (_, i) => i + 1);
    const permutaciones = [];

    function generar(arr, l = 0) {
        if (l === arr.length - 1) {
            permutaciones.push([...arr]);
            return;
        }
        for (let i = l; i < arr.length; i++) {
            [arr[l], arr[i]] = [arr[i], arr[l]];
            generar(arr, l + 1);
            [arr[l], arr[i]] = [arr[i], arr[l]]; 
        }
    }

    generar(elementos);
    listaDiv.innerHTML = permutaciones.map(p => `<span>{ ${p.join(', ')} }</span>`).join('');
    listaDiv.style.display = 'block';
}

function mostrarCombinaciones() {
    const n = parseInt(document.getElementById('combN').value);
    const k = parseInt(document.getElementById('combK').value);
    const listaDiv = document.getElementById('listaCombinaciones');

    const numCombinaciones = factorial(n) / (factorial(k) * factorial(n - k));
    if (numCombinaciones > 500) {
        listaDiv.innerHTML = "<span>Hay demasiadas combinaciones (&gt;500) para mostrar.</span>";
        listaDiv.style.display = 'block';
        return;
    }

    const elementos = Array.from({ length: n }, (_, i) => i + 1);
    const combinaciones = [];

    function generar(inicio, comboActual) {
        if (comboActual.length === k) {
            combinaciones.push([...comboActual]);
            return;
        }
        if (inicio === elementos.length) {
            return;
        }
        for (let i = inicio; i < elementos.length; i++) {
            comboActual.push(elementos[i]);
            generar(i + 1, comboActual);
            comboActual.pop();
        }
    }

    generar(0, []);
    listaDiv.innerHTML = combinaciones.map(combo => `<span>{ ${combo.join(', ')} }</span>`).join('');
    listaDiv.style.display = 'block';
}