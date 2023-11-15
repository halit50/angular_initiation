import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mysnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(){
    this.mysnap = new FaceSnap(
      'Un fruit de la passion qui galope',
      'Un événement étrange pour un fruit',
      new Date(),
      0,
      'https://th.bing.com/th/id/OIG.0j67NMJ_6.el9IX1b.XM?pid=ImgGn&w=1024&h=1024&rs=1'
    )

    this.myOtherSnap = new FaceSnap(
      'Une banane etrange',
      'Une banane qui fume',
      new Date(),
      0,
      'https://th.bing.com/th/id/OIG.eaqEgfDGoF3tq4GRb10S?w=270&h=270&c=6&r=0&o=5&pid=ImgGn'
    )

    this.myLastSnap = new FaceSnap(
      'La pasthèque championne',
      'La pasthèque comme vous ne lavez jamais vu',
      new Date(),
      0,
      'https://th.bing.com/th/id/OIG.N7pSir8ggZSH8Rd1Zo0g?w=270&h=270&c=6&r=0&o=5&pid=ImgGn'
    )
  }
}
