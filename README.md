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

