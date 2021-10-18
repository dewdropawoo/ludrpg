import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToastComponent } from './task/toast/toast.component';

const routes: Routes = [
  {path: 'task/toast', component: ToastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
