import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang9-json-url';
  users;
  constructor(private service:UserService) {}

  ngOnInit() {
      this.service.getUsers()
        .subscribe(response => {
          this.users = response;
        });
  }
}