# Contador

Proyceto Curo - generado con [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Development server

Levantar servidor: `ng serve`. Ruta `http://localhost:4200/`.

### Salida
![Captura](https://user-images.githubusercontent.com/7141537/172456241-115058b3-dfb1-4c3c-b316-41177d21a992.PNG)

## Pruebas Unitarias
* Ejemplo: AngularDesdeCero\contador\src\app\counter\button-add\button-add.component.spec.ts
```
import { ComponentFixture, TestBed } from '@angular/core/testing';

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
```
![Captura1](https://user-images.githubusercontent.com/7141537/172473139-d7389dd0-7d19-4bd3-8c96-55c5d0dea1a1.PNG)

## pruebas de Integración

* AngularDesdeCero\contador\src\app\counter\counter.component.spec.ts
``` 
import { TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
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
```
![Captura1](https://user-images.githubusercontent.com/7141537/172474916-f0aac92e-85a7-4ed5-bccb-8d4ed9a5c1e9.PNG)

* Modificar AngularDesdeCero\contador\src\app\counter\counter.component.spec.ts
```diff
...
describe('CounterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
+      declarations: [CounterComponent, ButtonAddComponent],
    }).compileComponents();
  });
 }
 ...
```
![Captura2](https://user-images.githubusercontent.com/7141537/172474923-b8ecccb1-94de-4ba0-9f9c-44a9f18b0831.PNG)

* Pruebas: AngularDesdeCero\contador\src\app\counter\counter.component.spec.ts

```
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonDecreaseComponent } from './button-decrease/button-decrease.component';

describe('CounterComponent Unit Testing', () => {
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

  it('Evento click DECREASE', () => {
    const compiled: HTMLElement = fixture.nativeElement; // renderisar -> trae el DOM

    const btnDecrease: HTMLElement =
      fixture.debugElement.nativeElement.querySelector('#decrease');

    btnDecrease.click();
    btnDecrease.click();
    fixture.detectChanges();

    const counterValue = compiled.querySelector('h1')!;

    expect(counterValue?.textContent).toEqual('Contador: 23');
  });
});
```
![Captura](https://user-images.githubusercontent.com/7141537/172492101-bcb3c386-3a38-412e-9a6c-5cde4e4d3f17.PNG)

