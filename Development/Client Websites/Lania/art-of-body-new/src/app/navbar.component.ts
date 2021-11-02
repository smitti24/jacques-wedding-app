import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
  @ViewChild('about')
  aboutElement!: ElementRef;

  constructor() { }

  ngOnInit() { }

  goHome() {
    const element = document.querySelector("#home");
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  goAbout() {
    const element = document.querySelector("#about");
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  goBlog() {
    const element = document.querySelector("#blog");
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  goPrograms() {
    const element = document.querySelector("#programs");
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  goContact() {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
