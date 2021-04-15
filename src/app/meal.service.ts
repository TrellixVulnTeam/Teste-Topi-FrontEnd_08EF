import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal } from './meal/meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: HttpClient) {}

  mealUrl: string = "https://teste-topi-api-meals.herokuapp.com/api/v1/meal";

  getMeals(): Observable<any> {
    return this.http.get<any>(this.mealUrl);
  }

  getMeal(id: string): Observable<any> {
    return this.http.get<any>(this.mealUrl+"/"+id);
  }

  postMeals(meal: Meal): Observable<any> {
    return this.http.post(this.mealUrl, meal);
  }
}
