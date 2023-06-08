// Clase que interectuará con los botones y se encargará de mostrar los números en el Display
class Display{
    constructor(displayValorAnterior,displayValorActual) { // Constructor parecido al init de python
        // El constructor tiene como finalidad la incialización de las variables de la clase y posiblemente ejecutar algunos de los métodos de la clase.
        // Al instanciar leerá los datos que se le proporciona
        this.displayValorActual = displayValorActual; 
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.valorActual = '';
        this.valorAnterior = '';
    }
     
    borrar() {
         
    }

    agregarNumero(numero) { //Puedes poner varios puntos o comas aquí para eso...
        if(numero === '.' && this.valorActual.includes('.')) return // Pregunta si hay más de un punto, si es así no se colocará el siguiente pero...
        this.valorActual = this.valorActual.toString() + numero; // No agregará ningun número por ende tiene que estar el toString, para usar los puntos
        this.imprimirValores();

        // this.valorActual = numero //La calculadora recibirá un número y seteareá en el Valor Actual, pero no concadena.
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }
}