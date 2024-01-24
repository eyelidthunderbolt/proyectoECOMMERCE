import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnewPadreComponent } from './cnew-padre.component';

describe('CnewPadreComponent', () => {
  let component: CnewPadreComponent;
  let fixture: ComponentFixture<CnewPadreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CnewPadreComponent]
    });
    fixture = TestBed.createComponent(CnewPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
