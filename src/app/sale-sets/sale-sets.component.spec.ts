import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleSetsComponent } from './sale-sets.component';

describe('SaleSetsComponent', () => {
  let component: SaleSetsComponent;
  let fixture: ComponentFixture<SaleSetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
