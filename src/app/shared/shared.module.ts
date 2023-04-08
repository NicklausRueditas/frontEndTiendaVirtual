import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {OverlayModule} from '@angular/cdk/overlay';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { WebsiteRoutingModule } from '@modules/website/website-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    WebsiteRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
