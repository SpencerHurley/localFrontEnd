import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerviewComponent } from './runnerview.component';

describe('RunnerviewComponent', () => {
  let component: RunnerviewComponent;
  let fixture: ComponentFixture<RunnerviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunnerviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
