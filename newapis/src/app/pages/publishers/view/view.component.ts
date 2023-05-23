import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { AddComponent } from '../add/add.component';
import { Publishers } from 'src/app/config/publishers/publishers';
import { PublishersService } from 'src/app/config/publishers/publishers.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
    bsModalRef?: BsModalRef;
    public publishers: Publishers[] = [];
    constructor(
      
      private modalService: BsModalService,
      private publishersSRV: PublishersService
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
      this.publishersSRV.getAll().subscribe(suc => {
        this.publishers =suc
      })
    }
  }



