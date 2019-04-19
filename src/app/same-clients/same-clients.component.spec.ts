import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SameClientsComponent } from './same-clients.component';

describe('SameClientsComponent', () => {
  let component: SameClientsComponent;
  let fixture: ComponentFixture<SameClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SameClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SameClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
