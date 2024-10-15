export default class cliente {
  constructor({cedula, producto, cantidad}) {
    this.cedula = cedula;
    this.producto = producto;
    this.cantidad = cantidad;
  }
  set cedula(c) {
    this._cedula = +c;
  }
  get cedula() {
    return this._cedula;
  }
  set producto(p) {
    this._producto = p;
  }
  get producto() {
    return this._producto;
  }
  set cantidad(ct) {
    this._cantidad = +ct;
  }
  get cantidad() {
    return this._cantidad;
  }
  montoInicial() {
    if (this.producto === "A") return 10;
    else if (this.producto === "B") return 5;
    else if (this.producto === "C") return 20;
  }
  montoFinal() {
    return this.montoInicial() * this.cantidad;
  }
}
