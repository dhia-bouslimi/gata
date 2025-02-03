import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink,Router } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-jobs-grid-page',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass, TopHeaderComponent, NavbarComponent, PageBannerComponent, FooterComponent, BackToTopComponent,CarouselModule],
    templateUrl: './jobs-grid-page.component.html',
    styleUrl: './jobs-grid-page.component.scss'
})
export class JobsGridPageComponent {
    constructor (
        public router: Router
    ) {}


    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
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
