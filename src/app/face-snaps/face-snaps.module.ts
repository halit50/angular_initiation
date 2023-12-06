import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { AddFaceSnapComponent } from './components/add-face-snap/add-face-snap.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FaceSnapsRoutingModule } from './face-snaps-routing.module';



@NgModule({
  declarations: [
    FaceSnapComponent,
    FaceSnapListComponent,
    AddFaceSnapComponent,
    SingleFaceSnapComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaceSnapsRoutingModule,
  ],
  exports: [
    FaceSnapComponent,
    FaceSnapListComponent,
    AddFaceSnapComponent,
    SingleFaceSnapComponent
  ]
})
export class FaceSnapsModule { }
