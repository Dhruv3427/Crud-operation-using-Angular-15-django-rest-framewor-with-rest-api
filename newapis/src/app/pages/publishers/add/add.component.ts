import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { Publishers } from 'src/app/config/publishers/publishers';
import { PublishersService } from 'src/app/config/publishers/publishers.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  closeBtnName?: string;
  public form: FormGroup;
  public publishers: Publishers[]= [];

  constructor(
    private frmbuilder: FormBuilder,
    private publishersSRV: PublishersService,
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
      this.publishersSRV.create(this.form.value).subscribe(suc => { });

    else
      alert("Not Done")
  }

  ngOnInit(): void {
  }


}
