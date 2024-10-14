export default class tienda {
  constructor() {
    this.contadorA = 0;
    this.contadorB = 0;
    this.contadorC = 0;
    this.acumulador = 0;
  }
  procesarCliente(c) {
    this.acumulador += c.montoFinal();
    if (c.producto === "A") this.contadorA++;
    else if (c.producto === "B") this.contadorB++;
    else if (c.producto === "C") this.contadorC++;
  }
  mayorVendido() {
    if (this.contadorA > this.contadorB && this.contadorA > this.contadorC)
      return "El más vendido es el producto de tipo A";
    else if (this.contadorB > this.contadorA && this.contadorB > this.contadorC)
      return "El más vendido es el producto de tipo B";
    else if (this.contadorC > this.contadorB && this.contadorC > this.contadorA)
      return "El más vendido es el producto de tipo C";
    else return "Ninguno";
  }
}
