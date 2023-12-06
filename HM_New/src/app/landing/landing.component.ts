import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor(private dataService: DataService, private router : Router){

  }
  journey(journeyName: string){
      this.dataService.journeyName = "owner";
      this.router.navigateByUrl("login");
  }

}
