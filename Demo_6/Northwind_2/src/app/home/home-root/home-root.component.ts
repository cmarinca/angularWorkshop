import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-home-root',
  templateUrl: './home-root.component.html',
  styleUrls: ['./home-root.component.css']
})
export class HomeRootComponent implements OnInit {

  loading = true;

  constructor(private router: Router) {
    this.router.events.subscribe((routerEvent: Event) => {

      if (routerEvent instanceof NavigationStart) {
        this.loading = true;
        console.log('HomeRootComponent.NavigationStarted...true');
      }

      if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
        this.loading = false;
        console.log('HomeRootComponent.NavigationStarted...false');
      }
    });
  }

  ngOnInit() {
  }

}
