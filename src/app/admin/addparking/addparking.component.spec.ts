import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddparkingComponent } from './addparking.component';

describe('AddparkingComponent', () => {
  let component: AddparkingComponent;
  let fixture: ComponentFixture<AddparkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddparkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddparkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
