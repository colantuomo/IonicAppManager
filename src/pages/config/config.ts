import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfigurationControllerProvider } from "../../providers/configuration-controller/configuration-controller";

@Component({
  selector: 'page-config',
  templateUrl: 'Config.html'
})
export class ConfigPage {

  sabores: any = [];
  valorUnitario: number = 0;
  constructor(public navCtrl: NavController, public config: ConfigurationControllerProvider) {
    this.sabores = config.getItens();
  }

}
