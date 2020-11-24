import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { Home } from './screens/home/home';
import { TableComponent } from './components/table/tableComponent';
import { ItemComponent } from './components/item/itemComponent';
import { EditComponent } from './components/edit/editComponent';
import { ConfirmComponent } from './components/confirm/confirmComponent';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    Home,
    EditComponent,
    TableComponent,
    ConfirmComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatDialogModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    NoopAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [Home]
})
export class AppModule { }
