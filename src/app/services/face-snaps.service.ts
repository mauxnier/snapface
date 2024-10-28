import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';

@Injectable({ providedIn: 'root' })
export class FaceSnapsService {
  constructor() {}

  private faceSnaps: FaceSnap[] = this.initFaceSnaps();

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  initFaceSnaps(): FaceSnap[] {
    let faceSnaps = [];

    for (let i = 0; i < 2; i++) {
      faceSnaps[i] = new FaceSnap(
        'archibald le joli ourson',
        'Mon meilleur ami depuis tout petit !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        0
      ).withLocation('Dans le jardin');
    }

    return faceSnaps;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const foundFaceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    foundFaceSnap.snap(snapType);
  }
}
