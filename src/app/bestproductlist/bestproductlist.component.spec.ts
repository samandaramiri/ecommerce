import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestproductlistComponent } from './bestproductlist.component';

describe('BestproductlistComponent', () => {
  let component: BestproductlistComponent;
  let fixture: ComponentFixture<BestproductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestproductlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestproductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
