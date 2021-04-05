import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MealService } from '../meal.service';
import { Meal } from '../meal/meal.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  meals: Array<any> = new Array();
  meal: Meal = new Meal();
  mealsCategories: Array<string> = [''];
  mealsNationalities: Array<string> = [''];
  distinctCategories: Array<string> = new Array();
  distinctNationalities: Array<string> = new Array();

  mealStrMealFilter: string = '';
  mealStrCategoryFilter: string = '';
  mealStrNationalityFilter: string = '';
  
  constructor(private mealService: MealService, private router: Router) { }

  ngOnInit(): void {
    this.getMeals();
  }

  getMeals(){
    this.mealService.getMeals().subscribe(data => {
      this.meals = data;
      this.getDistinctCategories();
      this.getDistinctNationalities();
    }, err => {
      console.log('Erro ao listar os meals.', err);
    });
  }

  getDistinctCategories(){
    this.meals.forEach(meal => {
      this.mealsCategories.push(meal.strCategory);
    });
    this.distinctCategories = this.mealsCategories.filter((el, index, array) => array.indexOf(el) == index);
  }

  getDistinctNationalities(){
    this.meals.forEach(meal => {
      this.mealsNationalities.push(meal.strArea);
    });
    this.distinctNationalities = this.mealsNationalities.filter((el, index, array) => array.indexOf(el) == index);
  }

  filtrar(){
    if(this.mealStrMealFilter == ""){
      this.ngOnInit();
    }else{
      this.meals = this.meals.filter(res => {
        return res.strMeal.toLowerCase().match(this.mealStrMealFilter.toLocaleLowerCase());
      })
    }
  }

  onSelect(meal: Meal){
    this.router.navigate(['/meal', meal.idMeal]);
  }

}
