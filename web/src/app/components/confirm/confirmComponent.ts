import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'confirmComponent',
  templateUrl: './confirmComponent.html',
  styleUrls: ['./confirmComponent.scss'],
})

export class ConfirmComponent {

  title: any;
  description: any;
  button1: any;
  button2: any;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string, 
      description: string, 
      button1: string, 
      button2: string
    },
  ) { 
    this.title = this.data.title;
    this.description = this.data.description;
    this.button1 = this.data.button1;
    this.button2 = this.data.button2;
  }


}





