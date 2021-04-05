import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from '../meal.service';
import { Meal } from '../meal/meal.model';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent implements OnInit {
  idMeal: string;
  meals: Array<any> = new Array();
  meal: Meal = new Meal;
  tags: Array<string> = new Array();
  allIngredients: Array<string> = new Array();
  allMeasures: Array<string> = new Array();
  ingredients: Array<string> = new Array();
  measures: Array<string> = new Array();


  constructor(private route: ActivatedRoute, private mealService: MealService) { 
    
  }

  ngOnInit(): void {
    this.idMeal = this.route.snapshot.paramMap.get('id');
    this.getMeal(this.idMeal);
  }
  
  getMeal(id: string) {
    this.mealService.getMeal(id).subscribe(data => {
      this.meal = data;
      this.tags = this.meal.strTags.split(",");
      this.getIngredients();
      this.getMeasures();
    },
      err => {console.log("Erro ao buscar meal", err)})
  }

  getIngredients() {
    // for(const key in data.keys){
    //   if(!data[key]){
    //     console.log("DATA ------->" + key);
    //     this.ingredients.push(key);
    //   }
    // }
    this.allIngredients.push(
      this.meal.strIngredient1, 
      this.meal.strIngredient2,
      this.meal.strIngredient3,
      this.meal.strIngredient4,
      this.meal.strIngredient5,
      this.meal.strIngredient6,
      this.meal.strIngredient7,
      this.meal.strIngredient8,
      this.meal.strIngredient9,
      this.meal.strIngredient10,
      this.meal.strIngredient11,
      this.meal.strIngredient12,
      this.meal.strIngredient13,
      this.meal.strIngredient14,
      this.meal.strIngredient15,
      this.meal.strIngredient16,
      this.meal.strIngredient17,
      this.meal.strIngredient18,
      this.meal.strIngredient19,
      this.meal.strIngredient20)
      this.allIngredients.forEach(element => {
        if(element.trim() !== ""){
          this.ingredients.push(element);
        }
      });
  }

  getMeasures(){
    this.allMeasures.push(
      this.meal.strMeasure1,
      this.meal.strMeasure2,
      this.meal.strMeasure3,
      this.meal.strMeasure4,
      this.meal.strMeasure5,
      this.meal.strMeasure6,
      this.meal.strMeasure7,
      this.meal.strMeasure8,
      this.meal.strMeasure9,
      this.meal.strMeasure10,
      this.meal.strMeasure11,
      this.meal.strMeasure12,
      this.meal.strMeasure13,
      this.meal.strMeasure14,
      this.meal.strMeasure15,
      this.meal.strMeasure16,
      this.meal.strMeasure17,
      this.meal.strMeasure18,
      this.meal.strMeasure19,
      this.meal.strMeasure20
    )
    this.allMeasures.forEach(element => {
      if(element.trim() !== ""){
        this.measures.push(element);
      }
    });
  }

}
