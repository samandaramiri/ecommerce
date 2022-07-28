import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetlistComponent } from './forgetlist.component';

describe('ForgetlistComponent', () => {
  let component: ForgetlistComponent;
  let fixture: ComponentFixture<ForgetlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
