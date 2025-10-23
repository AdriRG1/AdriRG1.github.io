// La función setup() se ejecuta UNA sola vez al iniciar el programa.
// Aquí preparamos el lienzo y dibujamos una imagen estática.
function setup() {
  createCanvas(400, 400); // Crea un lienzo de 400x400 píxeles
  background(255);        // Fondo blanco

  // Lado superior: rojo opaco, grosor 3
  stroke(255, 255, 255);      // Color rojo
  strokeWeight(3);        // Grosor de línea 3
  line(100, 100, 300, 100);

  // Lado derecho: verde semitransparente, grosor 6
  stroke(0, 255, 0, 120); // Verde con transparencia
  strokeWeight(60);        // Grosor de línea 6
  line(300, 100, 300, 300);

  // Lado inferior: azul opaco, grosor 2
  stroke(0, 0, 255);      // Azul
  strokeWeight(20);        // Grosor de línea 2
  line(300, 300, 100, 300);

  // Lado izquierdo: gris, grosor 4
  stroke(random(255));            // Gris
  strokeWeight(40);        // Grosor de línea 4
  line(100, 300, 100, 100);
}