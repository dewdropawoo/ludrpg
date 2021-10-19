import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishComponent } from './finish/finish.component';
import { HasanComponent } from './task/hasan/hasan.component';
import { HikaruComponent } from './task/hikaru/hikaru.component';
import { SplashComponent } from './splash/splash.component';
import { GeowizardComponent } from './task/geowizard/geowizard.component';
import { ToastComponent } from './task/toast/toast.component';
import { WorldmapComponent } from './worldmap/worldmap.component';
import { ShakedrizzleComponent } from './task/shakedrizzle/shakedrizzle.component';
import { XqcComponent } from './task/xqc/xqc.component';

const routes: Routes = [
  {path: '', component: SplashComponent},
  {path: 'worldmap', component: WorldmapComponent},
  {path: 'task/toast', component: ToastComponent},
  {path: 'task/geowizard', component: GeowizardComponent},
  {path: 'task/hasan', component: HasanComponent},
  {path: 'task/hikaru', component: HikaruComponent},
  {path: 'task/shakedrizzle', component: ShakedrizzleComponent},
  {path: 'task/xqc', component: XqcComponent},
  {path: 'finish', component: FinishComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
