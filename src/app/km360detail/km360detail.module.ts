import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Km360detailPageRoutingModule } from './km360detail-routing.module';

import { Km360detailPage } from './km360detail.page';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
import { VgBufferingModule } from 'videogular2/compiled/buffering';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    Km360detailPageRoutingModule
  ],
  declarations: [Km360detailPage]
})
export class Km360detailPageModule {}
