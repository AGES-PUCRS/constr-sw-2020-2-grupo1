import { Component, OnInit } from '@angular/core';

interface Turma {
  codigo: string,
  disciplina: string,
  professor: string,
  semestre: string,
  sala: number
}

const turmas = [
  {
    codigo: "4T45-02",
    disciplina: "Construção de Software",
    professor: "Eduardo Arruda",
    semestre: "2020/2",
    sala: 215,
  },
  {
    codigo: "4T45-02",
    disciplina: "Construção de Software",
    professor: "Eduardo Arruda",
    semestre: "2020/2",
    sala: 215,
  },
  {
    codigo: "4T45-02",
    disciplina: "Construção de Software",
    professor: "Eduardo Arruda",
    semestre: "2020/2",
    sala: 215,
  },
  {
    codigo: "4T45-02",
    disciplina: "Construção de Software",
    professor: "Eduardo Arruda",
    semestre: "2020/2",
    sala: 215,
  },
]

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})

export class DataTableComponent implements OnInit {

  dataSource: Turma[] = turmas
  displayedColumns: string[] = ['codigo', 'disciplina', 'professor', 'semestre', 'sala'];

  constructor() {}

  ngOnInit(): void {}

}
