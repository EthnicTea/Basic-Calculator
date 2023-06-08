// Creamos nuestras variables para nuestros botones y valores

const displayValorAnterior = document.getElementById('valor-anterior')
const displayValorActual = document.getElementById('valor-actual')
const botonesNumeros = document.querySelectorAll('.numero')
const botonesOperadores = document.querySelectorAll('.operador')

// const calculadora = new Calculadora(); //Llamamos a la función Calculadora

//console.log(calculadora.sumar(2,3))
//console.log(calculadora.restar(20,5))
//console.log(calculadora.dividir(100,6))
//console.log(calculadora.multiplicar(12,12))

const display = new Display(displayValorAnterior,displayValorActual) //Necesita los valores del display para que los actualice

botonesNumeros.forEach(boton => { //Cada vez que se presione un botón... 
    boton.addEventListener('click',() => display.agregarNumero(boton.innerHTML));
});
 