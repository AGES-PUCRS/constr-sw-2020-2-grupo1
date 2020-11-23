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

  profileForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.profileForm = this.fb.group({
      codigo : '',
      disciplina  : '',
      professor : '',
      semestre : '',
      sala : '',
    }, {
      validator: this.validator,
    })
  }


  validator(form: FormGroup) {
    const condition = form.get('semestre').value =='' ||
    form.get('codigo').value =='' ||
    form.get('disciplina').value ==''||
    form.get('sala').value =='' ||
    form.get('professor').value =='';

    return condition ? { required: true} : null;
  }

  

  onSubmit() {
    if (this.profileForm.hasError('required')) alert("É preciso preencher todos os campos")
    else 

    console.warn(this.profileForm.value);
  }

  

}


