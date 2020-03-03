import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgHeaderComponent } from './avg-header.component';

describe('AvgHeaderComponent', () => {
  let component: AvgHeaderComponent;
  let fixture: ComponentFixture<AvgHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvgHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
