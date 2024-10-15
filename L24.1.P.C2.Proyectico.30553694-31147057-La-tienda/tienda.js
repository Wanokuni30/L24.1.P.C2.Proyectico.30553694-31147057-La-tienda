export default class tienda {
  constructor() {
    this.acumuladorCantidadA = 0;
    this.acumuladorCantidadB = 0;
    this.acumuladorCantidadC = 0;
    this.acumulador = 0;
  }
  procesarCliente(c) {
    this.acumulador += c.montoFinal();
    if (c.producto === "A") this.acumuladorCantidadA+= c.cantidad;
    else if (c.producto === "B") this.acumuladorCantidadB+= c.cantidad;
    else if (c.producto === "C") this.acumuladorCantidadC+= c.cantidad;
  }
  mayorVendido() {
    if (this.acumuladorCantidadA > this.acumuladorCantidadB && this.acumuladorCantidadA > this.acumuladorCantidadC)
      return "El más vendido es el producto de tipo A";
    else if (this.acumuladorCantidadB > this.acumuladorCantidadA && this.acumuladorCantidadB > this.acumuladorCantidadC)
      return "El más vendido es el producto de tipo B";
    else if (this.acumuladorCantidadC > this.acumuladorCantidadB && this.acumuladorCantidadC > this.acumuladorCantidadA)
      return "El más vendido es el producto de tipo C";
    else return "Ninguno";
  }
}
