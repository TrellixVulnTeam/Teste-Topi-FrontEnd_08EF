import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MealService } from '../meal.service';
import { Meal } from './meal.model';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  meals: Array<any> = new Array();
  meal: Meal = new Meal();
  public searchedMeal: Meal;
  
  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    this.getMeals();
  }

  getMeals(){
    this.mealService.getMeals().subscribe(data => {
      this.meals = data;
    }, err => {
      console.log('Erro ao listar os meals.', err);
    });
  }

  cadastrar(){
    this.mealService.postMeals(this.meal).subscribe(meal => {
      this.meal = new Meal();
      this.getMeals;
    }, err => console.log('Erro ao cadastrar um novo meal.', err))
  }

  search(){
    console.log("Estoualterando");
    if(this.searchedMeal.strMeal == ""){
      this.ngOnInit();
    } else {
      this.meals = this.meals.filter(res => {
        return res.meals.strMeal.toLocaleLowerCase().match(this.searchedMeal.strMeal.toLowerCase());
      })
    }
  }
}
