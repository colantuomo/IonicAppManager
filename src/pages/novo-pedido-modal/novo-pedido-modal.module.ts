import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovoPedidoModalPage } from './novo-pedido-modal';

@NgModule({
  declarations: [
    NovoPedidoModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NovoPedidoModalPage),
  ],
})
export class NovoPedidoModalPageModule {}
