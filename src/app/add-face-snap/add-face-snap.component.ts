import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FaceSnap } from '../models/face-snap.models';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-add-face-snap',
  templateUrl: './add-face-snap.component.html',
  styleUrls: ['./add-face-snap.component.scss']
})
export class AddFaceSnapComponent implements OnInit {

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
    this.snapForm = this.formBuilder.group({
      title: [null],
      description: [null],
      imageUrl: [null],
      location: [null]
    })
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        snaps: 0,
        id: 0
      }))
    )
  }

  onSubmitForm(){
    console.log(this.snapForm.value)
  }

}
