import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PreloadDelayed } from './shared/preload-delayed';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule),
    data: {
      preload: true,
      delay: 3000
    }
  }
];
// loadChildren: './books/books.module#BooksModule'

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: PreloadDelayed
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
