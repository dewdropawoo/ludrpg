import { Component, OnInit } from '@angular/core';
import * as C from '@chrisoakman/chessboardjs';

@Component({
  selector: 'app-hikaru',
  templateUrl: './hikaru.component.html',
  styleUrls: ['./hikaru.component.css']
})
export class HikaruComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var ruyLopez = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'
    var board = Chessboard.ChessBoard('myBoard', ruyLopez)

  }

}
