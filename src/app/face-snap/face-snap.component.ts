import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap

  clickSnap!: string;

  ngOnInit(){
    this.clickSnap = "Oh snap!"
  }

  onClickSnap(){
   
    if (this.clickSnap == "Oups, déjà cliqué"){
      this.faceSnap.snaps--;
      this.clickSnap = "Oh snap!"
    } else {
      this.faceSnap.snaps++;
      this.clickSnap = "Oups, déjà cliqué"
    }
  }


}
