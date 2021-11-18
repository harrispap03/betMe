import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BetsPage } from './bets.page';

import { BetsPageRoutingModule } from './bets-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, BetsPageRoutingModule],
  declarations: [BetsPage],
})
export class BetsPageModule {}
