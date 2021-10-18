import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from 'src/app/inventory.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  // TODO: define question data here, and choose randomly to render

  constructor(private readonly inventoryService: InventoryService, private readonly router: Router) { }

  ngOnInit(): void {
  }

  onCorrect() {
    this.inventoryService.setObtained('amogus', true);
    this.router.navigate(['/worldmap']);
  }

  onIncorrect() {
    this.inventoryService.setObtained('amogus', false);
    this.router.navigate(['/worldmap']);
  }

}
