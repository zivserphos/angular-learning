import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { UnknownurlComponent } from './unknownurl/unknownurl.component';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'recipes',
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    // children: [
    //   { path: './aaa', component: RecipeItemComponent },
    //   { path: 'bbb', component: RecipeDetailComponent },
    // ],
  },
  { path: '**', component: UnknownurlComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
