import {AfterViewInit, Component} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'itemScreen',
  templateUrl: './item.html',
  styleUrls: ['./item.scss']
})

export class Item implements AfterViewInit {
  
  ngAfterViewInit() {
    
  }

  loginForm = new FormGroup ({
    codigo: new FormControl('', [Validators.required]),
    disciplina: new FormControl('', [Validators.required]),
    professor: new FormControl('', [Validators.required]),
    semestre: new FormControl('', [Validators.required]),
    sala: new FormControl('', [Validators.required]),
    
  })

  

  onSubmit() {
    event.preventDefault
    console.log('teste');
  }

}
