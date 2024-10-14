import cliente from "./cliente.js";

export default class vCliente {
  constructor(app) {
    this.app = app;
    this.vista = document.getElementById("vistaCliente");
    this.leerCedula = document.getElementById("leerCedula");
    this.leerProducto = document.getElementById("leerProducto");
    this.leerCantidad = document.getElementById("leerCantidad");
    this.botonCliente = document.getElementById("botonCliente");
    this.botonCliente.onclick = () => this.agregarCliente();
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
  agregarCliente() {
    let cli = new cliente({
      cedula: this.leerCedula.value,
      producto: this.leerProducto.value.toUpperCase(),
      cantidad: this.leerCantidad.value,
    });
    this.ocultar();
    this.app.vTienda.mostrar();
    this.app.tienda.procesarCliente(cli);
    this.app.vTienda.reporteCliente(cli);
  }
}
