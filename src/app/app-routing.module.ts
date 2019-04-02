import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'bmi', pathMatch: 'full' },
//  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'bmi', loadChildren: './bmi/bmi.module#BMIPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
