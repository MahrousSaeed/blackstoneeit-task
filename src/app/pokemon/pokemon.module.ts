import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';


const detailsRoutes:Route[] = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'details',
    component:DetailsComponent
  }
]
@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  

    RouterModule.forChild(detailsRoutes)
  ]
})
export class PokemonModule { }
