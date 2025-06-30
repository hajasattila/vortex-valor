import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: []
})
export class BackButtonComponent implements OnInit {
  disabled = true;
  private historyStack: string[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(event => {
      const url = event.urlAfterRedirects;
      if (this.historyStack.length === 0 || this.historyStack[this.historyStack.length - 1] !== url) {
        this.historyStack.push(url);
      }
      this.updateDisabled();
    });
  }

  goBack(): void {
    if (this.historyStack.length > 1) {
      this.historyStack.pop();
      const previousUrl = this.historyStack[this.historyStack.length - 1];
      this.disabled = true;
      this.router.navigateByUrl(previousUrl).then(() => {
        this.updateDisabled();
      });
    }
  }

  private updateDisabled(): void {
    this.disabled = this.historyStack.length <= 1;
  }
}
