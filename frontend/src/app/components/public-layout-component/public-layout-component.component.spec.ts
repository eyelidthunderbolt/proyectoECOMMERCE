import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLayoutComponentComponent } from './public-layout-component.component';

describe('PublicLayoutComponentComponent', () => {
  let component: PublicLayoutComponentComponent;
  let fixture: ComponentFixture<PublicLayoutComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicLayoutComponentComponent]
    });
    fixture = TestBed.createComponent(PublicLayoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
