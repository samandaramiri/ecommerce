import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaycashlistComponent } from './paycashlist.component';

describe('PaycashlistComponent', () => {
  let component: PaycashlistComponent;
  let fixture: ComponentFixture<PaycashlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaycashlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaycashlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
