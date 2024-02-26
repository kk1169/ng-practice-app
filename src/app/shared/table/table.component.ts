import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnChanges,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { UITablePaginationStatus } from './table.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit, OnChanges {
  @Input() pagination: boolean = false;
  @Input() search: boolean = false;
  @Input() loading: boolean = false;
  @Input() data: any[] = [];
  @Input() filterColumn = ['name'];
  @Input() pageSize = 5;
  @Input() tableHead: TemplateRef<any> | null = null;
  @Input() tableBody: TemplateRef<any> | null = null;

  tableData: any[] = [];
  totalRecords = 0;
  paginationStatus: UITablePaginationStatus = {
    page: 1,
    pageSize: 5,
    totalPages: 0,
  };
  searchTerm = '';

  ngOnChanges(): void {
    this.initialPagination();
  }

  ngOnInit(): void {}

  initialPagination() {
    this.totalRecords = this.data.length;
    this.paginationStatus = {
      ...this.paginationStatus,
      pageSize: this.pageSize,
      totalPages: Math.ceil(this.totalRecords / this.paginationStatus.pageSize),
    };

    this.refreshTable();
  }

  pageChange(page: number) {
    this.paginationStatus = {
      ...this.paginationStatus,
      page: page,
    };
    this.refreshTable();
  }

  refreshTable() {
    let data = this.data;

    // Searching
    if (this.searchTerm !== '') {
      data = this.data.filter((item) => this.matches(item));
    }

    this.totalRecords = data.length;
    this.paginationStatus.totalPages = Math.ceil(
      this.totalRecords / this.paginationStatus.pageSize
    );
    this.tableData = data.slice(
      (this.paginationStatus.page - 1) * this.paginationStatus.pageSize,
      (this.paginationStatus.page - 1) * this.paginationStatus.pageSize +
        this.paginationStatus.pageSize
    );
  }

  matches(data: any) {
    let columns = Object.keys(data);
    let found = false;

    for (let index = 0; index < columns.length; index++) {
      if (this.filterColumn.includes(columns[index])) {
        if (
          data[columns[index]]
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
        ) {
          found = true;
        }
      }
    }
    return found;
  }
}
