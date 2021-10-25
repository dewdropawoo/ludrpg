import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/inventory.service';
import { Task } from '../task';
declare let Chessboard: any;

@Component({
  selector: 'app-hikaru',
  templateUrl: './hikaru.component.html',
  styleUrls: ['./hikaru.component.css']
})
export class HikaruComponent extends Task implements OnInit {

  constructor(protected readonly inventoryService: InventoryService) {
    super(inventoryService);
   }

  ngOnInit(): void {
    var ruyLopez = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'
    var board = Chessboard('myBoard', {
      pieceTheme: 'assets/chesspieces/{piece}.png',
      position: ruyLopez,
    });

  }

}
