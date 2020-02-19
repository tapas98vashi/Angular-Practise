import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivePresentationComponent } from './directive-presentation';

describe('DirectivePresentationComponent', () => {
  let component: DirectivePresentationComponent;
  let fixture: ComponentFixture<DirectivePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivePresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
