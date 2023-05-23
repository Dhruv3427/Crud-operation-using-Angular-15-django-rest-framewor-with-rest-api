import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule
  ]
})
export class AuthorsModule { }
