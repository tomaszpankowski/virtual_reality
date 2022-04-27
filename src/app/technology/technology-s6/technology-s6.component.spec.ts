import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyS6Component } from './technology-s6.component';

describe('TechnologyS6Component', () => {
  let component: TechnologyS6Component;
  let fixture: ComponentFixture<TechnologyS6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyS6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyS6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
