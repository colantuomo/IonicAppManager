import { Injectable } from '@angular/core';
import { ConfigurationControllerProvider } from "../configuration-controller/configuration-controller";
import { PedidoModel } from "../../models/PedidoModel";

@Injectable()
export class PedidosControllerProvider {
  item: any = [];
  total: number = 0;
  pedido: any = [PedidoModel];
  constructor(public configCtrl: ConfigurationControllerProvider) {
    console.log('Hello itemControllerProvider Provider');
  }
  novoItem(item: any) {
    let valor = this.configCtrl.getValorUnitario();
    item["valor"] = item.qntd * valor;
    this.total += item.valor;
    console.log(item);
    this.item.push(item);
    console.log("size: " + this.item.length);
  }
  deleteItem(item: any) {
    var i = this.item.indexOf(item);
    this.total -= item.valor;
    if (i != -1) {
      this.item.splice(i, 1);
    }
  }
  todosItens() {
    console.log("TOTAL ARRAY: " + this.item.length);
    return this.item;
  }
  valorTotaldosItens(){
    console.log("VALOR: "+this.total);
    return this.total;
  }

  // Nova lista de items = Pedidos;

  novoPedido(pedido:any){
    this.pedido.push(pedido);
  }

}
