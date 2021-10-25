import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.css']
})
export class WorldmapComponent implements OnInit {

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.showInventory = true;
  }

}
