function encriptarTexto() {
    const textoIngresado = document.getElementById("texto").value;

    function tieneMayusculasOEspeciales(texto) {
        const caracteresEspeciales = /[^a-z0-9\s]/i;
        for (let i = 0; i < texto.length; i++) {
            if (texto[i] === texto[i].toUpperCase() && texto[i] !== texto[i].toLowerCase()) {
                etiquetasPersonalizadas("#salida", "El texto contiene letras mayúsculas o caracteres especiales.");
                return false;
            } else if (caracteresEspeciales.test(texto[i])) {
                etiquetasPersonalizadas("#salida", "El texto contiene letras mayúsculas o caracteres especiales.");
                return false;
            }
        }
        return true;
    }

    function reemplazarVocales(texto) {
        let textoEncriptado = '';
        const reemplazos = {
            'a': 'ai',
            'e': 'enter',
            'i': 'imes',
            'o': 'ober',
            'u': 'ufat'
        };

        for (let i = 0; i < texto.length; i++) {
            let caracter = texto[i];
            if (reemplazos[caracter] !== undefined) {
                textoEncriptado += reemplazos[caracter];
            } else {
                textoEncriptado += caracter;
            }
        }
        return textoEncriptado;
    }

    if (tieneMayusculasOEspeciales(textoIngresado)) {
        const textoEncriptado = reemplazarVocales(textoIngresado);
        etiquetasPersonalizadas("#salida", textoEncriptado);
    }
}

function mostrarResultado() {
    encriptarTexto();
}

function etiquetasPersonalizadas(selector, texto) {
    let etiquetaHTML = document.querySelector(selector);
    etiquetaHTML.textContent = texto;
    enableCopyButton();
}

function resultadoDesencriptar() {
    const textoDesencriptar = document.getElementById("texto").value;

    function tieneMayusculasOEspeciales(texto) {
        const caracteresEspeciales = /[^a-z0-9\s]/i;
        for (let i = 0; i < texto.length; i++) {
            if (texto[i] === texto[i].toUpperCase() && texto[i] !== texto[i].toLowerCase()) {
                etiquetasPersonalizadas("#salida", "El texto contiene letras mayúsculas o caracteres especiales.");
                return false;
            } else if (caracteresEspeciales.test(texto[i])) {
                etiquetasPersonalizadas("#salida", "El texto contiene letras mayúsculas o caracteres especiales.");
                return false;
            }
        }
        return true;
    }

    function reemplazarSecuencias(texto) {
        const reemplazos = {
            'ai': 'a',
            'enter': 'e',
            'imes': 'i',
            'ober': 'o',
            'ufat': 'u'
        };

        for (const [sec, reemplazo] of Object.entries(reemplazos)) {
            texto = texto.split(sec).join(reemplazo);
        }

        return texto;
    }

    if (tieneMayusculasOEspeciales(textoDesencriptar)) {
        const textoDesencriptado = reemplazarSecuencias(textoDesencriptar);
        etiquetasPersonalizadas("#salida", textoDesencriptado);
    }
}

function mostrarDesencriptado() {
    resultadoDesencriptar();
}

function enableCopyButton() {
    const outputText = document.querySelector('#salida');
    const copyButton = document.getElementById('copiarBoton');
    const defaultContent = "Aquí aparecerá el texto de salida";
    const inactiveContents = [
        defaultContent,
        "El texto contiene letras mayúsculas o caracteres especiales."
    ];

    if (!inactiveContents.includes(outputText.textContent) && outputText.textContent.trim() !== '') {
        copyButton.disabled = false;
    } else {
        copyButton.disabled = true;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copiarBoton');
    const outputText = document.querySelector('#salida');

    copyButton.addEventListener('click', function() {
        navigator.clipboard.writeText(outputText.textContent)
            .then(() => {
                alert('Texto copiado al portapapeles');
            })
            .catch(err => {
                alert('Error al copiar el texto: ' + err);
            });
    });

    copyButton.disabled = true;
});


