import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
//   title = 'one';
//  items=[1,2,3,4]
//  result=''
//  constructor() {
//  }
//  getAction(item:any){
//    this.result += item
//  }
//  doEqual(){
//    this.result = eval(this.result)
//  }
//  doresrt(){
//    this.result = ''
//  }
resulte = '';

getAction(item:any) {
  this.resulte += item
  console.log(item)
}

input(item:any) {
  this.resulte = item
}

equal() {
  this.resulte = eval(this.resulte).toFixed(1)
}

reset() {
  this.resulte = ''
}

}
