class Vehiculo {
  marca = "Genérica";   // Propiedad con valor por defecto
  modelo = "Base";
  velocidad = 0;

  constructor(marca, modelo, velocidad) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidad = velocidad;
  }

  acelerar() {
    this.velocidad += 10;
    console.log(`${this.marca} ${this.modelo} aceleró a ${this.velocidad} km/h`);
  }

  frenar() {
    this.velocidad -= 5;
    if (this.velocidad < 0) this.velocidad = 0;
    console.log(`${this.marca} ${this.modelo} frenó a ${this.velocidad} km/h`);
  }

  mostrarInfo() {
    console.log(`Vehículo: ${this.marca} ${this.modelo}, Velocidad: ${this.velocidad} km/h`);
  }
}

// Crear tres objetos
const vehiculo1 = new Vehiculo("Toyota", "Corolla", 20);
const vehiculo2 = new Vehiculo("Ford", "Mustang", 50);
const vehiculo3 = new Vehiculo("Honda", "Civic", 30);

// Usar los métodos
vehiculo1.acelerar();
vehiculo2.frenar();
vehiculo3.mostrarInfo();