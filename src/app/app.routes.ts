import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponentComponent } from './single-face-snap-component/single-face-snap-component.component';

export const routes: Routes = [
    { path: 'facesnaps/:id', component: SingleFaceSnapComponentComponent },
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: '', component: LandingPageComponent }
];
