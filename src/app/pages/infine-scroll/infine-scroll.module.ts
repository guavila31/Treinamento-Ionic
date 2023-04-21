import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfineScrollPageRoutingModule } from './infine-scroll-routing.module';

import { InfineScrollPage } from './infine-scroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfineScrollPageRoutingModule
  ],
  declarations: [InfineScrollPage]
})
export class InfineScrollPageModule {}
