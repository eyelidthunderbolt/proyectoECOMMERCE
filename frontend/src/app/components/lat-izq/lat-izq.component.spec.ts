import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatIzqComponent } from './lat-izq.component';

describe('LatIzqComponent', () => {
  let component: LatIzqComponent;
  let fixture: ComponentFixture<LatIzqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatIzqComponent]
    });
    fixture = TestBed.createComponent(LatIzqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
