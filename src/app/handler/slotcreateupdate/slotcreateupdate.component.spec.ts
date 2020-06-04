import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotcreateupdateComponent } from './slotcreateupdate.component';

describe('SlotcreateupdateComponent', () => {
  let component: SlotcreateupdateComponent;
  let fixture: ComponentFixture<SlotcreateupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotcreateupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotcreateupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
