import { Component, OnInit, NgZone } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { Router } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  options: AnimationOptions = {
    path: '/pokedex/assets/animations/pikachu.json',
    loop: true,
    autoplay: true
  };

  private animationItem: any;

  constructor(
    private ngZone: NgZone,
    private router: Router,
    private navigation: NavigationService) { }

  ngOnInit(): void {
    this.navigation.showItems.next({back: false, tool: false});
    setTimeout(() => {
        this.router.navigateByUrl('/pokemons');
    }, 3000);
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  updateAnimation(): void {
    this.ngZone.runOutsideAngular(() => this.animationItem.play());
    // ✔️✔️ Update `options` in this way
    // this.options = {
    //   ...this.options, // In case you have other properties that you want to copy
    //   path: 'assets/animations/chest.json',
    // };

    setTimeout( () => {
      this.ngZone.runOutsideAngular(() => this.animationItem.stop());
    }, 3000);
  }

}
