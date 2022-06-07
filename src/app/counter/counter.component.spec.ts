import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonDecreaseComponent } from './button-decrease/button-decrease.component';

describe('CounterComponent Unit Testing', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();
  });

  it('Se debe crear el componente Counter', () => {
    const fixture = TestBed.createComponent(CounterComponent);

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('Debe crear el texto Contador: 25', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    fixture.detectChanges(); // Validar si algo cambio (renderizado)

    const compiled: HTMLElement = fixture.nativeElement;

    console.log('Valor del Dom que contiene el H1', compiled);
    expect(compiled.querySelector('h1')?.textContent).toEqual('Contador: 25');
  });

  it('Valor inicial del contador es 25', () => {
    const counter = new CounterComponent();
    expect(counter.counter).toBe(25);
  });
});

describe('Integration Testing', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CounterComponent,
        ButtonAddComponent,
        ButtonDecreaseComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Evento click ADD', () => {
    const compiled: HTMLElement = fixture.nativeElement; // render -> trae el DOM
    console.log('Para ver evento click:', compiled);

    const btnAdd: HTMLElement =
      fixture.debugElement.nativeElement.querySelector('#add');

    btnAdd.click();
    fixture.detectChanges();

    const counterValue = compiled.querySelector('h1')!;

    expect(counterValue?.textContent).toEqual('Contador: 26');
  });

  // it('Evento click DECREASE', () => {
  //   const compiled: HTMLElement = fixture.nativeElement; // renderisar -> trae el DOM

  //   const btnDecrease: HTMLElement =
  //     fixture.debugElement.nativeElement.querySelector('#decrease');

  //   btnDecrease.click();
  //   btnDecrease.click();
  //   fixture.detectChanges();

  //   const counterValue = compiled.querySelector('h1')!;

  //   expect(counterValue?.textContent).toEqual('Contador: 23');
  // });
});
