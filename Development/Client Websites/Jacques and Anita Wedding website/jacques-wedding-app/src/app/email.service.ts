import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SendEmailModel } from './models/send-email-model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  public sendEmail(sendEmailModel: SendEmailModel): Observable<Response> {
    return this.http.post<Response>(`${environment.baseUrl}/smithwedding/sendemail`, sendEmailModel);
  }
}
