import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotbookCreateModalPageRoutingModule } from './notbook-create-modal-routing.module';

import { NotbookCreateModalPage } from './notbook-create-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotbookCreateModalPageRoutingModule
  ],
  declarations: [NotbookCreateModalPage]
})
export class NotbookCreateModalPageModule {}
