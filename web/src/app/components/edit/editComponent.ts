import {Component, Inject} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProfessorService } from 'src/app/services/professorService';
import { TurmaService } from 'src/app/services/turmaService';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips'
@Component({
  selector: 'editComponent',
  templateUrl: './editComponent.html',
  styleUrls: ['./editComponent.scss'],
})

export class EditComponent {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  professores = [];

  horarios: string[] = [];
  
  item = new FormGroup({
    codigo: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{3}$')]),
    ano: new FormControl('', [Validators.required, Validators.pattern('^[12][0-9]{3}$')]),
    semestre: new FormControl('1', [Validators.required]),
    professor: new FormControl('', [Validators.required])
  })

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id: string},
    private turmaService: TurmaService,
    private professorService: ProfessorService,
    private dialogRef: MatDialogRef<EditComponent>,
  ){ 
    if (data.id!='new') this.fetchSpecificInformation();
    this.fetchGeneralInformation()

  }
  
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value.toUpperCase();
    if ((value || '').trim()) this.horarios.push(value.trim());
    if (input) input.value = '';

    console.log(this.item.value.professor)
  }

  remove(item: string): void {
    const index = this.horarios.indexOf(item);
    if (index >= 0) this.horarios.splice(index, 1);
  }


  async fetchSpecificInformation() {
    const turma = await this.turmaService.get(this.data.id)
    this.horarios = turma.horario
    this.item.patchValue({
      codigo: turma.numero, 
      ano: turma.ano,
      professor: turma.professor,
      semestre: `${turma.semestre}`,
    })

    console.log(this.item)
  }

  async fetchGeneralInformation() {
    this.professores = await this.professorService.getAll()

  }

  selectedValue: string;

  async onSubmit() {

    const aulas =  [
      "2LM",
      "4NP"
    ];
    const alunos =  [
      "2LM",
      "4NP"
    ];

    const data = {
      "numero": `${this.item.value.codigo}` ,
      "ano": `${this.item.value.ano}`,
      "semestre": `${this.item.value.semestre}`,
      
      "professor": `${this.item.value.professor}`,
      "sala": `teste`,
      "disciplina": `teste`,
      "horario": this.horarios,
      "aulas": aulas,
      "alunos": alunos,
    }
    
    console.log(data)

    if (this.data.id != 'new') await this.turmaService.patch( this.data.id, data );
    else await this.turmaService.post(data);
    
    this.dialogRef.close();
  }

}





