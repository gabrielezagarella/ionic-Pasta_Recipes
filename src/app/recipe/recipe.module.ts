import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RecipePageRoutingModule } from "./recipe-routing.module";

import { RecipePage } from "./recipe.page";
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";
import { Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: RecipePage
  }
];
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RecipePageRoutingModule],
  declarations: [RecipePage, RecipeItemComponent]
})
export class RecipePageModule {}
