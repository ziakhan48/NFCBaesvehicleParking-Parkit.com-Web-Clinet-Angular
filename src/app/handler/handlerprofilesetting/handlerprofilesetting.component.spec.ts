import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlerprofilesettingComponent } from './handlerprofilesetting.component';

describe('HandlerprofilesettingComponent', () => {
  let component: HandlerprofilesettingComponent;
  let fixture: ComponentFixture<HandlerprofilesettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlerprofilesettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlerprofilesettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
