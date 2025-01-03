import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: any;
  filteredUsers: { name: string; email: string; }[] = [];
  ifNoUsers: boolean = false;

  constructor(private authService: AuthenticationService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data)=>{
      this.users = data;
    })
  }

  logout(): void {
    this.authService.logout();
  }

  searchUser(e: any){
    this.filteredUsers.pop();
    this.ifNoUsers = false;
    const searchValue = e.value;
    Object.values(this.users).filter((user: any)=>{
      if(user.username.toLowerCase().includes(searchValue.username)){
        this.filteredUsers.push({ name: user.name, email: user.email })
      }
    })
    if(this.filteredUsers.length === 0){
      this.ifNoUsers = true;
    }
  }

}
