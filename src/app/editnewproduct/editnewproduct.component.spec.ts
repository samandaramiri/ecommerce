import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnewproductComponent } from './editnewproduct.component';

describe('EditnewproductComponent', () => {
  let component: EditnewproductComponent;
  let fixture: ComponentFixture<EditnewproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditnewproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditnewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
