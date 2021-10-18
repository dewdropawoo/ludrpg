import { Component, OnInit } from '@angular/core';
import { InventoryService, Item } from '../inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  constructor(private readonly inventoryService: InventoryService) {
   }

  get obtainedItems(): Item[] {
    return [...this.inventoryService.allItems.values()].filter((item: Item) => item.obtained);
  }

  get inventoryComplete(): boolean {
    return this.obtainedItems.length === this.inventoryService.allItems.size;
  }

  ngOnInit(): void {
  }

}
