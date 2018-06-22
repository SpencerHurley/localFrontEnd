import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutefinderComponent } from './routefinder.component';

describe('RoutefinderComponent', () => {
  let component: RoutefinderComponent;
  let fixture: ComponentFixture<RoutefinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutefinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutefinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
