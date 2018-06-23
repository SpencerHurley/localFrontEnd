import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentviewerComponent } from './segmentviewer.component';

describe('SegmentviewerComponent', () => {
  let component: SegmentviewerComponent;
  let fixture: ComponentFixture<SegmentviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
