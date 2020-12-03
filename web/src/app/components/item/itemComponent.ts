import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import { DisciplinaService } from 'src/app/services/disciplinaService';
import { TurmaService } from 'src/app/services/turmaService';
@Component({
  selector: 'itemComponent',
  templateUrl: './itemComponent.html',
  styleUrls: ['./itemComponent.scss'],
})

export class ItemComponent {
  
  turma: any;
  disciplina: any = {nome:'Erro na chamada'};
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id: string},
    private turmaService: TurmaService,
    private disciplinaService: DisciplinaService,
    ){ 
      this.fetchGeneralInformation()
    }

  async fetchGeneralInformation() {

    
    this.turma = await this.turmaService.getExpanded(this.data.id)
    
    console.log(this.turma)
    
    // this.disciplina = await this.disciplinaService.get(this.turma.disciplina).catch(() => {alert('Erro na chamada da disciplina')}) || {nome:'Erro na chamada'};
  }


}





