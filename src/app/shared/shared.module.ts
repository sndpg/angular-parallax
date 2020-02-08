import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ParallaxScrollDirective} from './parallax-scroll.directive';

@NgModule({
  declarations: [ParallaxScrollDirective],
  exports: [
    ParallaxScrollDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
