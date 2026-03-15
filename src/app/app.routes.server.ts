import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'question/:idx',
    renderMode: RenderMode.Client // Dice ad Angular di non prerenderizzare questa rotta
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender // Mantiene il prerender per il resto dell'app
  }
];
