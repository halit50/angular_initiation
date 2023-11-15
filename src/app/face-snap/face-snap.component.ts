import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  clickSnap!: string;

  ngOnInit(){
    this.title = "Mon titre";
    this.description = "Ma description";
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://th.bing.com/th/id/OIG.0j67NMJ_6.el9IX1b.XM?pid=ImgGn&w=1024&h=1024&rs=1';
    this.clickSnap = "Oh snap!"
  }

  onClickSnap(){
   
    if (this.clickSnap == "Oups, déjà cliqué"){
      this.snaps--;
      this.clickSnap = "Oh snap!"
    } else {
      this.snaps++;
      this.clickSnap = "Oups, déjà cliqué"
    }
  }


}
