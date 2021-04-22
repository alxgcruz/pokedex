import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  showButton = false;
  title = 'Pokédex';

  constructor(private navigation: NavigationService) { }

  ngOnInit(): void {
    this.navigation.showBackButton
      .subscribe( bool => this.showButton = bool);
  }

  onBack(): void {
    this.navigation.back();
  }
}
