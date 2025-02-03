import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-message',
    standalone: true,
    imports: [RouterLink, TopHeaderComponent, NavbarComponent, FooterComponent, BackToTopComponent],
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})
export class MessageComponent {}
