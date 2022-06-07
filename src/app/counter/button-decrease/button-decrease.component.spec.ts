import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDecreaseComponent } from './button-decrease.component';

describe('ButtonDecreaseComponent', () => {
  let component: ButtonDecreaseComponent;
  let fixture: ComponentFixture<ButtonDecreaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDecreaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDecreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
