import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamviewerComponent } from './teamviewer.component';

describe('TeamviewerComponent', () => {
  let component: TeamviewerComponent;
  let fixture: ComponentFixture<TeamviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
