import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  description: string = '';
  clickHereText: string = '';

  constructor() { }

  ngOnInit(): void {
    this.description = 'Unlock the mysteries of your mind with our personality test! 🌟'+
                        'Are you curious about what makes you tick? Ready to discover your unique traits?' +
                        'Whether you\'re the life of the party or the quiet thinker, our test has got you covered.'+
                        'Dive in and learn more about your true self.Ever wonder why you react the way you do? Our test breaks it down!'+
                        'Are you an introvert or an extrovert? Let\'s find out together!'+
                        'What\'s your secret superpower? Spoiler: It\'s hidden in your personality!'+
                        'Your friends may call you quirky – but we\'ll call it your unique charm!'+
                        'Get to know your strengths: Who knows? You might surprise yourself!'+
                        'Not all heroes wear capes, but they do have very cool personality traits.'+
                        'Feeling a little lost? Let’s map out your personality in just a few minutes.'+
                        'Whether you\'re a dreamer or a doer, we have insights waiting for you.'+
                        'What do you think about your decision-making skills? Let’s test them out!'+
                        'Are you the planner or the adventurer? Maybe you\'re a bit of both!'+
                        'Discover how your mind works: Find patterns, quirks, and surprises along the way.'+
                        'Ready to unlock the "mystery of you"? It’s more fun than you think!'+
                        'Jump in, take the test, and let’s uncover the wonderful complexities of who you truly are! 🧠💥';
    this.clickHereText = 'Click here to take the test now and start your self-discovery journey!';
  }

}
