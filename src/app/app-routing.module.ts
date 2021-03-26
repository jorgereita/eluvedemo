import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardPageModule } from './components/dashboard/dashboard.module';
import { DashboardPage } from './components/dashboard/dashboard.page';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';

const routes: Routes = [
  {
    path: 'login',
    // canActivate: [NoAuthGuard],
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  // { path: '**', redirectTo: 'dashboard' , pathMatch:'full'},
  {
    path: 'dashboard',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./components/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  }, 
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
