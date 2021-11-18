import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetsPage } from './bets.page';

const routes: Routes = [
  {
    path: '',
    component: BetsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetsPageRoutingModule {}
