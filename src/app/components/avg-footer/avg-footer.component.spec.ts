import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgFooterComponent } from './avg-footer.component';

describe('AvgFooterComponent', () => {
  let component: AvgFooterComponent;
  let fixture: ComponentFixture<AvgFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvgFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
