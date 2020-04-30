import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './homepage.component.html',
})
export class HomepageComponent implements OnInit {

  slides = [
    { image: 'https://miro.medium.com/max/18708/1*WgMZ_JII2WFKMIEtbWeTHg.jpeg', text: 'Watch Movies'},
    { image: 'https://static.amazon.jobs/teams/53/images/IMDb_Header_Page.jpg?1501027252', text: 'Stream Shows' }
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
