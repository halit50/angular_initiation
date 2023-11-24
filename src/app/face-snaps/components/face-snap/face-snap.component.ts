import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../../../core/models/face-snap.models';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap

  clickSnap!: string;

  constructor(private faceSnapsService: FaceSnapsService, private router: Router){

  }

  ngOnInit(){
    this.clickSnap = "Oh snap!"
  }

  onClickSnap(){
   
    if (this.clickSnap == "Oups, déjà cliqué"){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.clickSnap = "Oh snap!"
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.clickSnap = "Oups, déjà cliqué"
    }
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }


}
