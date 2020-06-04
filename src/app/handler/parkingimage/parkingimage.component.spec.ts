import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingimageComponent } from './parkingimage.component';

describe('ParkingimageComponent', () => {
  let component: ParkingimageComponent;
  let fixture: ComponentFixture<ParkingimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
