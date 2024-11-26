import { Route } from '@angular/router';
export const f1RacingAppRoutes: Route[] = [
  {
    path: 'seasons',
    loadComponent: () => import('@sports-hub/f1-racing/shared-ui').then(c => c.MainLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('@sports-hub/f1-racing/seasons/list').then(c => c.SeasonListComponent)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/seasons',
    pathMatch: 'full',
  },
];
