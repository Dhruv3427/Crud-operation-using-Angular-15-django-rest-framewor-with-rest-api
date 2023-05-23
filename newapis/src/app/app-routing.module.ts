import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/books/',
    pathMatch: 'full'
  },
  {
    path: 'pages/books',
    loadChildren: () => import('./pages/books/books.module').then(m => m.BooksModule),
    
  },
  {
    path: 'pages/authors',
    loadChildren: () => import('./pages/authors/authors.module').then(m => m.AuthorsModule),
    
  },
  {
    path: 'pages/publishers',
    loadChildren: () => import('./pages/publishers/publishers.module').then(m => m.PublishersModule),
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
