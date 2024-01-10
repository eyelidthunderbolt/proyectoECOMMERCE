import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteNuevoComponent } from './componente-nuevo.component';

describe('ComponenteNuevoComponent', () => {
  let component: ComponenteNuevoComponent;
  let fixture: ComponentFixture<ComponenteNuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteNuevoComponent]
    });
    fixture = TestBed.createComponent(ComponenteNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
