import { Injectable } from '@angular/core';
import { ConfigurationControllerProvider } from "../configuration-controller/configuration-controller";
import { PedidoModel } from "../../models/PedidoModel";

@Injectable()
export class PedidosControllerProvider {
  pedidos: any = [];
  constructor(public configCtrl: ConfigurationControllerProvider) {
    console.log('Hello itemControllerProvider Provider');
  }
  novoItem(item: PedidoModel) {
    item.valorTotal = this.configCtrl.getValorUnitario(item);
    this.pedidos.push(item);
  }
  deleteItem(item: any) {
    var i = this.pedidos.indexOf(item);
    if (i != -1) {
      this.pedidos.splice(i, 1);
    }
  }
  todosItens() {
    return this.pedidos;
  }
  valorTotaldosItens(){
    //return this.total;
  }

  // Nova lista de items = Pedidos;

  novoPedido(pedido:PedidoModel){
    this.pedidos.push(pedido);
  }

}
