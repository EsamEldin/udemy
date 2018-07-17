import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

recipes: Recipe[] = [
  new Recipe("A Test Recipe","This is simply test","https://glutenfreecuppatea.co.uk/wp-content/uploads/2018/04/gluten-free-kfc-recipe-low-fodmap-1.jpg"),
  new Recipe("A Test Recipe","This is simply test","https://glutenfreecuppatea.co.uk/wp-content/uploads/2018/04/gluten-free-kfc-recipe-low-fodmap-1.jpg")
]; //array of Recipe object
  constructor() { }

  ngOnInit() {
  }

}
