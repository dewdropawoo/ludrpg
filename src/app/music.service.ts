import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  play(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { this.startPreload();}

  startPreload() {

  }
}
