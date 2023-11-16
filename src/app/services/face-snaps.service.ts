import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.models";

@Injectable({
    providedIn:'root'
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            title : 'Un fruit de la passion qui galope',
            description : 'Un événement étrange pour un fruit',
            createdDate : new Date(),
            snaps : 80,
            imageUrl : 'https://th.bing.com/th/id/OIG.0j67NMJ_6.el9IX1b.XM?pid=ImgGn&w=1024&h=1024&rs=1',
            location: 'Paris'
          },
          {
            title: 'Une banane etrange',
            description: 'Une banane qui fume',
            createdDate: new Date(),
            snaps: 160,
            imageUrl: 'https://th.bing.com/th/id/OIG.eaqEgfDGoF3tq4GRb10S?w=270&h=270&c=6&r=0&o=5&pid=ImgGn',
            location: 'Marseille'
          },
          {
            title: 'La pasthèque championne',
            description: 'La pasthèque comme vous ne lavez jamais vu',
            createdDate: new Date(),
            snaps: 240,
            imageUrl: 'https://th.bing.com/th/id/OIG.N7pSir8ggZSH8Rd1Zo0g?w=270&h=270&c=6&r=0&o=5&pid=ImgGn'
          }
    ]
}