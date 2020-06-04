import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlerprofileComponent } from './handlerprofile.component';

describe('HandlerprofileComponent', () => {
  let component: HandlerprofileComponent;
  let fixture: ComponentFixture<HandlerprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlerprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
