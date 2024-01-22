import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoNuevoComponent } from './carrito-nuevo.component';

describe('CarritoNuevoComponent', () => {
  let component: CarritoNuevoComponent;
  let fixture: ComponentFixture<CarritoNuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarritoNuevoComponent]
    });
    fixture = TestBed.createComponent(CarritoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
