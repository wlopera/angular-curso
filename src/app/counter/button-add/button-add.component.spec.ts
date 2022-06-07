import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from '../counter.component';

import { ButtonAddComponent } from './button-add.component';

describe('ButtonAddComponent', () => {
  let component: ButtonAddComponent;
  let fixture: ComponentFixture<ButtonAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se debe crear el componente Counter Add', () => {
    expect(component).toBeTruthy();
  });

  it('Prueba unitaria. Debe inicializar el contador en 0 no en 25', () => {
    console.log('Contador inicial - counterAdd:', component.counter);
    expect(component.counter).toBe(0);
  });

  it('Validar cambio del contador al invocar el metodo add -> resultado... = 1', () => {
    let newCounter = 0;

    component.onAdd.subscribe((counter) => {
      newCounter = counter;
    });

    component.add();

    expect(newCounter).toBe(1);
  });
});

describe('Integration Testing', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent, ButtonAddComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Evento click', () => {
    const compiled: HTMLElement = fixture.nativeElement; // renderisa trae el DOM
    console.log('Para ver evento click:', compiled);

    const btnAdd: HTMLElement =
      fixture.debugElement.nativeElement.querySelector('#add');

    btnAdd.click();
    fixture.detectChanges();

    const counterValue = compiled.querySelector('h1')!;

    expect(counterValue?.textContent).toEqual('Contador: 26');
  });
});
