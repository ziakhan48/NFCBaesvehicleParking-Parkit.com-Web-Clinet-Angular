import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotreservationhistoryComponent } from './slotreservationhistory.component';

describe('SlotreservationhistoryComponent', () => {
  let component: SlotreservationhistoryComponent;
  let fixture: ComponentFixture<SlotreservationhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotreservationhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotreservationhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
