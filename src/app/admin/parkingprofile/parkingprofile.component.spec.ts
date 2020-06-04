import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingprofileComponent } from './parkingprofile.component';

describe('ParkingprofileComponent', () => {
  let component: ParkingprofileComponent;
  let fixture: ComponentFixture<ParkingprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
