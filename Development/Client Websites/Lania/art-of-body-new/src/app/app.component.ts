import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SendEmailModel } from './models/send-email-model';
import { ServicesModel } from './models/services.model';
import { EmailService } from './services/email.service';


declare function loadAnimatedHeader(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  services: ServicesModel[] = [];

  constructor(private emailService: EmailService, private router: Router) {
  }
  public emailSent = false;
  public emailModel: SendEmailModel = new SendEmailModel();
  public showMore = false;

  title = 'art-of-body-web';

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    loadAnimatedHeader();
  }

  onSubmit() {
    // this.emailModel = {
    //   Name: document.querySelector("#name")['value'],
    //   FromAddress: document.querySelector("#email")['value'],
    //   Message: document.querySelector("#message")['value'],
    //   Subject: document.querySelector('#subject')['value']
    // }

    // this.emailService.sendEmail(this.emailModel).subscribe(res => {
    //     this.emailSent = true;
    //   }, (err) => {
    //   });
}
}
