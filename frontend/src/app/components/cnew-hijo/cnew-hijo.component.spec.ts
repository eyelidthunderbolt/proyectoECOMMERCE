import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnewHijoComponent } from './cnew-hijo.component';

describe('CnewHijoComponent', () => {
  let component: CnewHijoComponent;
  let fixture: ComponentFixture<CnewHijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CnewHijoComponent]
    });
    fixture = TestBed.createComponent(CnewHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
