import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfineScrollPage } from './infine-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: InfineScrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfineScrollPageRoutingModule {}
