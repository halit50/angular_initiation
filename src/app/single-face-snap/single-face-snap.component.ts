import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {

  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  clickSnap!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute){

  }

  ngOnInit(){
    this.clickSnap = "Oh snap!"
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(snapId);
  }

  onClickSnap(){
   
    // if (this.clickSnap == "Oups, déjà cliqué"){
    //   this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    //   this.clickSnap = "Oh snap!"
    // } else {
    //   this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    //   this.clickSnap = "Oups, déjà cliqué"
    // }
  }
}
