import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkprofileComponent } from './parkprofile.component';

describe('ParkprofileComponent', () => {
  let component: ParkprofileComponent;
  let fixture: ComponentFixture<ParkprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
