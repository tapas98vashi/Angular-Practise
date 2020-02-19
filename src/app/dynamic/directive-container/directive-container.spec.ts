import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveContainerComponent } from './directive-container';

describe('DirectiveContainerComponent', () => {
  let component: DirectiveContainerComponent;
  let fixture: ComponentFixture<DirectiveContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
