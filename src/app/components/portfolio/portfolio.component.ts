import { Component, OnInit, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit() {
    const typing = new Typed('.text', {
      strings: ['', 'Angular', 'React', 'Node.js', 'Typescript'],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
    });
  }

  goToLink(url: string){
    window.open(url, "_blank");
}
}
