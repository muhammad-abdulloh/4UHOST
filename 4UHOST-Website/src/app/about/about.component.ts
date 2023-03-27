import { Component } from '@angular/core';
declare function startLoader(): any
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  loader: boolean = true;
  constructor(){
    this.loaderFunc();
  }

  loaderFunc(): void{
    setTimeout( () => {
      this.loader = true;
    }, 1500);
  }
}
