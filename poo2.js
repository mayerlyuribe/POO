class Vehiculo {
  constructor(marca, modelo, velocidad = 0) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidad = velocidad;
  }

  acelerar() {
    this.velocidad += 10;
    console.log(`${this.marca} ${this.modelo} aceleró a ${this.velocidad} km/h`);
  }

  frenar() {
    this.velocidad = Math.max(this.velocidad - 5, 0);
    console.log(`${this.marca} ${this.modelo} frenó a ${this.velocidad} km/h`);
  }

  mostrarInfo() {
    console.log(`Vehículo: ${this.marca} ${this.modelo}, Velocidad: ${this.velocidad} km/h`);
  }
}
//Clase hija: Moto (Hereda de Vehiculo)
class Moto extends Vehiculo {
  constructor(marca, modelo, velocidad, tieneCasco) {
    super(marca, modelo, velocidad);
    this.tieneCasco = tieneCasco;
  }

  // Polimorfismo: sobreescribimos acelerar
  acelerar() {
    this.velocidad += 15; // Acelera más rápido
    console.log(`${this.marca} ${this.modelo} (Moto) aceleró a ${this.velocidad} km/h`);
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log(`¿Tiene casco? ${this.tieneCasco ? "Sí" : "No"}`);
  }
}
// Clase hija: Camion (Hereda de Vehiculo)
class Camion extends Vehiculo {
  constructor(marca, modelo, velocidad, cargaActual) {
    super(marca, modelo, velocidad);
    this.cargaActual = cargaActual; // en toneladas
  }

  frenar() {
    this.velocidad = Math.max(this.velocidad - 3, 0); // Frena más lento
    console.log(`${this.marca} ${this.modelo} frenó a ${this.velocidad} km/h con carga de ${this.cargaActual} toneladas`);
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log(`Carga actual: ${this.cargaActual} toneladas`);
  }
}


const vehiculoGenerico = new Vehiculo("Chevrolet", "Spark", 40);
const miMoto = new Moto("Yamaha", "FZ", 30, true);
const miCamion = new Camion("Volvo", "FH", 60, 12);

vehiculoGenerico.acelerar();   // Vehículo normal
miMoto.acelerar();             // Acelera diferente (polimorfismo)
miCamion.frenar();             // Frena diferente (polimorfismo)

console.log("---- INFO ----");
vehiculoGenerico.mostrarInfo();
miMoto.mostrarInfo();
miCamion.mostrarInfo();