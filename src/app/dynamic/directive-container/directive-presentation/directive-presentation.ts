import { Component, OnInit, Input } from '@angular/core';
import { ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory} from '@angular/core';
import { ComponentPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import { DynamicComponent } from '../../dynamic/dynamic.component';

@Component({
  selector: 'app-directive-presentation',
  templateUrl: './directive-presentation.html',
  styleUrls: ['./directive-presentation.scss']
})
export class DirectivePresentationComponent implements OnInit {

  @ViewChild('messagecontainer', { read: ViewContainerRef,static :true }) entry: ViewContainerRef;

  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<DynamicComponent>;

  constructor(private resolver: ComponentFactoryResolver) { }

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
  
  AddCdk()
  {
    this.componentPortal = new ComponentPortal(DynamicComponent);
    this.selectedPortal = this.componentPortal;
  }

  Destroycdk()
  {
    this.selectedPortal.detach();
  }


}
