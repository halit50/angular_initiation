import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SingleFaceSnapComponent } from "./components/single-face-snap/single-face-snap.component";
import { FaceSnapListComponent } from "./components/face-snap-list/face-snap-list.component";
import { AddFaceSnapComponent } from "./components/add-face-snap/add-face-snap.component";

const routes: Routes = [
  {
    path: 'create',
    component: AddFaceSnapComponent
  },
  {
    path: ':id',
    component: SingleFaceSnapComponent
  },
  {
    path: '',
    component: FaceSnapListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FaceSnapsRoutingModule {}
