import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-banner',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit, AfterViewInit {
    @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

    ngOnInit() {
        // Initial setup
    }

    ngAfterViewInit() {
        this.initializeVideo();
    }

    private initializeVideo() {
      setTimeout(() => {
          if (this.videoPlayer?.nativeElement instanceof HTMLVideoElement) {
              const video = this.videoPlayer.nativeElement;
              video.muted = true;
              video.setAttribute('playsinline', '');
              video.setAttribute('webkit-playsinline', '');
              
              // Wait for video to be ready
              video.addEventListener('loadedmetadata', () => {
                  const playPromise = video.play();
                  if (playPromise !== undefined) {
                      playPromise.then(() => {
                          console.log('Video playing automatically');
                      }).catch(error => {
                          console.error('Error playing video:', error);
                          document.addEventListener('click', () => {
                              video.play();
                          }, { once: true });
                      });
                  }
              });
          }
      }, 0);
  }
}