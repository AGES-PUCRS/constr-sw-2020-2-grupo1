import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Turma } from 'src/app/types';
import { ModalComponent } from '../../components/modal/modalComponent';
import { TurmaService } from 'src/app/services/turmaService';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})

export class Home implements AfterViewInit {

  dataSource = new MatTableDataSource<Turma>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private turmaService: TurmaService,
    public dialog: MatDialog
    ) { }


  openNew() {
   
    let dialogRef = this.dialog.open(ModalComponent, {
      data: { 
        id: 'new', 
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.getClasses();
    });
  }

  ngAfterViewInit() {
    this.getClasses()
  }

  async getClasses() {
    const classes = await this.turmaService.getAll()
    this.dataSource = new MatTableDataSource(classes)
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  refresh(data: string) {
    this.getClasses()
    // window.location.reload();
  }

}



