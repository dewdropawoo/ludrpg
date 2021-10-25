import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  constructor(private readonly inventoryService: InventoryService) {
  }

  ngOnInit(): void {
    this.inventoryService.showInventory = false;
  }

}
