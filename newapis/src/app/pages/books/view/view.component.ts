import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { Books } from 'src/app/config/books/books';
import { AddComponent } from '../add/add.component';
import { BooksService } from 'src/app/config/books/books.service';
 

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit ,OnDestroy,AfterViewInit
{
  bsModalRef?: BsModalRef; 
  public books: Books[] = [];
  constructor(
    
    private modalService: BsModalService,
    private booksSRV: BooksService
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
    
  }
  ngAfterViewInit(): void{
    this.booksSRV.getAll().subscribe(suc => {
      this.books =suc
    })
  }

  ngOnDestroy(){
    
    if(this.modalService.getModalsCount()){
      this.bsModalRef?.hide();
    }
}

}




