import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipeService } from "../recipe.service";
import { Recipe } from "../recipe.model";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.page.html",
  styleUrls: ["./recipe-detail.page.scss"]
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has("recipeId")) {
        return console.log("page not found");
      }
      const recipeId = paramMap.get("recipeId");
      this.loadedRecipe = this.recipeService.getRecipeById(recipeId);
    });
  }
  onDeleteRecipe() {
    this.alertCtrl
      .create({
        header: "Sei sicuro?",
        message: "Vuoi eliminare l'elemento selezionato?",
        buttons: [
          {
            text: "Cancella",
            role: "cancel"
          },
          {
            text: "Elimina",
            handler: () => {
              this.recipeService.deleteRecipe(this.loadedRecipe.id);
              this.router.navigate(["/recipes"]);
            }
          }
        ]
      })
      .then(alertEl => {
        alertEl.present();
      });
  }
}
