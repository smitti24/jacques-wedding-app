import { SendEmailModel } from './models/send-email-model';
import { EmailService } from './email.service';
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

  isVegetarian = false;
  vegetarian = '';
  notVegetarian = '';

  name: string = '';
  email: string = '';
  telNo: string = '';
  songRequest: string = '';
  message: string = '';
  disableRSVPButton = false;


  constructor(private emailService: EmailService){}

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

  isPersonVegetarian(vegan: boolean): void {
    console.log(vegan);

    if (vegan) {
      this.vegetarian = 'button-active';
      this.notVegetarian = ''
    } else {
      this.vegetarian = '';
      this.notVegetarian = 'button-active'
    }

    this.isVegetarian = vegan;
  }

  sendWeddingRSVP() {
    const email: SendEmailModel = {
      Subject: this.isRsvp ? `${this.name} are COMMING` : `${this.name} are NOT COMMING`,
      FromAddress: this.email,
      Message: this.message,
      TelNo: this.telNo,
      Name: this.name,
      IsVegetarian: this.isVegetarian,
      SongRequest: this.songRequest
    }

    this.emailService.sendEmail(email).subscribe();

    this.clearTextBoxes();
  }

  clearTextBoxes(): void {
    this.isRsvp = false;
    this.comming = '';
    this.notComming = '';

    this.isVegetarian = false;
    this.vegetarian = '';
    this.notVegetarian = '';

    this.name = '';
    this.email = '';
    this.telNo = '';
    this.songRequest = '';
    this.message = '';

    this.disableRSVPButton = true;
  }

  openMaps(): void {
    window.open("https://www.google.com/maps/place/Goedgeleven/@-33.7789334,18.7085154,15z/data=!4m2!3m1!1s0x0:0x37040e88196589f0?sa=X&ved=2ahUKEwizlLD1u-3zAhXH2qQKHexPAZkQ_BJ6BAhIEAU", "_blank")
  }
}

