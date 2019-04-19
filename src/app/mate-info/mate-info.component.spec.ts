import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateInfoComponent } from './mate-info.component';

describe('MateInfoComponent', () => {
  let component: MateInfoComponent;
  let fixture: ComponentFixture<MateInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
