import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
declare var anime: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  git: string = 'assets/img/github-original.svg';
  linkedin: string = 'assets/img/linkedin.svg';
  file: string = 'assets/img/download.svg';

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  public list = [
    {
      name: 'html',
      ImageUrl: 'assets/img/html.svg',
    },
    {
      name: 'css',
      ImageUrl: 'assets/img/css.svg',
    },
    {
      name: 'javascript',
      ImageUrl: 'assets/img/javascript.svg',
    },
    {
      name: 'angular',
      ImageUrl: 'assets/img/angular.svg',
    },
  ];

  public skills = [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'ANGULAR',
    'BOOTSTRAP',
    'RESPONSIVE & ADAPTIVE DESIGN',
    'UI Maintenance',
    'PYTHON',
    'MICROSOFT AZURE',
    'VISUAL STUDIO CODE',
  ];

  ngAfterViewInit(): void {
    const name: any = document.querySelector('#name');
    const title: any = document.querySelector('#title');

    name.innerHTML = name.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    anime.timeline({ loop: false }).add({
      targets: '#name .letter',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 220,
      delay: (_el: any, i: number) => 100 * (i + 1),
    });

    title.innerHTML = title.textContent.replace(
      /\S/g,
      "<span class='title'>$&</span>"
    );
    anime.timeline({ loop: false }).add({
      targets: '#title .title',
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1200,
      delay: (_el: any, i: number) => 2300 + 30 * i,
    });

    const f = document.getElementById('about')!;
    f.addEventListener(
      'mouseenter',
      () => {
        anime.timeline({ loop: false }).add({
          targets: '#greet',
          translateY: [-40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 2500,
          delay: (_el: any, i: number) => 300 + 30 * i,
        });
      },
      { once: true }
    );

    const q: any = document.querySelector('.list')!;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // run your animation code here
          {
            anime.timeline({ loop: false }).add({
              targets: '.list mat-chip',
              scale: [4, 1],
              opacity: [0, 1],
              easing: 'easeOutCirc',
              delay: (_el: any, i: number) => 300 * i,
            });
          }
          {
            once: true;
          }
          observer.disconnect(); // disconnect if you want to stop observing else it will rerun every time its back in view. Just make sure you disconnect in ngOnDestroy instead
        }
      });
    });
    observer.observe(q);
  }

  constructor(private toastr: ToastrService) {}
  showToatr() {
    this.toastr.success('Mail sent successfully');
  }
}
