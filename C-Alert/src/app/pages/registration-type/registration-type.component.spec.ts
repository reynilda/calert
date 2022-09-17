import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationTypeComponent } from './registration-type.component';

describe('RegistrationTypeComponent', () => {
  let component: RegistrationTypeComponent;
  let fixture: ComponentFixture<RegistrationTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
