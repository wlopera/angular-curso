import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonDecreaseComponent } from './button-decrease/button-decrease.component';
import { CounterComponent } from './counter.component';

@NgModule({
  declarations: [CounterComponent, ButtonAddComponent, ButtonDecreaseComponent],
  imports: [CommonModule],
  exports: [CounterComponent],
})
export class CounterModule {}
