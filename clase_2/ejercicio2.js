// let nombre = prompt("Ingrese su nombre");

// let apellido = prompt("Ingrese su apellido");

// let edad = parseInt(prompt("Ingrese su edad"));

// if ((nombre != " ") && (apellido != " ") && (edad >= 18)) {
//     alert("Bienvenido a nuestro sitio " + nombre);
// } else {
//     alert("Error en los datos ingresados");
    
// }

let nota1 = parseFloat(prompt("Ingrese nota"));

let nota2 = parseFloat(prompt("Ingrese nota"));

const promedio = (nota1 + nota2) / 2;

if (promedio >= 7) {
    alert("Aprobado");
} else if (promedio >= 4) {
    alert("Recupera");
} else if (promedio < 4) {
    alert("Recursa");
} else {
    alert("Dato ingresados inválidos")
}

