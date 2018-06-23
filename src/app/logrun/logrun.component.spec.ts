import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogrunComponent } from './logrun.component';

describe('LogrunComponent', () => {
  let component: LogrunComponent;
  let fixture: ComponentFixture<LogrunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogrunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
