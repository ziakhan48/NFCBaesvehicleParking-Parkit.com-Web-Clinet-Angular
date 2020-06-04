import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminprofilepicComponent } from './adminprofilepic.component';

describe('AdminprofilepicComponent', () => {
  let component: AdminprofilepicComponent;
  let fixture: ComponentFixture<AdminprofilepicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminprofilepicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminprofilepicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
