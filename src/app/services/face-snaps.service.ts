import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.models";

@Injectable({
    providedIn:'root'
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title : 'Un fruit de la passion qui galope',
            description : 'Un événement étrange pour un fruit',
            createdDate : new Date(),
            snaps : 80,
            imageUrl : 'https://th.bing.com/th/id/OIG.0j67NMJ_6.el9IX1b.XM?pid=ImgGn&w=1024&h=1024&rs=1',
            location: 'Paris'
          },
          {
            id: 2,
            title: 'Une banane etrange',
            description: 'Une banane qui fume',
            createdDate: new Date(),
            snaps: 160,
            imageUrl: 'https://th.bing.com/th/id/OIG.eaqEgfDGoF3tq4GRb10S?w=270&h=270&c=6&r=0&o=5&pid=ImgGn',
            location: 'Marseille'
          },
          {
            id: 3,
            title: 'La pasthèque championne',
            description: 'La pasthèque comme vous ne lavez jamais vu',
            createdDate: new Date(),
            snaps: 240,
            imageUrl: 'https://th.bing.com/th/id/OIG.N7pSir8ggZSH8Rd1Zo0g?w=270&h=270&c=6&r=0&o=5&pid=ImgGn'
          }
    ]

    getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap){
            throw new Error('FaceSnap not found!')
        } else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }

    addFaceSnap(formValue: {title:string, description: string, imageUrl: string, location?: string}): void{
        const faceSnap: FaceSnap = {
            ...formValue,
            snaps: 0,
            createdDate: new Date(),
            id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
        };
        this.faceSnaps.push(faceSnap)
    }
}
