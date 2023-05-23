import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublishersRoutingModule } from './publishers-routing.module';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    ViewComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    PublishersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule
  ]
})
export class PublishersModule { }
