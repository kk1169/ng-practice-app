import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProduct, IUser } from '../../core/models/common.model';
import { UsersService } from '../../core/services/users.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableComponent } from '../../shared/table/table.component';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule, TableComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  users: IUser[] = [];
  loading: boolean = true;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (response) => {
        this.users = response;
        setTimeout(() => {
          this.loading = false;
        }, 1500);
      },
    });
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('pdf.pdf');
    });
  }
}
