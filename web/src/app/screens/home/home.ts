import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Turma } from 'src/app/interfaces';
import { MatSort } from '@angular/material/sort';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})

export class Home implements AfterViewInit {

  dataSource = new MatTableDataSource<Turma>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  
}




const ELEMENT_DATA: Turma[] = [
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





/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */