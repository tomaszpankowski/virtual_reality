import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyS1Component } from './technology-s1.component';

describe('TechnologyS1Component', () => {
  let component: TechnologyS1Component;
  let fixture: ComponentFixture<TechnologyS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
