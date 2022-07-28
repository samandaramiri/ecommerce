import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaystripelistComponent } from './paystripelist.component';

describe('PaystripelistComponent', () => {
  let component: PaystripelistComponent;
  let fixture: ComponentFixture<PaystripelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaystripelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaystripelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
