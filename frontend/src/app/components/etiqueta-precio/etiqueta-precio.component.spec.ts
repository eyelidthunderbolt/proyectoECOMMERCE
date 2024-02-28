import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiquetaPrecioComponent } from './etiqueta-precio.component';

describe('EtiquetaPrecioComponent', () => {
  let component: EtiquetaPrecioComponent;
  let fixture: ComponentFixture<EtiquetaPrecioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtiquetaPrecioComponent]
    });
    fixture = TestBed.createComponent(EtiquetaPrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
