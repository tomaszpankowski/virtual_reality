import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyS4Component } from './technology-s4.component';

describe('TechnologyS4Component', () => {
  let component: TechnologyS4Component;
  let fixture: ComponentFixture<TechnologyS4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyS4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
