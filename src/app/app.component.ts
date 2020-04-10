import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public title = 'angular-demo';
  public isAuthenticated: boolean;

  ngOnInit(): void {
    this.isAuthenticated = false;
  }

  login() {}

  logout() {}
}
