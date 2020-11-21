import { Component, OnInit } from '@angular/core';
import { Turma } from 'src/app/interfaces';

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  turmas: Turma[] = turmas
  constructor() { }

  ngOnInit(): void {
  }

}
