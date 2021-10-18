import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/inventory.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {



  constructor(private readonly inventoryService: InventoryService) { }

  ngOnInit(): void {
  }

  onCorrect() {
    this.inventoryService.setObtained('amogus', true);
  }

  onIncorrect() {
    this.inventoryService.setObtained('amogus', false);

  }

}
