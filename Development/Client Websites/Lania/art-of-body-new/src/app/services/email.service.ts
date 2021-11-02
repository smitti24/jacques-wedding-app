import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SendEmailModel } from '../models/send-email-model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  public sendEmail(sendEmailModel: SendEmailModel): Observable<Response> {
    return this.http.post<Response>('https://art-of-body-api.herokuapp.com/api/email/sendEmail', sendEmailModel);
  }
}
