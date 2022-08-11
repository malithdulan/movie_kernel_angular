import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulerComponent } from './populer.component';

describe('PopulerComponent', () => {
  let component: PopulerComponent;
  let fixture: ComponentFixture<PopulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
