import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatDerComponent } from './lat-der.component';

describe('LatDerComponent', () => {
  let component: LatDerComponent;
  let fixture: ComponentFixture<LatDerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatDerComponent]
    });
    fixture = TestBed.createComponent(LatDerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
