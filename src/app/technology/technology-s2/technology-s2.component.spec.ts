import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyS2Component } from './technology-s2.component';

describe('TechnologyS2Component', () => {
  let component: TechnologyS2Component;
  let fixture: ComponentFixture<TechnologyS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
