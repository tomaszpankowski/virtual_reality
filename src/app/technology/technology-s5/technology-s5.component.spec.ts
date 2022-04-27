import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyS5Component } from './technology-s5.component';

describe('TechnologyS5Component', () => {
  let component: TechnologyS5Component;
  let fixture: ComponentFixture<TechnologyS5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyS5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyS5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
