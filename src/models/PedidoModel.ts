import { Component, ViewChild } from '@angular/core';
import { SaborModel } from "./SaborModel";

export class PedidoModel{

    constructor(public itemName: string, public itemSabor: string, public qntd: number, public valorTotal: number){
        
    }
}