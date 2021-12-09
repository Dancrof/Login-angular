import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueDetailsComponent } from './pages/catalogue-details/catalogue-details.component';
import { CatalogueListComponent } from './pages/catalogue-list/catalogue-list.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {path: 'list', component: CatalogueListComponent},
      {path: 'list/view/details/:id', component: CatalogueDetailsComponent},
      {path: '**', redirectTo:'list'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule { }
