import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContectlistComponent } from './contectlist.component';

describe('ContectlistComponent', () => {
  let component: ContectlistComponent;
  let fixture: ComponentFixture<ContectlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContectlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContectlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
