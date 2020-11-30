import {Component, Inject} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips'

import { ProfessorService } from 'src/app/services/professorService';
import { DisciplinaService } from 'src/app/services/disciplinaService';
import { AulaService } from 'src/app/services/aulaService';
import { TurmaService } from 'src/app/services/turmaService';
import { SalaService } from 'src/app/services/salaService';
import { AlunoService } from 'src/app/services/alunoService';
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
  salas = [];
  disciplinas = [];
  alunos = [];
  aulas = [];
  testes = [];

  horarios: string[] = [];
  
  item = new FormGroup({
    codigo: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{3}$')]),
    ano: new FormControl('', [Validators.required, Validators.pattern('^[12][0-9]{3}$')]),
    semestre: new FormControl('1', [Validators.required]),
    professor: new FormControl(''),
    sala: new FormControl(''),
    disciplina: new FormControl(''),
    alunos: new FormControl(''),
    aulas: new FormControl(''),
  })

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id: string},
    private turmaService: TurmaService,
    private professorService: ProfessorService,
    private alunoService: AlunoService,
    private aulaService: AulaService,
    private disciplinaService: DisciplinaService,
    private salaService: SalaService,
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
      sala: turma.sala,
      disciplina: turma.disciplina,
      aulas: turma.aulas,
      alunos: turma.alunos,
    })


  }

  async fetchGeneralInformation() {
    this.professores = await this.professorService.getAll()
    this.salas = await this.salaService.getAll()
    this.alunos = await this.alunoService.getAll()
    const aulas = await this.aulaService.getAll()
    this.aulas = aulas.data || []    
    
    // this.disciplinas = await this.disciplinaService.getAll().catch(() => {alert('Erro na chamada das disciplinas')}) || [];
  }

  onSelection(list) {
    console.log(list)
  }


  async onSubmit() {
    console.log(this.item.value.aulas)

    const data = {
      "numero": `${this.item.value.codigo}` ,
      "ano": `${this.item.value.ano}`,
      "semestre": `${this.item.value.semestre}`,
      "professor": `${this.item.value.professor}` || 'undefined',
      "sala": `${this.item.value.sala}`|| 'undefined',
      "disciplina": `${this.item.value.disciplina}`|| 'undefined',
      "horario": this.horarios,
      "aulas": this.item.value.aulas|| [],
      "alunos": this.item.value.alunos|| [],
    }
    
    console.log(data)

    if (this.data.id != 'new') await this.turmaService.patch( this.data.id, data );
    else await this.turmaService.post(data);
    
    this.dialogRef.close();
  }

}





