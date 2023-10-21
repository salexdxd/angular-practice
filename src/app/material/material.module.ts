import { NgModule } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button'
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';

const MaterialComponents = [
  MatSlideToggleModule,
  MatButtonModule,
  MatSliderModule,
  FormsModule,
  MatButtonToggleModule,
  MatListModule
]


@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }