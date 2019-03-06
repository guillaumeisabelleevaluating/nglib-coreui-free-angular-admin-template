import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitpatientsComponent } from './monitpatients.component';

describe('MonitpatientsComponent', () => {
  let component: MonitpatientsComponent;
  let fixture: ComponentFixture<MonitpatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitpatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
