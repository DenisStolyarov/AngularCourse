import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  @ViewChild('appTitle')
  titleField!: ElementRef<HTMLHeadingElement>;

  ngAfterViewChecked(): void {
    this.titleField.nativeElement.innerText = 'AngularCourse';
  }
}
