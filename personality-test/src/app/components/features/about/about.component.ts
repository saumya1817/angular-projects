import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  description: string = '';
  listAboutMe = [
    '🌐 6+ years of industry experience in frontend development (and counting!)',
    '⚡ Specializing in Angular to create powerful single-page apps (SPAs).',
    '🛠️ Passionate about clean, efficient code and building websites that are both functional and beautiful.'
  ]
  closingstatement: string;
  description2: string;
  constructor() { }

  ngOnInit(): void {
    this.description = `I’m a frontend developer with 6+ years of experience in the industry, and I specialize in Angular. 🚀 `;
    this.description2 = `I’ve spent my days creating seamless, dynamic web applications that users love to interact with.
    But hey, I’m always looking to level up! 💡 That’s why I created this project—to dive into Tailwind CSS and get my hands dirty with this fantastic utility-first framework. 🎨`;
    this.closingstatement = `I’m constantly exploring new trends and tech to stay sharp, so feel free to browse my projects and connect with me. Let's build something awesome together! 🔥`;

  }

}
