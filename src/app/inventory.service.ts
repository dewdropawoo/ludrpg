import { Injectable } from '@angular/core';


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
      obtained: true,
    }],
  ]);

  constructor() { }

  setObtained(name: string, obtained: boolean) {
    if (this.allItems.has(name)) {
      this.allItems.set(name, {...this.allItems.get(name)!, obtained})
    }
  }


}
