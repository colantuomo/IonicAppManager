import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PedidosControllerProvider } from "../../providers/pedidos-controller/pedidos-controller";
import { ConfigurationControllerProvider } from "../../providers/configuration-controller/configuration-controller";
import { SaborModel } from "../../models/SaborModel";
import { PedidoModel } from "../../models/PedidoModel";

@IonicPage()
@Component({
  selector: 'page-novo-pedido-modal',
  templateUrl: 'novo-pedido-modal.html',
})
export class NovoPedidoModalPage {

  qntd: number;
  sabor: string;
  item: string;
  preco: number;
  itens: any = [];
  sabores: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public pedidosCtrl: PedidosControllerProvider, public configCtrl: ConfigurationControllerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovoPedidoModalPage');
    this.itens = this.configCtrl.getItens();    
    
  }
  closeModal() {
    this.viewCtrl.dismiss(null);
  }
  novoItem() {
    console.log(this.sabor);
    // let pedidoModel = new PedidoModel(this.item, this.sabor, this.qntd);
    // this.viewCtrl.dismiss(pedidoModel);
  }

}
