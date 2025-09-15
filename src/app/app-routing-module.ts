import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book-component/book-component';
import { HomeComponent } from './home-component/home-component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'books', component: BookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
