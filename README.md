# Contador

Proyceto Curso - generado con [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

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

## Reporte de covertura
** > $ ng test --code-coverage
![Captura](https://user-images.githubusercontent.com/7141537/172493739-125fca53-ed17-4a80-86ec-ffb791ab3d0d.PNG)
![Captura1](https://user-images.githubusercontent.com/7141537/172493742-dc308584-5d16-4b2a-a8ee-90043581885e.PNG)

## Si comento una validación (No existe)
* AngularDesdeCero\contador\src\app\counter\counter.component.spec.ts
```
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
``` 
![Captura](https://user-images.githubusercontent.com/7141537/172495635-5151e1f9-f048-44f0-9649-74a02af9edc9.PNG)
![Captura22](https://user-images.githubusercontent.com/7141537/172495632-1b9c48c1-09e9-4008-b60d-1fc9fa3fa8f3.PNG)
![Captura1](https://user-images.githubusercontent.com/7141537/172495637-df3b5a7f-d54f-4463-a177-bf9e7afb6480.PNG)
![Captura3](https://user-images.githubusercontent.com/7141537/172495631-34bcc86c-e559-4fe8-a483-393c962d2e82.PNG)

## Publicar en netlify (Producción)
![Captura](https://user-images.githubusercontent.com/7141537/172634473-dd36a6e4-3caf-4ace-bde2-2bd4e5d8a34a.PNG)
![Captura1](https://user-images.githubusercontent.com/7141537/172634478-52fe7954-dc8b-4aad-aa1f-3de724899a88.PNG)

* Subir la carpeta: AngularDesdeCero\contador\dist\contador
![Captura5](https://user-images.githubusercontent.com/7141537/172634480-afd29d26-b0ac-4661-a078-c79703c0ca9b.PNG)
![Captura 4PNG](https://user-images.githubusercontent.com/7141537/172634482-80401f1e-0973-4f84-9e44-e8f608a671e3.PNG)

## Estilos
### Directo en el código
![Capturaa](https://user-images.githubusercontent.com/7141537/172640593-5bcea56e-c187-400f-a808-7ef4157d179e.PNG)
![CapturaB](https://user-images.githubusercontent.com/7141537/172640600-9e2b1d23-e7c5-4321-bdcb-6924ad305614.PNG)

### Desde archivo
### Google Font: Oswald
![Captura](https://user-images.githubusercontent.com/7141537/172639946-3954daa9-34bf-4a29-a137-4f548e2de714.PNG)
![Captura](https://user-images.githubusercontent.com/7141537/172640973-3e0ffe35-f0a1-4cd6-a1ce-bb0d48fa0a36.PNG)
![Captura1](https://user-images.githubusercontent.com/7141537/172640971-6bf4a930-f201-4fd7-9a28-d160d4a791d4.PNG)

## Agregar estilos globales e independientes
![Captura](https://user-images.githubusercontent.com/7141537/172659450-ad942d77-8340-4947-b58e-a90d0c420fbc.PNG)
![Captura1](https://user-images.githubusercontent.com/7141537/172659462-b6cbe4d7-d16c-4c93-8fe9-fdd146dbe000.PNG)

## Actualizar la version de Angular
```
$ ng help
ng <command>

Commands:
  ng add <collection>            Adds support for an external library to your project.
  ng analytics                   Configures the gathering of Angular CLI usage metrics. See https://angular.io/cli/usage-analytics-gathering
  ng build [project]             Compiles an Angular application or library into an output directory named dist/ at the given output path.  [aliases: b]
  ng cache                       Configure persistent disk cache and retrieve cache statistics.
  ng completion                  Set up Angular CLI autocompletion for your terminal.
  ng config [json-path] [value]  Retrieves or sets Angular configuration values in the angular.json file for the workspace.
  ng deploy [project]            Invokes the deploy builder for a specified project or for the default project in the workspace.
  ng doc <keyword>               Opens the official Angular documentation (angular.io) in a browser, and searches for a given keyword.  [aliases: d]
  ng e2e [project]               Builds and serves an Angular application, then runs end-to-end tests.  [aliases: e]
  ng extract-i18n [project]      Extracts i18n messages from source code.
  ng generate                    Generates and/or modifies files based on a schematic.  [aliases: g]
  ng lint [project]              Runs linting tools on Angular application code in a given project folder.
  ng run <target>                Runs an Architect target with an optional custom builder configuration defined in your project.
  ng serve [project]             Builds and serves your application, rebuilding on file changes.  [aliases: s]
  ng test [project]              Runs unit tests in a project.  [aliases: t]
  ng update [packages..]         Updates your workspace and its dependencies. See https://update.angular.io/.
  ng version                     Outputs Angular CLI version.  [aliases: v]

Options:
  --help  Shows a help message for this command in the console.  [boolean]

==> ng update [packages..]         Updates your workspace and its dependencies. See https://update.angular.io/.

> ng update ==> Para actualizar todo el package.json
  - Se despliega una lista con los paquetes a actualizar
  - Si tiene git debe estar actualizado el repo 
```
## PWA: Angular permite trabajar con Service worker (PWA)
```
 - Service worker: Archivo de configuración. 
                  Como gravar en cache
                  Como se va a actualizar
                  Verficar hardware
                  Uso de camara
                  etc.

 - Subir a un localhost o encriptacion SSL - https. Certificado de seguridad.
   - Los datos viajan cifrados (encriptados)

 - El navegador debe soportar PWA.

 - Archivo de manifest: Configura íconos, fondos, imágenes, etc.

 Nota: Antes de intalar PWA bajar el server.
        > npm i @angular/pwa
        > ng add @angular/pwa
```
![Captura1](https://user-images.githubusercontent.com/7141537/172672716-bd443667-d3f5-4ce5-9218-725911cbbc81.PNG)
![Captura](https://user-images.githubusercontent.com/7141537/172672720-9a2cbd88-a415-4947-a6c1-54e5ef06c363.PNG)
![Captura](https://user-images.githubusercontent.com/7141537/172673032-ec0f3720-ca54-4894-8b4b-112aaa6adbbf.PNG)
![Captura2](https://user-images.githubusercontent.com/7141537/172673028-ed866d43-fe8c-4e3f-a653-ff5e341e2c6b.PNG)

* Luego de agregar PWA
![Captura](https://user-images.githubusercontent.com/7141537/172673227-1597b30d-5bbd-4526-84c9-d37c3b93dfd4.PNG)


