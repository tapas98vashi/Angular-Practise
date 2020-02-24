import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { DirectiveContainerComponent } from './directive-container/directive-container';
import { DirectivePresentationComponent } from './directive-container/directive-presentation/directive-presentation';
import { DynamicComponent } from './dynamic/dynamic.component';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { EmojiPipe } from '../pipe/emoji.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DirectiveContainerComponent, DirectivePresentationComponent, DynamicComponent, EmojiPipe],
  imports: [
    CommonModule,
    DynamicRoutingModule,
    PortalModule,
    OverlayModule,
    FormsModule
  ],
  entryComponents: [DynamicComponent]
  
})
export class DynamicModule { }
