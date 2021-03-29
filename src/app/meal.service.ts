import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal } from './meal/meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: HttpClient) {}

  getMeals(): Observable<any> {
    //https://www.themealdb.com/api/json/v1/1/search.php?s=
    //http://localhost:8080/api/v1/meal
    return this.http.get<any>("http://localhost:8080/api/v1/meal");
  }

  postMeals(meal: Meal): Observable<any> {
    return this.http.post("http://localhost:8080/api/v1/meal", meal);
     
  }
}
