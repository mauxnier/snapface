import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass, TitleCasePipe, DatePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap-component',
  standalone: true,
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe],
  templateUrl: './single-face-snap-component.component.html',
  styleUrl: './single-face-snap-component.component.scss',
})
export class SingleFaceSnapComponentComponent implements OnInit {
  faceSnap!: FaceSnap;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
    
    const faceSnapId = this.route.snapshot.params['id'];
  }

  onSnap() {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
    this.renderButtonText();
  }

  unSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.userHasSnapped = false;
  }

  snap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.userHasSnapped = true;
  }

  renderButtonText() {
    if (this.userHasSnapped) {
      this.snapButtonText = 'Oops, unSnap!';
    } else {
      this.snapButtonText = 'Oh Snap!';
    }
  }
}
