import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotreservationlistComponent } from './slotreservationlist.component';

describe('SlotreservationlistComponent', () => {
  let component: SlotreservationlistComponent;
  let fixture: ComponentFixture<SlotreservationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotreservationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotreservationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
