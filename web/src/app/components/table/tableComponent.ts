import {AfterViewInit, Component, Inject} from '@angular/core';
import { Turma } from 'src/app/interfaces';

@Component({
  selector: 'tableComponent',
  templateUrl: './tableComponent.html',
  styleUrls: ['./tableComponent.scss'],
  inputs: ['dataSource']
})

export class Table implements AfterViewInit {
  
  @Inject("dataSource")
  dataSource: Turma[];
  displayedColumns: string[] = ['avatar', 'codigo', 'disciplina', 'professor', 'semestre', 'sala', 'edit', 'delete'];
  
  ngAfterViewInit() {}
  
}
