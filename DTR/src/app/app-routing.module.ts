import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignerComponent } from './designer/designer.component';
import { DesignerDescriptionComponent } from './designer-description/designer-description.component';

const routes: Routes = [
// { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'designerlist', component: DesignerComponent },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: DesignerDescriptionComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
