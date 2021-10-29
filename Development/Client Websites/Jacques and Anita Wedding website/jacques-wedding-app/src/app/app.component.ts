import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jacques-wedding-app';
  isRsvp = false;
  comming = '';
  notComming = '';

  rsvp(rsvp: boolean): void {
    console.log(rsvp);

    if (rsvp) {
      this.comming = 'button-active';
      this.notComming = ''
    } else {
      this.comming = '';
      this.notComming = 'button-active'
    }

    this.isRsvp = rsvp;
  }
}
