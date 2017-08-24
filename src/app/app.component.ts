import { Component } from '@angular/core';

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
    styles: ['input { outline:none; border:none; color:white; border-color:white}']
})

export class AppComponent{
  sampleIndex = 0;
  
  increment(event) {
    this.sampleIndex++;
  }

  decrement(event) {
    this.sampleIndex--;
  }

  values = '';
  onKey(event:any) {
  
    this.values = event.target.value + '';
    var userinput = this.values;

    if (check("repeat")) {
      this.values = '';
    } 

    if (check("next")) {
      this.values = '';
    }

    if (check("previous")) {
      this.values = '';
    }

    function check(command) {
      return (userinput.indexOf(command) > -1); 
    }
  }
};
