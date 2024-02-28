import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {KeepComponent} from  './components/keep/keep.component';
import { ArchiveContainerComponent } from './components/archive-container/archive-container.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotecardComponent } from './components/notecard/notecard.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TrashContainerComponent } from './components/trash-container/trash-container.component';

const routes: Routes = [
  {
    path: "signup",
    component: RegisterComponent
  },
  {
    path: "signin",
    component: LoginComponent
  },
  {
    path:"keep",
    component:KeepComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "notes",
        component: NotesContainerComponent
      },
      {
        path: "archive",
        component: ArchiveContainerComponent
      },
      {
         path: "trash",
         component: TrashContainerComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
