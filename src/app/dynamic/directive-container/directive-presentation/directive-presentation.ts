import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory} from '@angular/core';
import { ComponentPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import { DynamicComponent } from '../../dynamic/dynamic.component';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-directive-presentation',
  templateUrl: './directive-presentation.html',
  styleUrls: ['./directive-presentation.scss']
})
export class DirectivePresentationComponent implements OnInit {

  @ViewChild('messagecontainer', { read: ViewContainerRef, static : true }) entry: ViewContainerRef;
  @ViewChild('templatePortalContent', {static : true}) templatePortalContent: TemplateRef<any>;
  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<DynamicComponent>;
  templatePortal: TemplatePortal<any>;

  constructor(private resolver: ComponentFactoryResolver, public overlay: Overlay, public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

  Add()
  {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(DynamicComponent);
    const componentRef = this.entry.createComponent(factory);
  }

  destroyComponent() {
    this.entry.clear();
  }

  Addportal(): void {
    this.componentPortal = new ComponentPortal(DynamicComponent);
    this.selectedPortal = this.componentPortal;
  }
  destroyComponentportal() {
    this.selectedPortal.detach();
  }

  Addoverlay(){
    let config = new OverlayConfig();
    config.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
    config.hasBackdrop = true;
    let overlayRef = this.overlay.create(config);
    overlayRef.backdropClick().subscribe(() => {
    overlayRef.dispose();
    })
    overlayRef.attach(new ComponentPortal(DynamicComponent, this.viewContainerRef));
  }
}
