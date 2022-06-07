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
