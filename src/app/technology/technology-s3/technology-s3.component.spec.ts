import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyS3Component } from './technology-s3.component';

describe('TechnologyS3Component', () => {
  let component: TechnologyS3Component;
  let fixture: ComponentFixture<TechnologyS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
