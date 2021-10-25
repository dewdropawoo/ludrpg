import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.inventoryService.showInventory = false;
  }

}
