import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink,Router } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-candidates-right-sidebar-page',
    standalone: true,
    imports: [RouterLink, FormsModule, TopHeaderComponent, NavbarComponent, PageBannerComponent, FooterComponent, BackToTopComponent,CarouselModule,NgClass, NgIf],
    templateUrl: './candidates-right-sidebar-page.component.html',
    styleUrl: './candidates-right-sidebar-page.component.scss'
})
export class CandidatesRightSidebarPageComponent {
    constructor (
        public router: Router
    ) {}

    // Salary Range Slider
	minValue: number = 0; // Initial minimum value
    maxValue: number = 1000; // Initial maximum value
    onSliderChange(): void {
        if (this.minValue > this.maxValue) {
            // Ensure minValue is never greater than maxValue
            const temp = this.minValue;
            this.minValue = this.maxValue;
            this.maxValue = temp;
        }
        // Additional logic can be added here
    }

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

}
