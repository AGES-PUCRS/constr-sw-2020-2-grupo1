import {AfterViewInit, Component, Inject} from '@angular/core';
import { Turma } from 'src/app/types';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modalComponent';
import { TurmaService } from 'src/app/services/turmaService';
import { Home } from 'src/app/screens/home/home';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'tableComponent',
  templateUrl: './tableComponent.html',
  styleUrls: ['./tableComponent.scss'],
  inputs: ['dataSource']
})

export class TableComponent implements AfterViewInit {

  @Inject("dataSource")
  dataSource: Turma[];
  displayedColumns: string[] = ['avatar', 'codigo', 'disciplina', 'professor', 'semestre', 'sala', 'edit', 'delete'];

  @Output() refresh = new EventEmitter<boolean>();

  ngAfterViewInit() {}

  constructor(
    public dialog: MatDialog,
    private turmaService: TurmaService,
  ) { }

  openEdit(rowId: number) {
   
    let dialogRef = this.dialog.open(ModalComponent, {
      data: { 
        id: rowId, 
      },
    });

    dialogRef.afterClosed().subscribe(result => {

      this.refresh.emit();
    });
  }

  async delete(rowId:number) {
    await this.turmaService.delete(rowId)
    this.refresh.emit();
  }
  

}