/*

function encriptarTexto() {
    const textoIngresado = document.getElementById("texto").value;

    // Función para verificar si el texto contiene mayúsculas o caracteres especiales
    function tieneMayusculasOEspeciales(texto) {
        const caracteresEspeciales = /[^a-z0-9\s]/i;
        for (let i = 0; i < texto.length; i++) {
            if (texto[i] === texto[i].toUpperCase() && texto[i] !== texto[i].toLowerCase()) {
                etiquetasPersonalizadas("pre", "El texto contiene letras mayúsculas o caracteres especiales.");
                return false; // Texto no válido
            } else if (caracteresEspeciales.test(texto[i])) {
                etiquetasPersonalizadas("pre", "El texto contiene letras mayúsculas o caracteres especiales.");
                return false; // Texto no válido
            }
        }
        return true; // Texto válido
    }

    // Función para reemplazar vocales
    function reemplazarVocales(texto) {
        let textoEncriptado = '';
        const reemplazos = {
            'a': 'ai',
            'e': 'enter',
            'i': 'imes',
            'o': 'ober',
            'u': 'ufat'
        };

        for (let i = 0; i < texto.length; i++) {
            let caracter = texto[i];
            // Verifica si el carácter es una vocal y realiza el reemplazo si es necesario
            if (reemplazos[caracter] !== undefined) {
                textoEncriptado += reemplazos[caracter];
            } else {
                // Mantiene el carácter sin cambios si no es una vocal
                textoEncriptado += caracter;
            }
        }
        return textoEncriptado;
    }

    // Verifica el texto y reemplaza las vocales si es válido
    if (tieneMayusculasOEspeciales(textoIngresado)) {
        const textoEncriptado = reemplazarVocales(textoIngresado);
        etiquetasPersonalizadas("pre",`${textoEncriptado}`);
    }
}

function mostrarResultado() {
    encriptarTexto(); // Procesar el texto y actualizar la página
}

function etiquetasPersonalizadas(elemento, texto) {
    let etiquetaHTML = document.querySelector(elemento);
    etiquetaHTML.innerHTML = texto;
}

function resultadoDesencriptar() {
    const textoDesencriptar = document.getElementById("texto").value;

    function tieneMayusculasOEspeciales(texto) {
        const caracteresEspeciales = /[^a-z0-9\s]/i;
        for (let i = 0; i < texto.length; i++) {
            if (texto[i] === texto[i].toUpperCase() && texto[i] !== texto[i].toLowerCase()) {
                etiquetasPersonalizadas("pre", "El texto contiene letras mayúsculas o caracteres especiales.");
                return false; // Texto no válido
            } else if (caracteresEspeciales.test(texto[i])) {
                etiquetasPersonalizadas("pre", "El texto contiene letras mayúsculas o caracteres especiales.");
                return false; // Texto no válido
            }
        }
        return true; // Texto válido
    }

    function reemplazarSecuencias(texto) {
        let textoDesencriptado = '';
        const reemplazos = {
            'ai': 'a',
            'enter': 'e',
            'imes': 'i',
            'ober': 'o',
            'ufat': 'u'
        };

        // Itera sobre cada secuencia de reemplazo
        for (const [sec, reemplazo] of Object.entries(reemplazos)) {
            texto = texto.split(sec).join(reemplazo);
        }

        return texto;
    }

    if (tieneMayusculasOEspeciales(textoDesencriptar)) {
        const textoDesencriptado = reemplazarSecuencias(textoDesencriptar);
        etiquetasPersonalizadas("pre", `${textoDesencriptado}`);
    }
}

function mostrarDesencriptado() {
    resultadoDesencriptar(); // Procesar el texto y actualizar la página
}



¡Hola! ¡Me encanta que estés trabajando en tu encriptador de texto! Es genial que estés buscando optimizar tu código.

Aquí te doy algunas ideas para mejorar tu código:

Función tieneMayusculasOEspeciales:

Puedes simplificar la función tieneMayusculasOEspeciales utilizando una expresión regular que detecte tanto mayúsculas como caracteres especiales en una sola pasada.
En lugar de iterar sobre cada carácter, puedes usar RegExp.test() para verificar si el texto cumple con la condición.
Función reemplazarVocales:

Puedes utilizar el método replace de JavaScript para reemplazar las vocales de forma más eficiente.
Puedes crear una expresión regular para cada vocal y usar replace para reemplazarlas con sus respectivas secuencias.
Función reemplazarSecuencias:

Puedes utilizar el método replace de JavaScript para reemplazar las secuencias de forma más eficiente.
Puedes crear una expresión regular para cada secuencia y usar replace para reemplazarlas con sus respectivas vocales.
Duplicación de código:

La función tieneMayusculasOEspeciales se repite en ambas funciones encriptarTexto y resultadoDesencriptar. Puedes refactorizar esta función para que sea reutilizable.
Manejo de errores:

Puedes agregar un manejo de errores para casos en los que el usuario ingrese un texto inválido.
Por ejemplo, puedes mostrar un mensaje de error al usuario si el texto contiene mayúsculas o caracteres especiales.
Comentarios:

Puedes agregar comentarios a tu código para explicar el propósito de cada función y sección.
Esto hará que tu código sea más fácil de entender y mantener.
Recuerda:

La optimización del código es un proceso iterativo.
Puedes empezar por implementar algunas de estas sugerencias y luego analizar el rendimiento de tu código.
Si necesitas más ayuda, no dudes en preguntarme. ¡Estoy aquí para ayudarte!
*/