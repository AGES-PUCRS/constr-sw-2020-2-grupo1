import { Component, Inject, OnInit } from '@angular/core';
import { Turma } from 'src/app/interfaces';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  inputs: ['turmas']
})

export class DataTableComponent implements OnInit {

  @Inject("turmas")
  turmas: Turma[]
  displayedColumns: string[] = ['avatar', 'codigo', 'disciplina', 'professor', 'semestre', 'sala', 'actions'];

  constructor() {
  }

  ngOnInit(): void { }

}
