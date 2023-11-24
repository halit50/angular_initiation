import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceSnapListComponent } from "./face-snaps/components/face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/components/landing-page/landing-page.component";
import { SingleFaceSnapComponent } from "./face-snaps/components/single-face-snap/single-face-snap.component";
import { AddFaceSnapComponent } from "./face-snaps/components/add-face-snap/add-face-snap.component";

const routes: Routes = [
    {
        path: 'facesnaps', component: FaceSnapListComponent
    },
    {
        path: '', component: LandingPageComponent
    },
    {
        path: 'facesnaps/:id', component: SingleFaceSnapComponent
    },
    {
      path: 'create', component: AddFaceSnapComponent
    }
];

@NgModule(
    {
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ]
    }
)
export class AppRoutingModule{

}
