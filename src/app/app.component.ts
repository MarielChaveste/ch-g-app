import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { MainComponent } from './main/main.component';  // import the MainComponent from the main folder
import { ChaosUnrestComponent } from './chaos-unrest/chaos-unrest.component';  // import the ChaosUnrestComponent from the chaos-unrest folder
import { ChaosRest1Component } from './chaos-rest1/chaos-rest1.component';  // import the ChaosRest1Component from the chaos-rest1 folder
import { ChaosRest2Component } from './chaos-rest2/chaos-rest2.component';  // import the ChaosRest2Component from the chaos-rest2 folder
import { ChaosRest3Component } from './chaos-rest3/chaos-rest3.component';  // import the ChaosRest3Component from the chaos-rest3 folder
import { ChaosRest4Component } from './chaos-rest4/chaos-rest4.component';  // import the ChaosRest4Component from the chaos-rest4 folder

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, MainComponent, ChaosUnrestComponent, ChaosRest1Component, ChaosRest2Component, ChaosRest3Component, ChaosRest4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ch-g-app';

  inputNumber: number = 3;  // Variable to hold the number input
  showMainComponent: boolean = false;  // Boolean to control which component to display
  showChaosUnrestComponent: boolean = true; 
  showChaosRest1Component: boolean = false;
  showChaosRest2Component: boolean = false;
  showChaosRest3Component: boolean = false;
  showChaosRest4Component: boolean = false;

  isOn0 = true;
  isOn1 = false;
  isOn2 = false;
  isOn3 = false;
  isOn4 = false;

  // Function to check the input number and toggle components
  checkNumber(): void {
    this.showMainComponent = this.inputNumber === 3;
  }

  constructor(private router: Router) {  // create a constructor that takes in a router (import router from Angular router)
    
  }

  NavigateToMain() {  // create a function called NavigateToMain which navigates to the main page
    this.router.navigate(['/main']);  // use the router to navigate to the main page
  }

  NavigateToChaos() {  // create a function called NavigateToChaos which navigates to the chaos page
    this.router.navigate(['/chaos']);  // use the router to navigate to the chaos page
  }

}
