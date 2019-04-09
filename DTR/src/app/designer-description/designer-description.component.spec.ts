import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerDescriptionComponent } from './designer-description.component';

describe('DesignerDescriptionComponent', () => {
  let component: DesignerDescriptionComponent;
  let fixture: ComponentFixture<DesignerDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignerDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
