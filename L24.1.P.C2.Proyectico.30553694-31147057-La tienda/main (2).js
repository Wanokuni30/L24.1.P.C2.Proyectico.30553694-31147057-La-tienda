
import vCliente from "./vCliente.js";
import tienda from "./tienda.js";
import vTienda from "./vTienda.js";

class main {
  constructor() {
    this.tienda = new tienda();
    this.vCliente = new vCliente(this);
    this.vTienda = new vTienda(this);
  }
}
export default main;
