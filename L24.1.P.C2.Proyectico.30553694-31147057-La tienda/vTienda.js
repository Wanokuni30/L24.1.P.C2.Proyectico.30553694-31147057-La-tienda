export default class vTienda {
  constructor(app) {
    this.app = app;
    this.vista = document.getElementById("vistaTienda");
    this.botonTienda = document.getElementById("botonTienda");
    this.botonTienda.onclick = () => {
      this.ocultar();
      this.app.vCliente.mostrar();
    };
    this.leerMayor = document.getElementById("leerMayor");
    this.leerMonto = document.getElementById("leerMonto");
    this.tabla = document.getElementById("tabla");
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
  reporteCliente(cli) {
    this.tabla.innerHTML += `
    <tr>
        <td>${cli.cedula}</td>
        <td>${cli.producto}</td>
        <td>${cli.cantidad}</td>
        <td>${cli.montoFinal()}</td>
    </tr>`;
    this.leerMayor.innerHTML = this.app.tienda.mayorVendido();
    this.leerMonto.innerHTML = this.app.tienda.acumulador;
  }
}
