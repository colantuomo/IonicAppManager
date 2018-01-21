import { Component, ViewChild } from '@angular/core';
import { SaborModel } from "./SaborModel";

export class ItemModel{

    constructor(public title: string, public items: [SaborModel], public imgsrc: string){
        
    }
}