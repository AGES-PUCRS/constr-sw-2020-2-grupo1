import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Turma } from 'src/app/types';
import { EditComponent } from '../../components/edit/editComponent';
import { TurmaService } from 'src/app/services/turmaService';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
 
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
   
    let dialogRef = this.dialog.open(EditComponent, {
      data: { 
        id: 'new', 
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fetchData();
    });
  }

  ngAfterViewInit() {
    this.fetchData()
  }

  async fetchData() {
    const classes = await this.turmaService.getAll()
    this.dataSource = new MatTableDataSource(classes)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  refresh() {
    this.fetchData()
    // window.location.reload();
  }

}



