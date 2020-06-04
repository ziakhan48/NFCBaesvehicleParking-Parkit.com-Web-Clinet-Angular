import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleruserComponent } from './handleruser.component';

describe('HandleruserComponent', () => {
  let component: HandleruserComponent;
  let fixture: ComponentFixture<HandleruserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleruserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
