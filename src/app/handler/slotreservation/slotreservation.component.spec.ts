import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotreservationComponent } from './slotreservation.component';

describe('SlotreservationComponent', () => {
  let component: SlotreservationComponent;
  let fixture: ComponentFixture<SlotreservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotreservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
