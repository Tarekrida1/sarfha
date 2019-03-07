import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: Category[] = []; // categories collection form firebase and recive it in array
  constructor(private catg: CategoriesService) {}

  ngOnInit() {
    this.catg.getAllCategories().subscribe(data => { // categories observer
      this.categories = data.map(category => {
        return {
          id: category.payload.doc.id,
          ...category.payload.doc.data()
        };
      });
    });
  }
}
