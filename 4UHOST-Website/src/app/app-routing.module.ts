import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DomainComponent } from './domain/domain.component';
import { HostingComponent } from './hosting/hosting.component';
import { IndexComponent } from './index/index.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  
  { path: 'index', component: IndexComponent },
  { path: 'hosting', component: HostingComponent },
  { path: 'domain', component: DomainComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, 
      {
        // enableTracing: true,
        useHash: true
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
