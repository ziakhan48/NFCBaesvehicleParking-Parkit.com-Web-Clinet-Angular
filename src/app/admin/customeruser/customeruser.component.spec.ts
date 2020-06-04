import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeruserComponent } from './customeruser.component';

describe('CustomeruserComponent', () => {
  let component: CustomeruserComponent;
  let fixture: ComponentFixture<CustomeruserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomeruserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
