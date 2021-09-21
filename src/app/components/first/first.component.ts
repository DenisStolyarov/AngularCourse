import { Component } from '@angular/core';
import { Category } from './shared/category';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  name: string = 'Name';
  description: string = 'Description';
  price: number = 100;
  category: Category = Category.B;
  list: Array<string> = ['One', 'Two', 'Three'];
}
