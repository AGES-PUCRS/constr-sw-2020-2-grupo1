import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TurmaService } from 'src/app/services/turmaService';
import { TurmaResponse } from '../../types'

@Component({
  selector: 'itemComponent',
  templateUrl: './itemComponent.html',
  styleUrls: ['./itemComponent.scss'],
})

export class ItemComponent {
  
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: {id: string},
    private turmaService: TurmaService,
  ){ 
      this.fetchInfo();
  }
  
  turma: TurmaResponse;

    

  async fetchInfo() {
    this.turma = await this.turmaService.get(this.data.id)
  }
    


}






