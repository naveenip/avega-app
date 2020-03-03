import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgHomeComponent } from './avg-home.component';

describe('AvgHomeComponent', () => {
  let component: AvgHomeComponent;
  let fixture: ComponentFixture<AvgHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvgHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
