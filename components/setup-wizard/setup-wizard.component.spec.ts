/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SetupWizardComponent } from './setup-wizard.component';

describe('SetupWizardComponent', () => {
  let component: SetupWizardComponent;
  let fixture: ComponentFixture<SetupWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
