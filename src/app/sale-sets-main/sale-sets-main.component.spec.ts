import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleSetsMainComponent } from './sale-sets-main.component';

describe('SaleSetsComponent', () => {
  let component: SaleSetsMainComponent;
  let fixture: ComponentFixture<SaleSetsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleSetsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleSetsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
