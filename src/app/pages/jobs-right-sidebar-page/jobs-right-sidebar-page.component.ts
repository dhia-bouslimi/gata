import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { HowAbezoWorksComponent } from '../../common/how-abezo-works/how-abezo-works.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-jobs-right-sidebar-page',
    standalone: true,
    imports: [RouterLink, FormsModule, TopHeaderComponent, NavbarComponent, PageBannerComponent,HowAbezoWorksComponent, FooterComponent, BackToTopComponent, NgIf, NgClass,CarouselModule],
    templateUrl: './jobs-right-sidebar-page.component.html',
    styleUrl: './jobs-right-sidebar-page.component.scss'
})
export class JobsRightSidebarPageComponent {
    constructor (
        public router: Router
    ) {}

    // Salary Range Slider
	minValue: number = 0;
    maxValue: number = 1000;
    onSliderChange(): void {
        if (this.minValue > this.maxValue) {
            const temp = this.minValue;
            this.minValue = this.maxValue;
            this.maxValue = temp;
        }
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
