import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile = {
    firstName: 'David Alejandro',
    lastName: 'Gómez Cruz',
    tel: '9513913555',
    email: 'alejandrocruz.x819@gmail.com'
  };

  constructor(private navigation: NavigationService) { }

  ngOnInit(): void {
    this.navigation.showBackButton.next(true);
  }

}
