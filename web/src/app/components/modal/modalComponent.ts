import {AfterViewInit, Component, Inject} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TurmaService } from 'src/app/services/turmaService';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'modalComponent',
  templateUrl: './modalComponent.html',
  styleUrls: ['./modalComponent.scss'],
})

export class ModalComponent {

  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id: string},
    private fb: FormBuilder,
    private turmaService: TurmaService,
    private dialogRef: MatDialogRef<ModalComponent>,
    ){ 
      if (data.id!='new') this.fetchInfo();
      this.initForm();
    }


    
    
  initForm() {
    this.form = this.fb.group({
      codigo : '',
      disciplina  : '',
      professor : '',
      semestre : '',
      sala : '',
      ano : '',
    }, {
      validator: this.validator,
    })
  }



  async fetchInfo() {
    const response = await this.turmaService.get(this.data.id)
    this.form.patchValue({codigo: response.sala})
    this.form.patchValue({professor: response.professor})
    this.form.patchValue({sala: response.sala})
    this.form.patchValue({semestre: response.semestre})
    this.form.patchValue({ano: response.ano})
    this.form.patchValue({disciplina: response.disciplina})

  }

  validator(form: FormGroup) {
    const condition = form.get('semestre').value =='' ||
    form.get('codigo').value =='' ||
    form.get('disciplina').value ==''||
    form.get('sala').value =='' ||
    form.get('professor').value =='';

    return condition ? { required: true} : null;
  }


  async onSubmit() {

    console.log(this.form.get('codigo'))

    const data = await{
      "numero": "3213" ,
      "ano": 2015,
      "semestre": 1,
      "sala": "id_sala",
      "professor": "id_professor",
      "disciplina": "id_disciplina",
      "horario": [
        "2LM",
        "4NP"
      ],
      "aulas": [
        "id_aula1",
        "id_aula2"
      ],
      "alunos": [
        "id_aluno1",
        "id_aluno2"
      ]
    }

    await this.turmaService.patch(this.data.id, data);
    console.log()


    this.dialogRef.close();
  }

}


// {
//   "numero": this.form.get('codigo').value ,
//   "ano": this.form.get('ano').value,
//   "semestre": this.form.get('semestre').value,
//   "sala": this.form.get('sala').value,
//   "professor": this.form.get('professor').value,
//   "disciplina": this.form.get('codigo').value,

//   "horario": [
//     "2LM",
//     "4NP"
//   ],
//   "aulas": [
//     "id_aula1",
//     "id_aula2"
//   ],
//   "alunos": [
//     "id_aluno1",
//     "id_aluno2"
//   ]
// }

