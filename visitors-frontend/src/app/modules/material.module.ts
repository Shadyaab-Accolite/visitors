/**
 * 
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * 
 * Gives the flexibility to add all Material elements inside this module  
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { DataTableComponent } from '../components/ui-components/data-table/data-table.component';

@NgModule( {
  declarations: [ DataTableComponent ],
  imports: [ CommonModule, MatButtonModule, MatCheckboxModule, MatTableModule,
    MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule ],
  exports: [ CommonModule, MatButtonModule, MatCheckboxModule, MatTableModule,
    MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule,
    DataTableComponent ]
} )

export class MaterialModule { }