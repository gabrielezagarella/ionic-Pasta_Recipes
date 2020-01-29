import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: "r1",
      title: "pasta alla carbonara",
      imgUrl:
        "https://www.informacibo.it/wp-content/uploads/2018/04/carbonara.jpg",
      ingrdients: [
        "INGREDIENTI",
        "3 uova",
        "qb pancetta o guanciale",
        "qb pecorino o parmiggiano",
        "qb pepe"
      ],
      procedure: [
        "PROCEDURA",
        "1 Separiamo i tuorli dall' albume  (ma lasciare anche un po’ di albume).",
        "2 Prendere del formaggio pecorino o grana stagionati e grattuggiarli.",
        "3 Aggiungere il formaggio grattuggiato ai tuorli d'uovo sbattuti.",
        "4 Aggiungere pepe in grani macinato, anche grossolanamente, che dà sia la parte croccante che quella balsamica.",
        "5 Mettere la crema di tuorli, formaggio e pepe a bagnomaria, mescolare con una frusta, fino creare una specie di zabaione salato.",
        "6 Tagliare a tocchetti il guanciale (senza lasciare residui di pepe). Tagliarlo a pezzi leggermente grossi, in modo che rosolando resterà morbido all'interno e croccante fuori.",
        "7 Rosolare il guanciale in padella e conservare il grasso di cottura",
        "8 Far bollire dell'acqua in una pentola capiente per cuocere la pasta,  aggiungere sale e il formato di pasta che si preferisce. Conservare un paio di mestoli di acqua di cottura.",
        "9 Scolare la pasta al dente, unirla alla crema di uova, aggiungere un mestolo di acqua cottura per mantecare la Carbonara a bagnomaria, il grasso del guanciale, sempre mescolando, un altro mestolo di acqua cottura e  i cubetti di guanciale.",
        "10 Terminare con grana e pecorino. E una spolverata di pepe nero appena macinato."
      ]
    },
    {
      id: "r2",
      title: "pasta al pistacchio",
      imgUrl:
        "http://www.ricetteinarmonia.it/wp-content/uploads/2016/01/ravioli-in-crema-di-pistacchio-7.jpg",
      ingrdients: [
        "INGREDIENTI",
        " 30 gr di granella di pistacchio",
        "50 gr di pancetta affumicata, o speck",
        "50 gr panna da cucina",
        "uno scalogno o cipolletta",
        "mezzo bicchiere di brandy o vino bianco",
        "olio extravergine d'oliva",
        "sale quanto basta"
      ],
      procedure: [
        "PROCEDURA",
        "1 Prendi una padella antiaderente, in cui preparerai la salsa con cui condire la pasta. Sceglila capiente. A cottura ultimata, dovrai riversare tutto in padella.",
        "2 Accendi il fuoco, a fiamma moderata, e aggiungi un filo d'olio e lo scalogno tagliato finemente",
        "3 Fai rosolare leggermente, aggiungendo poca acqua, affinché la cipolla non bruci. Tieni la fiamma bassa: la salsa alla brontese si cucina lentamente.",
        "4 Dopo un minuto unisci la pancetta, o lo speck. Non appena sarà dorata, fai incontrare la pancetta con la granella di pistacchio di Bronte. Mmm...",
        "5 A questo punto sfuma con mezzo bicchiere di Brandy. Se non hai questo liquore, puoi usare, in alternativa, del vino bianco",
        "6 Lascia evaporare il vino e, solo allora, aggiungi la panna da cucina. Se il condimento fosse troppo asciutto, aggiungi dell'acqua di cottura della pasta, in modo da ammorbidire il tutto e rendere il sugo più cremoso.",
        "7 Servi il tutto con una spolverata di pistacchio."
      ]
    },
    {
      id: "r3",
      title: "pasta alla norma",
      imgUrl:
        "https://www.salepepe.it/files/2014/03/ricetta-pasta-norma-400x300.jpg",
      ingrdients: [
        "INGREDIENTI",
        "500 grammi pomodoro",
        "400 grammi melanzana",
        "2 spicchi aglio",
        "100 grammi ricotta salata",
        "qb olio per friggere",
        "qb sale grosso",
        "qb pepe",
        "350 grammi pasta di semola (di grano duro)",
        "1 mazzetto basilico",
        "qb olio di oliva extravergine"
      ],
      procedure: [
        "PROCEDURA",
        "1 Per preparare la pasta alla norma  taglia le melanzane a fettine rotonde dello spessore di 2-3 mm. Sistemale, a strati, in uno scolapasta, cospargi ogni strato con sale grosso; appoggiaci sopra un piatto con un peso e lasciale riposare per circa 1 ora, finché avranno rilasciato l'acqua amarognola.",
        "2 Lava i pomodori, incidili sulla base e immergili in acqua bollente per qualche istante; scolali, sbucciali, tagliali a quarti e strizzali leggermente per eliminare i semi e parte dell'acqua di vegetazione; mettili sul tagliere e tritali con il coltello.",
        "3 Scalda in una padella 4 cucchiai di olio d'oliva, unisci gli spicchi d'aglio sbucciati e schiacciati e falli dorare, quindi eliminali. Aggiungi i pomodori e qualche foglia di basilico spezzettata, sala, pepa e cuoci la salsa per la pasta alla norma circa 15 minuti.",
        "4 Sciacqua le fettine di melanzana per eliminare il sale in eccesso, poi asciugale con carta assorbente da cucina. Scalda bene in una larga padella abbondante olio per friggere e immergi le fettine di melanzane, poche alla volta in modo che non si sovrappongano.",
        "5 Man mano che sono dorate scola le fettine di melanzane su un largo piatto coperto con carta assorbente da cucina e regola di sale; tienile in caldo ma evita però di coprirle. Porta ad ebollizione in una pentola abbondante acqua salata e cuocici la pasta",
        "6 Versa 1 mestolino di salsa in una terrina calda, unisci la pasta scolata al dente, mescolala e distribuiscila nei piatti; versaci sopra la rimanente salsa, le melanzane fritte e la ricotta grattugiata con la grattugia a fori grossi."
      ]
    },
    {
      id: "r4",
      title: "troccoli con cime di rapa",
      imgUrl:
        "https://www.salepepe.it/files/2014/04/troccoli-con-cime-di-rapa-ricetta-986x400.jpg",
      ingrdients: [
        "INGREDIENTI",
        "30 grammi grana",
        "400 grammi cime di rapa",
        "250 grammi salsiccia piccante",
        "1 spicchio aglio",
        "500 grammi pasta all'uovo",
        "qb sale",
        "qb peperoncino",
        "qb pomodoro concentrato",
        "qb olio di oliva extravergine"
      ],
      procedure: [
        "PROCEDURA",
        "1 Per troccolo con cime di rapa, pulisci le verdure e tagliale grossolanamente. Porta a ebollizione abbondante acqua, salala e tuffaci la pasta e le cime di rapa.",
        "2 Strofina con l'aglio una grossa padella, versa un filo di olio e fallo scaldare. Elimina l'aglio e rosola la salsiccia senza pelle a piccoli pezzetti. Unisci un cucchiaio di concentrato di pomodoro, bagna con un mestolino di acqua di cottura della pasta e cuoci un paio di minuti.",
        "3 Scola la pasta al dente con le cime, rovescia il tutto nella padella della salsiccia, unisci il grana, mescola e distribuisci nei piatti. Guarnisci con qualche rondella di peperoncino fresco e servi i troccoli con cime di rapa."
      ]
    }
  ];

  constructor() {}

  getallRecipes() {
    return [...this.recipes];
  }
  getRecipeById(id: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === id;
      })
    };
  }
  deleteRecipe(id: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== id;
    });
  }
}
