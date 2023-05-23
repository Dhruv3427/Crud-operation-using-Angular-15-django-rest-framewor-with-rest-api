import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { Authors } from 'src/app/config/authors/authors';
import { AuthorsService } from 'src/app/config/authors/authors.service';
import { BooksService } from 'src/app/config/books/books.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  closeBtnName?: string;
  public form: FormGroup;
  public authorss: Authors []= [];

  constructor(
    private frmbuilder: FormBuilder,
    private booksSRV: BooksService,
    private authorsSRV: AuthorsService,
    public bsModalRef: BsModalRef,
    private route :Router

  ) {

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      page: new FormControl('', [Validators.required]),
      authors: new FormControl('', [Validators.required]),
    });

  }
  get name() {
    return this.form.get('name');
  }
  get content() {
    return this.form.get('content');
  }
  get page() {
    return this.form.get('page');
  }
  get authors() {
    return this.form.get('authors');
  }
  
  save() {
    if (this.form.valid){
      this.booksSRV.create(this.form.value).subscribe(suc => { });
      this.bsModalRef?.hide();
      this.route.navigate(['/pages/books/view'])
      
    }

    else
    this.form.markAsDirty();
    this.form.markAsPristine()
  }

  ngOnInit(): void {
    this.authorsSRV.getAll().subscribe(suc => {
      this.authorss =suc
    })
  }
}
