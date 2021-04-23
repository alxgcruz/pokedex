import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  showButton = false;
  showToolbar = false;
  title = 'Pokédex';

  constructor(private navigation: NavigationService) { }

  ngOnInit(): void {
    this.navigation.showItems
      .subscribe( (items: {back: boolean, tool: boolean}) => {
        this.showButton = items.back;
        this.showToolbar = items.tool;
      });
  }

  onBack(): void {
    this.navigation.back();
  }
}
