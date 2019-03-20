import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitwrapperComponent } from './monitwrapper.component';

describe('MonitwrapperComponent', () => {
  let component: MonitwrapperComponent;
  let fixture: ComponentFixture<MonitwrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitwrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
