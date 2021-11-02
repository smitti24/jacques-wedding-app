import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogModel } from '../models/blog.model';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class BlogService {

  constructor(private http: HttpClient) { }

  public getBlogs(): Observable<Array<BlogModel>> {
    return this.http.get<Array<BlogModel>>('https://art-of-body-api.herokuapp.com/blogs');
  }

  public getBlogById(id: string): Observable<BlogModel> {
    return this.http.get<BlogModel>('https://art-of-body-api.herokuapp.com/blogs/' + id);
  }

}
