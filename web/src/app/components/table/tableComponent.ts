import {AfterViewInit, Component, Inject} from '@angular/core';
import { Turma } from 'src/app/types';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent }  from '../edit/editComponent';
import { ItemComponent }  from '../item/itemComponent';
import { TurmaService } from 'src/app/services/turmaService';
import { Output, EventEmitter } from '@angular/core';
import { ConfirmComponent } from '../confirm/confirmComponent';
@Component({
  selector: 'tableComponent',
  templateUrl: './tableComponent.html',
  styleUrls: ['./tableComponent.scss'],
  inputs: ['dataSource']
})

export class TableComponent implements AfterViewInit {

  @Inject("dataSource")
  dataSource: Turma[];
  displayedColumns: string[] = ['codigo', 'disciplina', 'professor', 'semestre', 'sala', 'edit', 'delete', 'expand'];

  @Output() refresh = new EventEmitter<boolean>();

  ngAfterViewInit() {}

  constructor(
    public editDialog: MatDialog,
    public confirmDialog: MatDialog,
    private turmaService: TurmaService,
  ) { }

  open(rowId: number) {
    let dialogRef = this.editDialog.open(ItemComponent, {
      data: { 
        id: rowId, 
      },
    });

    dialogRef.afterClosed().subscribe(result => {
    });

  }
  

  openEdit(rowId: number) {
   
    let dialogRef = this.editDialog.open(EditComponent, {
      data: { 
        id: rowId, 
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refresh.emit();
    });
  }

  confirm(rowId:number) {
    let dialogRef = this.confirmDialog.open(ConfirmComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.delete(rowId)
    });
  }

  async delete(id:number) {
    await this.turmaService.delete(id)
    this.refresh.emit();
  }
  

}
