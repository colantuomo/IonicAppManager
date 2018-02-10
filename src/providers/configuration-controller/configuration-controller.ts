import { Injectable } from '@angular/core';
import { ItemModel } from "../../models/ItemModel";
import { SaborModel } from "../../models/SaborModel";
import { PedidoModel } from '../../models/PedidoModel';

@Injectable()
export class ConfigurationControllerProvider {

  valorUnitario: number = 4.5;
  itens: any = [
    new ItemModel("Pao de Mel",
      [new SaborModel("Chocolate", 5.0),
      new SaborModel("Doce de Leite", 4.2),
      new SaborModel("Nutella", 4.2),],
      "https://www.receiteria.com.br/wp-content/uploads/receitas-de-pao-de-mel-destacada.jpg"),
    new ItemModel("Bolo",
      [new SaborModel("Chesse Cake", 6.3),
      new SaborModel("Prestigio", 5.5)],
      "https://www.bbcgoodfood.com/sites/default/files/styles/category_retina/public/recipe-collections/collection-image/2013/05/rosewater-raspberry-sponge-cake.jpg?itok=OVpUSQm9")
  ];
  constructor() {
    console.log('Hello ConfigurationControllerProvider Provider');
  }

  setValorUnitario(novoValor: number) {
    this.valorUnitario = novoValor;
  }

  getValorUnitario(pedido: PedidoModel) {
    console.log("pedido: "+pedido.itemName+" "+pedido.itemSabor);
    for(let item in this.itens){
      console.log("item: "+this.itens[item].title);
      if(this.itens[item].title.trim() == pedido.itemName.trim()){
        console.log("Deu match!");
        for(let it in this.itens[item].items){
          if(pedido.itemSabor.trim() == this.itens[item].items[it].saborTitulo.trim()){
            console.log("valor do sabor: "+this.itens[item].items[it].preco);
            return this.itens[item].items[it].preco;
          }
        }
      }
    }
  }

  addNovoItem() {

  }

  // addNovoSabor(item:any){
  //   this.sabores.push(item);
  // }

  getItens() {
    return this.itens;
  }

  // removeSabor(sabor:string){
  //   var i = this.sabores.indexOf(sabor);
  //   if (i != -1) {
  //     this.sabores.splice(i, 1);
  //   }
  // }

}
