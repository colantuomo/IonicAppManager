import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { ConfigPage } from "../pages/config/config";
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NovoPedidoModalPage } from "../pages/novo-pedido-modal/novo-pedido-modal";
import { PedidosControllerProvider } from '../providers/pedidos-controller/pedidos-controller';
import { ConfigurationControllerProvider } from '../providers/configuration-controller/configuration-controller';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ConfigPage,
    HomePage,
    TabsPage,
    NovoPedidoModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ConfigPage,
    HomePage,
    TabsPage,
    NovoPedidoModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, PedidosControllerProvider,
    ConfigurationControllerProvider]
})
export class AppModule {}
