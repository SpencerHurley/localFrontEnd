import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunviewerComponent } from './runviewer.component';

describe('RunviewerComponent', () => {
  let component: RunviewerComponent;
  let fixture: ComponentFixture<RunviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
