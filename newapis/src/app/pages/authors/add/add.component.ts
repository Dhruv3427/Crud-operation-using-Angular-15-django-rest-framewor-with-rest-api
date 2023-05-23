import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { AuthorsService } from 'src/app/config/authors/authors.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  closeBtnName?: string;
  public form: FormGroup;

  constructor(
    private frmbuilder: FormBuilder,
    private authorsSRV: AuthorsService,
    public bsModalRef: BsModalRef

  ) {

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });

  }
  get name() {
    return this.form.get('name');
  }
  
  save() {
    if (this.form.valid)
      this.authorsSRV.create(this.form.value).subscribe(suc => { });

    else
      alert("Not Done")
  }

  ngOnInit(): void {
  }


}
