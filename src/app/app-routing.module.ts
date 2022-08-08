import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VisionComponent } from './pages/vision/vision.component';
import { RegionalesComponent } from './pages/regionales/regionales.component';


const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'vision', component: VisionComponent},
{path: 'regionales', component: RegionalesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}