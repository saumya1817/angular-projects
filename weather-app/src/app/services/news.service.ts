import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  private newsAPIURL = 'https://newsapi.org/v2/top-headlines?language=en&apiKey=';
  private apiKey = 'a979a3613e1c40f1a658665ee86c39bf';

  constructor(private http: HttpClient) { }

  getNews(): Observable<any>{
    return this.http.get<any>(this.newsAPIURL+`${this.apiKey}`);
  }

}
