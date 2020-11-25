import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import { DisciplinaService } from 'src/app/services/disciplinaService';
import { TurmaService } from 'src/app/services/turmaService';
import { SalaService } from 'src/app/services/salaService';
@Component({
  selector: 'itemComponent',
  templateUrl: './itemComponent.html',
  styleUrls: ['./itemComponent.scss'],
})

export class ItemComponent {
  
  turma: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id: string},
    private turmaService: TurmaService,
    private disciplinaService: DisciplinaService,
    private salaService: SalaService,
    ){ 
      this.fetchGeneralInformation()
    }
    sala: any;
    disciplina: any = {nome:'Erro na chamada'};

  async fetchGeneralInformation() {

    this.turma = await this.turmaService.getExpanded(this.data.id).catch(() => {alert('Erro na chamada da turma')});
    
    this.sala = await this.salaService.get(this.turma.sala).catch(() => {alert('Erro na chamada da sala')})|| {number:'Erro na chamada'};;
    
    // this.disciplina = await this.disciplinaService.get(this.turma.disciplina).catch(() => {alert('Erro na chamada da disciplina')}) || {nome:'Erro na chamada'};
  }


}





