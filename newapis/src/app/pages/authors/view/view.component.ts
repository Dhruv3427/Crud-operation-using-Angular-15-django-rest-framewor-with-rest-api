import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { Authors } from 'src/app/config/authors/authors';
import { AddComponent } from '../add/add.component';
import { AuthorsService } from 'src/app/config/authors/authors.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  
    bsModalRef?: BsModalRef;
    public authors: Authors[] = [];
    constructor(
      
      private modalService: BsModalService,
      private authorsSRV: AuthorsService
    ) { }
    
     
    
    openModalWithComponent() {
      const initialState: ModalOptions = {
        initialState: {
        }
      };
      this.bsModalRef = this.modalService.show(AddComponent, initialState);
      this.bsModalRef.content.closeBtnName = 'Close';
    }
    ngOnInit(): void {
      this.authorsSRV.getAll().subscribe(suc => {
        this.authors =suc
      })
    }
  }
