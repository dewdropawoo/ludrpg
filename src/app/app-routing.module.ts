import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishComponent } from './finish/finish.component';
import { GeowizardComponent } from './task/geowizard/geowizard.component';
import { ToastComponent } from './task/toast/toast.component';
import { WorldmapComponent } from './worldmap/worldmap.component';

const routes: Routes = [
  {path: 'worldmap', component: WorldmapComponent},
  {path: 'task/toast', component: ToastComponent},
  {path: 'task/geowizard', component: GeowizardComponent},
  {path: 'finish', component: FinishComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
