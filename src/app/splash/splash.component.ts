import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  constructor(private inventoryService: InventoryService, private musicService: MusicService) {}

  ngOnInit(): void {
    this.inventoryService.showInventory = false;

    this.musicService.play('');
    // TODO(music): let's start - kuwago?
  }

}
