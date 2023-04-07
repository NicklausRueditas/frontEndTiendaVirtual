import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteComponent } from './website.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () => import('@modules/website/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'store',
        loadChildren: () => import('@modules/website/store/store.module').then((m) => m.StoreModule)
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
