import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldmapComponent } from './worldmap/worldmap.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ToastComponent } from './task/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldmapComponent,
    InventoryComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
