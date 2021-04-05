import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';
import { MealService } from './meal.service';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CreateMealComponent } from './create-meal/create-meal.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterPipe } from './pipes/filter.pipe';
import { HeaderComponent } from './header/header.component';
import { MealDetailComponent } from './meal-detail/meal-detail.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    CreateMealComponent,
    HomeComponent,
    PagenotfoundComponent,
    FilterPipe,
    HeaderComponent,
    MealDetailComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    AppRoutingModule
  ],
  providers: [MealService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
