import { Component, OnInit } from '@angular/core';
import { InventoryService, Item } from '../inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  obtainedItems: Item[] = [];

  constructor(private readonly inventoryService: InventoryService) {
   }

  ngOnInit(): void {
    this.obtainedItems = [...this.inventoryService.allItems.values()].filter((item: Item) => item.obtained);
  }

}
