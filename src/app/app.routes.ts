import { Routes } from '@angular/router';  // import the Routes module from Angular router
import { ChaosUnrestComponent } from './chaos-unrest/chaos-unrest.component';  // import the ChaosUnrestComponent from the chaos-unrest folder
import { MainComponent } from './main/main.component';  // import the MainComponent from the main folder

export const routes: Routes = [  // create a constant variable routes of type Routes
    {path: '', redirectTo: 'chaos', pathMatch: 'full'},  // redirect to main page
    {path: 'chaos', component: ChaosUnrestComponent}, // path to chaos page
    {path: 'main', component: MainComponent}  // path to main page
];  
