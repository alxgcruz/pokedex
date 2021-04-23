import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash.component';
import { Routes, RouterModule } from '@angular/router';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

const playerFactory = () => {
  return player;
};

const routes: Routes = [
  {
    path: '',
    component: SplashComponent
  }
];

@NgModule({
  declarations: [
    SplashComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LottieModule.forRoot({ player: playerFactory, useCache: true })
  ]
})
export class SplashModule { }
