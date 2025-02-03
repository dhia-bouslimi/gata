import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
//import { RouterLink, Router } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { WhyJoinUsComponent } from '../../common/why-join-us/why-join-us.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-jobs-left-sidebar-page',
    standalone: true,
    imports: [RouterLink, FormsModule,WhyJoinUsComponent, TopHeaderComponent, NavbarComponent, PageBannerComponent, FooterComponent, BackToTopComponent, NgClass, NgIf],
    templateUrl: './jobs-left-sidebar-page.component.html',
    styleUrl: './jobs-left-sidebar-page.component.scss'
})
export class JobsLeftSidebarPageComponent {


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

    // Accordion
    openSectionIndex: number = 0;
    toggleSection(index: number): void {
        if (this.openSectionIndex === index) {
            this.openSectionIndex = -1;
        } else {
            this.openSectionIndex = index;
        }
    }
    isSectionOpen(index: number): boolean {
        return this.openSectionIndex === index;
    }

}
