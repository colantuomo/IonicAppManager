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
  novoPedido: any = [];
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
    this.pedidos = this.pedidosCtrl.todosItens();
    this.totalPedido = this.pedidosCtrl.valorTotaldosItens();
  }

  novoItem() {
    let modal = this.modalCtrl.create(NovoPedidoModalPage);
    modal.onDidDismiss(data => {
      if(data != null){
        this.novoPedido.push(data);
        this.totalPedido
      }

      this.loadItens();
    });
    modal.present();
  }

}
