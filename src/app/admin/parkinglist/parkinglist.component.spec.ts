import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkinglistComponent } from './parkinglist.component';

describe('ParkinglistComponent', () => {
  let component: ParkinglistComponent;
  let fixture: ComponentFixture<ParkinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
