import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { DirectiveContainerComponent } from './directive-container/directive-container';
import { DirectivePresentationComponent } from './directive-container/directive-presentation/directive-presentation';
import { DynamicComponent } from './dynamic/dynamic.component';


@NgModule({
  declarations: [DirectiveContainerComponent, DirectivePresentationComponent, DynamicComponent],
  imports: [
    CommonModule,
    DynamicRoutingModule
  ],
  entryComponents: [DynamicComponent]
  
})
export class DynamicModule { }
