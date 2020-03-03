import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgPortalContentComponent } from './avg-portal-content.component';

describe('AvgPortalContentComponent', () => {
  let component: AvgPortalContentComponent;
  let fixture: ComponentFixture<AvgPortalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvgPortalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgPortalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
