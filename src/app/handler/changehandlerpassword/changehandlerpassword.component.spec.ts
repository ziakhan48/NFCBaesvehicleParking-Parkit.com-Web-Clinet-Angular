import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangehandlerpasswordComponent } from './changehandlerpassword.component';

describe('ChangehandlerpasswordComponent', () => {
  let component: ChangehandlerpasswordComponent;
  let fixture: ComponentFixture<ChangehandlerpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangehandlerpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangehandlerpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
