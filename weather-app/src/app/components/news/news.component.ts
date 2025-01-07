import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: any[]=[];

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data)=>{
      console.log(data.articles);
      this.news = data.articles;
    });
  }
  
  backToWeather(){
    this.router.navigate(['weather'])
  }

}
