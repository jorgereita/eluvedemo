import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public appPages = [
    { title: 'Inbox', url: '/dashboard/home', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Salir'];
  constructor(
    public translate: TranslateService,
    private router: Router,
  ) {

  }
  ngOnInit(): void {

  }
  logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("expired");
    localStorage.removeItem("roleId");
    this.router.navigate(["/login"]);
  }
}
