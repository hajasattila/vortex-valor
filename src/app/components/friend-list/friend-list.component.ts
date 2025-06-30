// friend-list.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: []
})
export class FriendListComponent implements OnInit {
  friendCount = 0;
  startClicked = false;

  ngOnInit(): void {
    // Ellenőrizzük a vv_startClicked cookie-t
    this.startClicked = this.getCookie('vv_startClicked') !== '';
  }

  private getCookie(name: string): string {
    const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : '';
  }
}
