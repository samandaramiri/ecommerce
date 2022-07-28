import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbestproductComponent } from './addbestproduct.component';

describe('AddbestproductComponent', () => {
  let component: AddbestproductComponent;
  let fixture: ComponentFixture<AddbestproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbestproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbestproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
