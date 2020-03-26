import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotbookCreateModalPage } from './notbook-create-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NotbookCreateModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotbookCreateModalPageRoutingModule {}
