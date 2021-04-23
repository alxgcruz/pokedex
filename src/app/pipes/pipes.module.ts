import { NgModule } from '@angular/core';
import { KiloPipe } from './kilo.pipe';
import { MetroPipe } from './metro.pipe';


@NgModule({
  imports: [],
  declarations: [
    KiloPipe,
    MetroPipe
  ],
  exports: [
    KiloPipe,
    MetroPipe
  ],
})
export class PipesModule { }
