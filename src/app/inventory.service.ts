import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


export interface Item {
  name: string;
  description: string;
  imgUrl: string;
  obtained: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  allItems: Map<string, Item> = new Map([
    ['amogus', {
      name: 'amogus',
      description: 'amogus',
      imgUrl: 'https://via.placeholder.com/64x64',
      obtained: false,
    }],
    ['map', {
      name: 'map',
      description: 'map',
      imgUrl: 'https://via.placeholder.com/64x64',
      obtained: false,
    }],
  ]);

  allItemsChange: Subject<Map<string, Item>> = new Subject<Map<string, Item>>();


  constructor() { 
    this.allItemsChange.subscribe((value) => {
      this.allItems = value;
    });
  }

  setObtained(name: string, obtained: boolean) {
    if (this.allItems.has(name)) {
      // angular does change detection by object reference
      // need to create a new object to trigger render updates
     this.allItemsChange.next(this.allItems.set(name, {...this.allItems.get(name)!, obtained}));
    }
  }


}
