import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input() private rating = 3;
  @Input() private starCount = 5;
  @Output() private ratingUpdated = new EventEmitter();

  ratingArr = [...Array(this.starCount)].map((_, i) => i);

  showIcon(index: number): string {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  onClick(rating: number): void {
    this.ratingUpdated.emit(rating);
  }
}
