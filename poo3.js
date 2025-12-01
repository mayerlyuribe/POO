//Clase base Vehiculo con encapsulamiento
class Vehiculo {
  #marca;
  #modelo;
  #velocidad;

  constructor(marca, modelo, velocidad = 0) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#velocidad = velocidad;
  }

  // Métodos GETTERS
  get marca() { return this.#marca; }
  get modelo() { return this.#modelo; }
  get velocidad() { return this.#velocidad; }

  // Métodos SETTERS (solo si deseas permitir modificaciones externas controladas)
  set velocidad(nuevaVelocidad) {
    if (nuevaVelocidad >= 0) {
      this.#velocidad = nuevaVelocidad;
    } else {
      console.log("La velocidad no puede ser negativa.");
    }
  }

  acelerar() {
    this.#velocidad += 10;
    console.log(`${this.#marca} ${this.#modelo} aceleró a ${this.#velocidad} km/h`);
  }

  frenar() {
    this.#velocidad = Math.max(this.#velocidad - 5, 0);
    console.log(`${this.#marca} ${this.#modelo} frenó a ${this.#velocidad} km/h`);
  }

  mostrarInfo() {
    console.log(`Vehículo: ${this.#marca} ${this.#modelo}, Velocidad: ${this.#velocidad} km/h`);
  }
}

//Subclase Moto con encapsulamiento extendido
class Moto extends Vehiculo {
  #tieneCasco;

  constructor(marca, modelo, velocidad, tieneCasco) {
    super(marca, modelo, velocidad);
    this.#tieneCasco = tieneCasco;
  }

  get casco() { return this.#tieneCasco; }

  acelerar() {
    this.velocidad += 15;  // Usamos el setter de la clase padre
    console.log(`${this.marca} ${this.modelo} (Moto) aceleró a ${this.velocidad} km/h`);
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log(`¿Tiene casco? ${this.#tieneCasco ? "Sí" : "No"}`);
  }
}
//Subclase Camion con encapsulamiento
class Camion extends Vehiculo {
  #cargaActual;

  constructor(marca, modelo, velocidad, cargaActual) {
    super(marca, modelo, velocidad);
    this.#cargaActual = cargaActual;
  }

  get carga() { return this.#cargaActual; }

  frenar() {
    this.velocidad -= 3;
    console.log(`${this.marca} ${this.modelo} frenó a ${this.velocidad} km/h con carga de ${this.#cargaActual} toneladas`);
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log(`Carga actual: ${this.#cargaActual} toneladas`);
  }
}

const miVehiculo = new Vehiculo("Chevrolet", "Onix", 20);
const miMoto = new Moto("Suzuki", "Gixxer", 35, true);
const miCamion = new Camion("Mercedes", "Actros", 60, 18);

miVehiculo.acelerar();
miMoto.acelerar();
miCamion.frenar();

console.log("---- INFORMACIÓN ----");
miVehiculo.mostrarInfo();
miMoto.mostrarInfo();
miCamion.mostrarInfo();