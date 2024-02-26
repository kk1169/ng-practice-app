import { Component, OnInit } from '@angular/core';
import { IUser } from '../../core/models/common.model';
import { UsersService } from '../../core/services/users.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableComponent } from '../../shared/table/table.component';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule, TableComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];
  loading: boolean = true;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (response) => {
        this.users = response.data;
        setTimeout(() => {
          this.loading = false;
        }, 1500);
      },
    });
  }
}
