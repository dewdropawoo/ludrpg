import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldmapComponent } from './worldmap/worldmap.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ToastComponent } from './task/toast/toast.component';
import { FinishComponent } from './finish/finish.component';
import { GeowizardComponent } from './task/geowizard/geowizard.component';
import { SplashComponent } from './splash/splash.component';
import { HasanComponent } from './task/hasan/hasan.component';
import { HikaruComponent } from './task/hikaru/hikaru.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldmapComponent,
    InventoryComponent,
    ToastComponent,
    FinishComponent,
    GeowizardComponent,
    SplashComponent,
    HasanComponent,
    HikaruComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
