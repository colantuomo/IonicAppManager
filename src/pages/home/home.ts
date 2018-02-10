import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, Slides } from 'ionic-angular';
import { NovoPedidoModalPage } from "../novo-pedido-modal/novo-pedido-modal";
import { PedidosControllerProvider } from "../../providers/pedidos-controller/pedidos-controller";
import { PedidoModel } from "../../models/PedidoModel";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('pedidosSlide') slider: Slides;
  pedidos: any = [];
  totalPedido: number = 0;
  novoPedido: any = null;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public pedidosCtrl: PedidosControllerProvider) {
  }

  ionViewDidLoad() {
    this.loadItens();
  }

  testSlide(item: any) {
    this.pedidosCtrl.deleteItem(item);
    this.loadItens();
  }

  loadItens() {
    this.totalPedido = 0;
    this.pedidos = this.pedidosCtrl.todosItens();
    for(let it in this.pedidos){
      this.totalPedido += this.pedidos[it].valorTotal * this.pedidos[it].qntd;
    }
    console.log("loadItens: "+this.pedidos);
  }

  novoItem() {
    let modal = this.modalCtrl.create(NovoPedidoModalPage);
    modal.onDidDismiss(data => {
      this.loadItens();
    });
    modal.present();
  }

}
