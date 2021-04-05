import { Component, OnInit } from '@angular/core';
import { MealService } from '../meal.service';
import { Meal } from '../meal/meal.model';

@Component({
  selector: 'app-create-meal',
  templateUrl: './create-meal.component.html',
  styleUrls: ['./create-meal.component.css']
})
export class CreateMealComponent implements OnInit {

  meal: Meal = new Meal();
  meals: Array<any> = new Array();

  constructor(private mealService: MealService) { }

  ngOnInit(): void {
  }

  cadastrar(){
    this.mealService.postMeals(this.meal).subscribe(meal => {
      this.meal = new Meal();
      this.getMeals;
    }, err => console.log('Erro ao cadastrar um novo meal.', err))
  }

  getMeals(){
    this.mealService.getMeals().subscribe(data => {
      this.meals = data;
    }, err => {
      console.log('Erro ao listar os meals.', err);
    });
  }

}
