import {Component, Inject} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TurmaService } from 'src/app/services/turmaService';

@Component({
  selector: 'editComponent',
  templateUrl: './editComponent.html',
  styleUrls: ['./editComponent.scss'],
})

export class EditComponent {

  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id: string},
    private fb: FormBuilder,
    private turmaService: TurmaService,
    private dialogRef: MatDialogRef<EditComponent>,
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
    this.form.patchValue({codigo: response.numero})
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

    const horario =  [
      "2LM",
      "4NP"
    ];
    const aulas =  [
      "2LM",
      "4NP"
    ];
    const alunos =  [
      "2LM",
      "4NP"
    ];

    const data = {
      "numero": `${this.form.value.codigo}` ,
      "ano": `${this.form.value.ano}`,
      "semestre": `${this.form.value.semestre}`,
      "sala": `${this.form.value.sala}`,
      "professor": `${this.form.value.professor}`,
      "disciplina": `${this.form.value.disciplina}`,
    
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
    

    if (this.data.id != 'new') await this.turmaService.patch( this.data.id, data );
    else await this.turmaService.post(data);
    
    this.dialogRef.close();
  }

}





