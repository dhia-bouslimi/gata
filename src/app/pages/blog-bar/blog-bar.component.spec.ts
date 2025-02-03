import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBarComponent } from './blog-bar.component';

describe('BlogBarComponent', () => {
  let component: BlogBarComponent;
  let fixture: ComponentFixture<BlogBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
