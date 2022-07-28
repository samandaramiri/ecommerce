import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbestproductComponent } from './editbestproduct.component';

describe('EditbestproductComponent', () => {
  let component: EditbestproductComponent;
  let fixture: ComponentFixture<EditbestproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbestproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbestproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
