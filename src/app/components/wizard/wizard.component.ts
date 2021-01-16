import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  
  pagesArray: number = 1

  constructor() { }

  ngOnInit(): void {
    this.pagesArray = 1
    $("#backButtom").prop('disabled', true);
    $("#nextButtom").prop('hidden', false);
    $("#finishButtom").prop('hidden', true);
  }

  nextStep() {
    this.pagesArray++
    
    $("#backButtom").removeAttr('disabled');

    if (this.pagesArray >= 3) {
      $("#nextButtom").prop('hidden', true);
      $("#finishButtom").prop('hidden', false);
      if (this.pagesArray == 4) {
        this.ngOnInit()
      }
    }
    
  }

  backStep() {
    this.pagesArray--

    if (this.pagesArray == 2) {
      $("#finishButtom").prop('hidden', true);
      $("#nextButtom").prop('hidden', false);
    }

    if (this.pagesArray == 1) {
      $("#backButtom").attr('disabled','disabled'); 
    }
    
  }

  firstStep() {
    this.ngOnInit()
  }
  
  
}
