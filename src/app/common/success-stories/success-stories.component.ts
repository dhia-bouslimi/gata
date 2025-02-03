import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-success-stories',
    standalone: true,
    imports: [RouterLink, CarouselModule, NgIf, NgClass],
    templateUrl: './success-stories.component.html',
    styleUrl: './success-stories.component.scss'
})
export class SuccessStoriesComponent {

	constructor (
        public router: Router
    ) {}

	// Owl Carousel
    testimonialSlides: OwlOptions = {
		nav: true,
		loop: true,
		margin: 25,
		dots: false,
		autoplay: false,
		smartSpeed: 500,
		autoplayHoverPause: true,
		navText: [
			"<img src='img/icons/left-arrow.svg' alt='Arrow Icon'>",
			"<img src='img/icons/right-arrow.svg' alt='Arrow Icon'>"
		],
        responsive: {
			0: {
				items: 1,
				autoHeight: true
			},
			515: {
				items: 1,
				autoHeight: false
			},
			695: {
				items: 2
			}
		}
    }
    candidatesSlides: OwlOptions = {
		nav: false,
		loop: true,
		margin: 25,
		dots: true,
		autoplay: false,
		smartSpeed: 500,
		autoplayHoverPause: true,
		navText: [
			"<i class='ri-arrow-left-line'></i>",
			"<i class='ri-arrow-right-line'></i>"
		],
        responsive: {
			0: {
				items: 1
			},
			515: {
				items: 2
			},
			695: {
				items: 2
			},
			935: {
				items: 3
			},
			1115: {
				items: 4
			}
		}
    }

}
