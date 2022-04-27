import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologyComponent } from './technology/technology.component';
import { TechnologyS1Component } from './technology-s1/technology-s1.component';
import { TechnologyS2Component } from './technology-s2/technology-s2.component';
import { TechnologyS3Component } from './technology-s3/technology-s3.component';
import { TechnologyS4Component } from './technology-s4/technology-s4.component';
import { TechnologyS5Component } from './technology-s5/technology-s5.component';
import { TechnologyS6Component } from './technology-s6/technology-s6.component';


@NgModule({
  declarations: [
    TechnologyComponent,
    TechnologyS1Component,
    TechnologyS2Component,
    TechnologyS3Component,
    TechnologyS4Component,
    TechnologyS5Component,
    TechnologyS6Component
  ],
  imports: [
    CommonModule,
    TechnologyRoutingModule
  ]
})
export class TechnologyModule { }
